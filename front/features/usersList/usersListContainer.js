import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './usersListActions';
import UsersList from './UsersList';

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = (state) => ({
  usersList: state.usersList 
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
