import React, {Component} from 'react';
import {connect} from 'react-redux';

class DiaryList extends Component {
	constructor(props) {
		super(props);

		this.state = {width: $(window).width(), 
						height: $(window).height()
		}

		this.updateDimensions = this.updateDimensions.bind(this);
	}

	componentDidMount() {
		window.addEventListener("resize",  this.updateDimensions);
	}
	
	componenetWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}
	
	updateDimensions() {
		this.setState({width: $(window).width(), height: $(window).height()});
	}

	renderDiary(diaryData, key=diaryData.dishId /*not sure if which specific field used as key matters..*/) {
		return (
			<div key={diaryData.dishId}>
				<div  className="col-sm-6 col-md-4 col-lg-3" >
					<ul className="list-group">
						<li className="list-group-item"><img className="img-thumbnail"src={diaryData.imageLink} alt="No image available."/></li>
						<li className="list-group-item">{diaryData.dishName}</li>
						<li className="list-group-item">Price :{diaryData.price}</li>
						<li className="list-group-item">Calories: {diaryData.calories}</li>
						<li className="list-group-item">Health Score: {diaryData.healthScoreM}</li>
					</ul>
				</div>
				{($(window).width() >= 576 && $(window).width() < 768) &&
					key % 2 == 1 && 
						<div className="clearfix visible-sm-block"></div>
				}
				{($(window).width() >= 768 && $(window).width() < 992) &&
					key % 3 == 2 &&
						<div className="clearfix visible-md-block"></div>
				}
				{$(window).width() >= 992 &&
					key % 4 == 3 &&
						<div className="clearfix visible-lg-block"></div>
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
