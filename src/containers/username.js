import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../actions/index';

class Username extends Component {
	constructor(props){
		super(props);

		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.scrollToTop = this.scrollToTop.bind(this);
	}

	onInputChange(event) {
		this.setState({term: event.target.value}, 
			() => this.props.fetchUser(this.state.term)
		);
	}

	scrollToTop() {
		document.body.scrollTop = 0; // for chrome, safari, and opera.
		document.documentElement.scrollTop = 0; // for ie and firefox.
	}

	render(){
		return(
			<div className="username input-group">
				<input className="form-control" placeholder="Username" value = {this.state.term}
			   	onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button onClick={this.scrollToTop} className="btn btn-primary" type="button">Top</button>
				</span>
			</div>
		)	
	}
}

export default connect(null, {fetchUser})(Username);
