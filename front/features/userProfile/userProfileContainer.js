  import {connect} from 'react-redux';
import UserProfile from './UserProfile';

const mapStateToProps = state => {
	console.log('this is userprofile state', state)
	return{
		username: state.userProfile.username,
		bio: state.userProfile.bio
}}

export default connect(mapStateToProps)(UserProfile)  