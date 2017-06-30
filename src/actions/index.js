import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';

const ROOT_URL = 'http://eventshop.ics.uci.edu:8003';

export function fetchUser(username) {
	//TODO change back to username. using menu for now.
	const request = axios.get(`${ROOT_URL}/restaurant/${username}/menu`, {
		auth: {
			username: 'INDIA',
			password: 'SHINING'
		}
	});

	return {
		type: FETCH_USER,
		payload: request
	};
}
