import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchUser} from '../actions/index';
class Username extends Component{
	constructor(props){
		super(props);

		this.state = {term: ''};
	}

	render(){
		return(
			<div className="username">
				Username: 
				<input value = {this.state.term} />
			</div>
		)	
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchUser}, dispatch);
}

export default connect(null, mapDispatchToProps)(Username);
