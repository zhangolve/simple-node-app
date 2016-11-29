// const $ = require('jquery');
/*import $ from 'jquery';
import _ from 'lodash' ;*/
import React, { Component ,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import App  from './src/index';
/*$('h1').css({ color: 'black' });*/

/*class  app extends React.createClass{
	render()
	{
	return(	<div>this is a test for react</div>)
	}
};
*/


ReactDOM.render(<App/>, document.getElementById('react'));


