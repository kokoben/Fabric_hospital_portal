import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PieChart, Pie, Sector, Cell } from 'recharts';

class DishChart extends Component {
	render() {
		var data = [
					{name: 'Carbs', value: this.props.data.carbohydrates},
					{name: 'Protein', value: this.props.data.protein},
					{name: 'Fat', value: this.props.data.totalFat}
				];
		console.log(data);

		return (
			<PieChart width={200} height={250}>
				<Pie
					dataKey="macros"
					data={data}
					label={true}
				>
				</Pie>
			</PieChart>
		);
	}
}

function mapStateToProps(state) {
	return {
		diary: state.diary
	};
}

export default connect(mapStateToProps)(DishChart);
