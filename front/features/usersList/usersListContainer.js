import {connect} from 'react-redux';
import UsersList from './UsersList';

const mapStateToProps = state => {
	console.log(state.channel)
	return{
		userChannels: state.channel
}}

export default connect(mapStateToProps)(UsersList) 