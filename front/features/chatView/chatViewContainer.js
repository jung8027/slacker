import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ChatView from './ChatView'
import {inputAction} from './chatViewActions'

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    inputAction,
  }, dispatch)
)

const mapStateToProps = state => ({
  input: state.chatView.input
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatView)