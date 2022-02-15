import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(

  onClick= () =>{
    <h1>You clicked me</h1>
  },

  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.onClick} />
  </div>,
  document.getElementById('root')
);