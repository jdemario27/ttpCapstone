import React, {Component} from 'react';
import axios from 'axios';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from './Config'
import './MovieSearch.css'
import GridCard from './commons/GridCard'
import { Typography, Row, Button } from 'antd';

class MovieSearch extends Component {
    constructor() {
        super()
        this.state = {
            movie:'',
            data: [],
            results: []
        }
    }

    handleChange = (event) => {
        this.setState({
            movie: event.target.value
        })
    } 

    componentDidMount = () => {
        console.log("search is searching")
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&query=${this.state.movie.toUpperCase()}&page=1&include_adult=false`)
            .then(response => {
                console.log("search activated")
                //console.log(response)
                const newInfo = response.data;
                this.setState({data: newInfo.results});
                
            })
            .catch(err => console.log(err))
            console.log(this.state.data)

    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.movie !== this.state.movie) {
            this.componentDidMount();
        }
    }
    
    render() {
        return (
            <div>
                <br></br>
                <div className="searchDiv">
                <form>
                    Search a Movie: <input type="text" name="movie" placeholder="Good Fellas" onChange={this.handleChange}></input>
                </form>
                </div>
                <br></br>
                <div style={{ width: '85%', margin: '1rem auto' }}>
                <Row gutter={[16, 16]}> 
                {this.state.data.map(data =>
                    <div movieId={data.id}>
                        <GridCard className="searchedImages"
                                image={data.poster_path ?
                                    `${IMAGE_BASE_URL}${POSTER_SIZE}${data.poster_path}`
                                    : null}
                                movieId={data.id}
                                movieName={data.original_title}
                        />  
                    </div>
                )}
                </Row>
                </div>
            </div>
        )
    }
}

export default MovieSearch