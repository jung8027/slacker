import {connect} from 'react-redux'
import Channel from './Channel'


const mapStateToProps = state => {
	// Object.keys(userObj).map((k)=>console.log(userObj[k]))
	console.log(state.channel)
	return{
		userChannels: state.channel
}}

export default connect(mapStateToProps)(Channel)