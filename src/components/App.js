import React from 'react';
import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';
import '../styles/App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className='row'>
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    );
  }
}


