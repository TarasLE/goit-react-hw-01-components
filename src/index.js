import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import randomColor from './utilities/randomColor'

ReactDOM.render(<App/>, document.querySelector('#root'));

randomColor();

