import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ChatView from './ChatView'
import {inputAction, updateSocketMessages} from './chatViewActions'

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    inputAction,
    updateSocketMessages,
  }, dispatch)
)

const mapStateToProps = state => ({
  userChannels: state.login.userChannels,
  input: state.chatView.input,
  socketMessages: state.chatView.socketMessages
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatView)