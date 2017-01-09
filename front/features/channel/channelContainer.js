import {connect} from 'react-redux'
import Channel from './Channel'


const mapStateToProps = state => {
	// console.log(state.login.userChatrooms)
	return{
		userChannels: state.login.userChatrooms
}}

export default connect(mapStateToProps)(Channel)