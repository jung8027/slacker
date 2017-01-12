import {connect} from 'react-redux';
import UsersList from './UsersList';

const mapStateToProps = state => {
	return{
		userChannels: state.channel
}}

export default connect(mapStateToProps)(UsersList) 