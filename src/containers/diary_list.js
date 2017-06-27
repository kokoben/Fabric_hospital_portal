import React, {Component} from 'react';
import {connect} from 'react-redux';

class DiaryList extends Component {
	renderDiary(diaryData) {

	}

	render {

	}
}

function mapStateToProps(diary) {
	return {diary};
}

export default connect(mapStateToProps)(DiaryList)
