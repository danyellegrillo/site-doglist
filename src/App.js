import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogsListContainer from './Component/DogsListContainer'
import { Route } from 'react-router-dom'
import DogBreedImages from './Component/DogBreedImages'
import { Link } from 'react-router-dom'
import DogBreedImagesContainer from './Component/DogBreedImagesContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DogsListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />


      </div>
    );
  }
}

export default App;
