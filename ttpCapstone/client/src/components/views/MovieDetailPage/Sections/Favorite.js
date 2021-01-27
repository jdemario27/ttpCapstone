// import axios from 'axios'
// import React, {useEffect, useState } from 'react'
// import { Button } from 'antd';
// import { useSelector } from 'react-redux';

// function Favorite(props) { 

//     const [FavoriteNumber, setFavoriteNumber] = useState(0)

//     const [Favorited, setFavorited] = useState(false) 

//     const variable = {
//         userFrom: props.userFrom,
//         movieId: props.movieId,
//         movieTitle: props.movieInfo.original_title,
//         movieImage: props.movieInfo.backdrop_path,
//         movieRunTime: props.movieInfo.runtime
//     }
   
//    useEffect(() => {
    
//     axios.post('/api/favorite/favoriteNumber', variable)
//         .then(response => {
//             if(response.data.success){
//                 setFavoriteNumber(response.data.favoriteNumber)
//             } else{
//                 alert('Failed to get favoriteNumber')
//             }
//         })

//     axios.post('/api/favorite/favorited', variable)
//     .then(response=> {
//         if(response.data.success){
//             setFavorited(response.data.favorited)
//         } else{
//             alert('Failed to get Favorite Info')
//         }
//     })



//    }, [])
   
   
   
//    const onClickFavorite = () => {
//        if(Favorited) {
//            //Adding to favorites
//            axios.post('/api/favorite/removeFromFavorite', variable)
//            .then(response => {
//                if(response.data.success){
//                 setFavoriteNumber(FavoriteNumber - 1)
//                 setFavorited(!Favorited)
//                } else{
//                    alert('Failed To Remove From Favorites')
//                }
//            })

//        } else{
//            //Not added to favorites yet 
//            axios.post('/api/favorite/addToFavorite', variable)
//            .then(response => {
//                if(response.data.success){
//                 setFavoriteNumber(FavoriteNumber + 1)
//                 setFavorited(!Favorited)
//                } else{
//                    alert('Failed To Add To Favorites')
//                }
//            })
//        }
//    }
   
   
//     return (
//         <div>
//             <Button onClick={onClickFavorite}> {Favorited ? " remove from Favorites " : "Add to Favorites" } {FavoriteNumber}</Button>
//         </div>
//     )
// }

// export default Favorite


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'antd';
import { useSelector } from 'react-redux';

function Favorite(props) {
    const user = useSelector(state => state.user)

    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(false)
    const variables = {
        movieId: movieId,
        userFrom: userFrom,
        movieTitle: movieTitle,
        moviePost: moviePost,
        movieRunTime: movieRunTime
    }

    const onClickFavorite = () => {

        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in first');
        }

        if (Favorited) {
            //when we are already subscribed 
            axios.post('/api/favorite/removeFromFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber - 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to Remove From Favorite')
                    }
                })

        } else {
            // when we are not subscribed yet

            axios.post('/api/favorite/addToFavorite', variables)
                .then(response => {
                    if (response.data.success) {
                        setFavoriteNumber(FavoriteNumber + 1)
                        setFavorited(!Favorited)
                    } else {
                        alert('Failed to Add To Favorite')
                    }
                })
        }
    }

    useEffect(() => {

        axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                if (response.data.success) {
                    setFavoriteNumber(response.data.subscribeNumber)
                } else {
                    alert('Failed to get Favorite Number')
                }
            })

        axios.post('/api/favorite/favorited', variables)
            .then(response => {
                if (response.data.success) {
                    setFavorited(response.data.subcribed)
                } else {
                    alert('Failed to get Favorite Information')
                }
            })

    }, [])


    return (
        <>
            <Button onClick={onClickFavorite} > {!Favorited ? "Add to Favorite" : "Not Favorite"} {FavoriteNumber}</Button>
        </>
    )
}

export default Favorite