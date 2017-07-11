import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PieChart, Pie, Sector, Cell } from 'recharts';

const COLORS = ['#0088cc', '#ffcc00', '#e60000'];
const RADIAN = Math.PI / 180;

class FoodChart extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [
					{name: 'C', value: this.props.data.carbohydrates},
					{name: 'P', value: this.props.data.protein},
					{name: 'F', value: this.props.data.totalFat}
		]};

		this.renderCustomizedLabel = this.renderCustomizedLabel.bind(this);

	}
	renderCustomizedLabel({cx, cy, midAngle, innerRadius, outerRadius, index}) {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start': 'end'} dominantBaseline="central">
			{this.state.data[index].name}
			</text>
		);
	}
	render() {
		return (
			<PieChart width={200} height={150}>
				<Pie
					data={this.state.data}
					labelLine={false}
					label={this.renderCustomizedLabel}
				>
					{
						this.state.data.map((entry, index) => <Cell key={COLORS[index]} fill={COLORS[index]}/>)
					}
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

export default connect(mapStateToProps)(FoodChart);
