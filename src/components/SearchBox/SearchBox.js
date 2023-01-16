import React, { Component } from 'react';
import './SearchBox.css';
//import { searchMovie } from '../../actions/actionTypes';
import store from '../../store';
class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`https://omdbapi.com/?s=${this.state.searchLine}&apikey=7249d26b`)
            .then(response => response.json())
            .then(res => {
                store.dispatch({
                    type: "SEARCH_MOVIE",
                    payload: {
                        movies: res.Search
                    }
                })
            })
            .catch(err => {
                console.log(err)
            });
    }
    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Search movie by title:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="E.g. Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBox;