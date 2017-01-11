import {connect} from 'react-redux'
import Channel from './Channel'
import UserList from ''


const mapStateToProps = state => {
	// Object.keys(userObj).map((k)=>console.log(userObj[k]))
	console.log(state)
	return{
		userChannels: state.channel
}}

const mapStateToProps = (state) => ({
  usersList: state.usersList 
})

export default connect(mapStateToProps)(Channel)
export default connect(mapStateToProps, mapDispatchToProps)(UsersList)