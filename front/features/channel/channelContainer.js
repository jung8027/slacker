import {connect} from 'react-redux'
import Channel from './Channel'

const mapStateToProps = state => 
{channels: state.app.chatrooms}

export default connect(mapStateToProps)(Channel)