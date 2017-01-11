import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import App from './App';
import {updateUserInfo} from '../login/loginActions'


const mapDispatchToProps = dispatch => (
  bindActionCreators({
   updateUserInfo,
  }, dispatch)
)

const mapStateToProps = state => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))