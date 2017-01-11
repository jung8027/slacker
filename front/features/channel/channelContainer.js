import {connect} from 'react-redux'
import Channel from './Channel'


const mapStateToProps = state => {
	// console.log(state)
	return{
		// userChannels: state.login.userChatrooms
}}

export default connect(mapStateToProps)(Channel)