import React, { Component } from 'react';
import Username from '../containers/username';

export default class App extends Component {
  render() {
    return (
      <div>		  
	  		<h1>Diary</h1>
		  <Username/>
	  </div>
    );
  }
}

