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
  channel: state.channel.channel,
  chatroomMessages: state.channel.chatroomMessages,
  input: state.chatView.input,
  socketMessages: state.chatView.socketMessages,
  user: state.app.user
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatView)