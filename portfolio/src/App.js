import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import PersonalInformation from './components/personal_info'
import PersonalImage from './components/personal_image'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PersonalImage />
        <PersonalInformation />
      </div>
    );
  }
}

export default App;
