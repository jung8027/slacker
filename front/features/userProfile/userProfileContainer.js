 import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './userActions'
import User from './User' 

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = (state) => ({
  user: state.user.user, 
})

export default connect(mapStateToProps, mapDispatchToProps)(User)
