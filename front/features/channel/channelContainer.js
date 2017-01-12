import {connect} from 'react-redux'
import Channel from './Channel'
import {withRouter} from 'react-router'


const mapStateToProps = state => ({
  	channels: state.app.chatrooms
})

export default withRouter(connect(mapStateToProps)(Channel))