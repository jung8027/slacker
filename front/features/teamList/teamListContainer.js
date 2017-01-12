import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router';
import TeamList from './TeamList';
import {updateUserInfo} from '../app/appActions';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
   updateUserInfo,
  }, dispatch)
)

const mapStateToProps = state => ({
  teams: state.app.userTeams,
  user: state.app.user,
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamList))