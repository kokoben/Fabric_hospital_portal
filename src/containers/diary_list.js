import React, {Component} from 'react';
import {connect} from 'react-redux';

class DiaryList extends Component {
	renderDiary(diaryData, key=diaryData.dishId /*not sure if which specific field used as key matters..*/) {
		return (
			<div key={diaryData.dishId}>
				<div className="col-sm-4" >
					<ul>
						<li><img src={diaryData.imageLink} /></li>
						<li>Dish Name: {diaryData.dishName}</li>
						<li>Price :{diaryData.price}</li>
						<li>Calories: {diaryData.calories}</li>
						<li>Health Score: {diaryData.healthScoreM}</li>
						<li>{key}</li>
					</ul>
				</div>
				{key % 3 == 2 &&
					<div className="clearfix"></div> 
				}
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
