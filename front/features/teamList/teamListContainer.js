import {connect} from 'react-redux'
import TeamList from './TeamList'


const mapStateToProps = state => ({
  teams: state.login.userTeams
})

export default connect(mapStateToProps)(TeamList)