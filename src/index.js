import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
class App extends Component { 
  render() {
  	var content='# this is markdown';
    return (
      <div className="App">
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <ReactMarkdown source={content} />
        </p>
      </div>
    );
  }
}

export default App;