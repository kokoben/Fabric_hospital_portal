import React, { Component } from 'react';
import Username from '../containers/username';
import DiaryList from '../containers/diary_list';

export default class App extends Component {
  render() {
    return (
      <div>
		<h1 className="banner text-xs-center">Diary</h1>
		<div className="banner username-field text-xs-center">
			<Username />
		</div>
		<div className="sub-container center-block">
			<DiaryList />
		</div>
	  </div>
    );
  }
}

