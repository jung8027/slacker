import {connect} from 'react-redux'
import Channel from './Channel'
import {withRouter} from 'react-router'
import {bindActionCreators} from 'redux';
import {removeSocketMessages} from './channelActions';


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    removeSocketMessages
  }, dispatch)
)

const mapStateToProps = state => ({
  	channels: state.app.chatrooms
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Channel))