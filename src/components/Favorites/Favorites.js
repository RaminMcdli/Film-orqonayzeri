import React, { Component } from 'react';
import './Favorites.css';
import store from '../../store';
import { Link } from 'react-router-dom';
class Favorites extends Component {
    state = {
        title: 'Новый список',
        movies: [],
        value: "",
        newEntry: 0,
        disabled: false,
        id: ""
    }
    handleValue = (e) => {
        this.setState({ value: e.target.value })
    }
    removeMovie(imdbID) {
        store.dispatch({
            type: "REMOVE_MOVIE_FROM_FAVORITE_LIST",
            payload: {
                imdbID: imdbID,
            }
        })
    }
    handleClick = (e) => {
        this.setState({ disabled: true });
        e.target.style.display = "none";
        const data = {
            "title": this.state.value,
            "movies": this.state.movies
        };
        fetch(`https://acb-api.algoritmika.org/api/movies/list `, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then((res) => this.setState({ id: res.id }))

    }
    componentDidMount() {
        store.subscribe(() => {
            const globalState = store.getState();
            this.setState({ movies: globalState.favoriteList, newEntry: globalState.newEntry })

        })

    }
    render() {
        return (
            <div className="favorites">
                <input disabled={this.state.disabled} onChange={this.handleValue} value={this.state.value} placeholder="Enter a name for the list" className="favorites__name" />
                <ul className="favorites__list">
                    {this.state.movies.map((item) =>

                    (<li key={item.imdbID} className="favorites__list-item" >{item.Title} ({item.Year})
                        <button onClick={() => this.removeMovie(item.imdbID)} disabled={this.state.disabled}>X</button>
                    </li>)


                    )}

                </ul>
                {!this.state.disabled ? (<button type="button" onClick={this.handleClick} disabled={this.state.value === "" || this.state.newEntry <= 0} className="favorites__save" >Save List</button>) : (<Link to={"/list/" + this.state.id} >Go to the list</Link>)
                }
            </div>
        );
    }
}

export default Favorites;