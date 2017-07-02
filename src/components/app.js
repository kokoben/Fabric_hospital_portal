import React, { Component } from 'react';
import Username from '../containers/username';
import DiaryList from '../containers/diary_list';

export default class App extends Component {
  render() {
    return (
      <div>		  
		<h1 className="text-xs-center">Diary</h1>
	  	<Username />
	  	<DiaryList />
	  </div>
    );
  }
}

