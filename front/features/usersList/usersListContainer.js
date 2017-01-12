import {connect} from 'react-redux';
import UsersList from './UsersList';

const mapStateToProps = state => {
	console.log('this is the state from the userlistconatiner', state.channel)
	return{
		userChannels: state.channel
}}

export default connect(mapStateToProps)(UsersList) 