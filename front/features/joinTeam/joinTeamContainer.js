import {connect} from 'react-redux'
import JoinTeam from './JoinTeam'


const mapStateToProps = state => ({
  allTeams: state.app.allTeams, 
  user: state.app.user
})

export default connect(mapStateToProps)(JoinTeam)