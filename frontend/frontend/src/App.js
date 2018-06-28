import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from  './store';

class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      timelines:[],
      apiConfig: {
          headers: {Authorization: `Token 061f0cf01ffcdbb53d5cb35381f02b8ec963dc60`}
      }
    }
}

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Timelined</h1>
        </header>
        <Navbar />
        <div className="container">
          <Main />
        </div>
        <div className="fixed-action-btn">
          <Link to="/meetups/add" className="btn-floating btn-large red">
          <i className="fa fa-plus"></i>
          </Link>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
