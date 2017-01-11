import {connect} from 'react-redux'
import TeamList from './TeamList'


const mapStateToProps = state => ({
  teams: state.app.userTeams,
  user: state.app.user,
})

export default connect(mapStateToProps)(TeamList)