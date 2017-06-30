import React, {Component} from 'react';
import {connect} from 'react-redux';

class DiaryList extends Component {
	renderDiary(diaryData) {
		return (
			<div>
				<ul>
					<li>Dish Name: {diaryData.dishName}</li>
					<li>Price :{diaryData.price}</li>
					<li>Calories: {diaryData.calories}</li>
					<li>Health Score: {diaryData.healthScoreM}</li>
				</ul>
			</div>
		)
	}

	render() {
		if (this.props.diary.data == undefined) {
			return (
				<div>
					Please enter a valid username.
				</div>
			)
		}
		else {
			
		}
		return (
			<div>
				{this.props.diary.data.map(this.renderDiary)}
			</div>
		);

	}
}

function mapStateToProps(state) {
	return {
		diary: state.diary
	};
}

export default connect(mapStateToProps)(DiaryList);
