import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Jones',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends React.Component {
  render () {
    return (
      <List users={users} movies={movies} profiles={profiles}/>
    )
  } 
}

class List extends React.Component {
  render() {
    const arr = [];
    for (let key in this.props.movies) {
      movieFans = [];
      arr[parseInt(key)-1] = {movieFans: [], movieName: this.props.movies[key].name};
      for (let i = 0; i<this.props.profiles.length; i++){
        if (this.props.profiles[i].favoriteMovieID === key) {
          arr[parseInt(key)-1].movieFans.push(this.props.users[this.props.profiles[i].userID].name);
        }
      }
    }  
    return (
      <div>
        {arr.map((data) => {
          if (data.movieFans.length) {
            return (
              <div>
                <h2>{data.movieName}</h2>
                <p>Liked By:</p>
                <ul>
                  {data.movieFans.map((fan) => <li>{fan}</li>)}
                </ul>
              </div>
            )
          } else {
            return (
              <div>
                <h2>{data.movieName}</h2>
                <p>None of the current users liked this movie</p>
              </div>
            )
          }
        })}
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
