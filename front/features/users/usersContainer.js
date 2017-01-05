import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './usersActions'
import Users from './Users' 

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = (state) => ({
  users: state.usersReducer.users, 
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
