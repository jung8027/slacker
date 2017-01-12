 import {connect} from 'react-redux';
import UserProfile from './UserProfile';

const mapStateToProps = state => {
	console.log('this is userprofile state', state)
	return{
		username: state.username,
		bio: state.bio
}}

export default connect(mapStateToProps)(UserProfile) 