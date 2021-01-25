import axios from 'axios'
import React, {useEffect} from 'react'
import axios from 'axios'
import { response } from 'express'
function Favorite() {
   
   
   useEffect(() => {
       
    const variable = {
        
    }


    axios.post('/api/favorite/favoriteNumber', variable)
        .then(response => {
            if(response.data.success){

            } else{
                alert('Failed to get favoriteNumber')
            }
        })



   }, [])
   
   
   
   
   
   
    return (
        <div>
            <button> Add to Favorite</button>
        </div>
    )
}

export default Favorite
