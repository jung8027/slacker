import {connect} from 'react-redux'
import Channel from './Channel'


const mapStateToProps = state => {
	console.log(state)
	return
	{
  	userChatrooms: state.app
  	}
}

export default connect(mapStateToProps)(Channel)