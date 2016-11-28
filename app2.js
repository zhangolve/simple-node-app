// const $ = require('jquery');
import $ from 'jquery';
import _ from 'lodash' ;
import './index.css';
const a = [1, 2, 3, 4, 5];
const item = _.filter(a, (items) => items > 4);
console.log(item);

$('h1').text('this is your ');

