import {connect} from 'react-redux'
import Channel from './Channel'


const mapStateToProps = state => {
	console.log(state.channel.users)
	// Object.keys(userObj).map((k)=>console.log(userObj[k]))
	return
		{
		users: state.channel.users
   		}
}

export default connect(mapStateToProps)(Channel)