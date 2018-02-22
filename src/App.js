import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './uploader'
import Uploader from "./uploader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <div className="Uploader-container">
            <Uploader 
                doctype="Selfie"
                header="Upload Selfie" 
                title="We require a selfie of you with your photo ID."
                subtitle="How to take your selfie"
                image="/assets/placeholder.png"
                button="Add your photo ID"
                step1bullets={["Hold your ID under your chin.", "Make sure we can see your photos match", "Don't add filters or change the picture in any way."]}
                step3bullets={["We’ll review your identification and let you know if there 	are any problems with it.", "Once reviewed we’ll add this as proof of ID for your Car Finance application."]}
            />
        </div>
      </div>
    );
  }
}

export default App;
