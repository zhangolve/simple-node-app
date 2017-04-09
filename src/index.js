import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
class App extends Component { 
  render() {
  	var content='# this is markdown';
    return (
      <div className="App">
        
        <p className="App-intro">
          <div>this is a perfect test </div>
          <ReactMarkdown source={content} />
        </p>
      </div>
    );
  }
}

export default App;