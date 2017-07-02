import React, {Component} from 'react';
import {connect} from 'react-redux';

class DiaryList extends Component {
	renderDiary(diaryData, key=diaryData.dishId /*not sure if which specific field used as key matters..*/) {
		return (
			<div key={diaryData.dishId}>
				<div className="col-sm-6 col-md-4 col-lg-3" >
					<ul className="list-group">
						<li className="list-group-item"><img className="img-thumbnail"src={diaryData.imageLink} /></li>
						<li className="list-group-item">{diaryData.dishName}</li>
						<li className="list-group-item">Price :{diaryData.price}</li>
						<li className="list-group-item">Calories: {diaryData.calories}</li>
						<li className="list-group-item">Health Score: {diaryData.healthScoreM}</li>
					</ul>
				</div>
				{key % 4 == 3 &&
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

		return (
			<div className="diary">
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
