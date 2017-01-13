import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import App from './App';
import {updateUserInfo} from './appActions';


const mapDispatchToProps = dispatch => (
  bindActionCreators({
   updateUserInfo,
  }, dispatch)
)

const mapStateToProps = state => ({
	showProfile: state.userProfile.showProfile, 
  channel: state.channel.channel,
  userInfo: state.channel.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))