// const $ = require('jquery');
/*import $ from 'jquery';
import _ from 'lodash' ;*/
import React, { Component ,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import App  from './src/index';
import helloWorld from './pages/helloWorld';
import ReactMarkdown from 'react-markdown';
// import fs from 'fs';

// var areYouOk=fs.readFileSync('pages/areyouok.md');
//var input = '# This is a header\n\nAnd this is a paragraph';
/*$('h1').css({ color: 'black' });*/

/*class  app extends React.createClass{
	render()
	{
	return(	<div>this is a test for react</div>)
	}
};
*/


ReactDOM.render(<ReactMarkdown source={helloWorld} />, document.getElementById('react'));


