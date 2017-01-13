import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import _ from 'lodash';
import store from '../../store/store';
import {getChannel} from '../channel/channelActions';

const TeamList = props => {
  const {teams, user} = props;

  const showTeam = teamId => {
    $.ajax({
      url: `/api/team/${teamId}/${user.id}`,
      type: 'GET'
    })
    .done(userTeamData => {
      const {id, username, password, currentTeam, Teams, Chatrooms} = userTeamData

      //change incoming data key names to match initial token variables
      const user = {id, username, password, currentTeam}
      const data = {
        user,
        teams: Teams,
        chatrooms: Chatrooms
      }
      localStorage.userInfo = JSON.stringify(data)

      //update store infomation
      props.updateUserInfo(user, Teams, Chatrooms)

      //change the url to match current Team/Channel display infomation 
      const viewingTeam = _.find(Teams, team => (
        currentTeam === team.id
      ))
      props.router.replace(`/${viewingTeam.name}/${viewingTeam.name}`)

      //send out request for specific channel infomation, second argument find the "general channel"
      const viewingChannel = _.find(Chatrooms, chatroom => (
          chatroom.name === viewingTeam.name
      ))
      getChannel(viewingTeam.name, viewingChannel.name)
    })
  };

  const getTeams = () => {
    $.ajax({
      url: '/api/team',
      type: 'GET'
    })
    .done(teams => {
      console.log(teams)
      //get all teams for the join team list
      props.updateTeams(teams)
    })
  };

  return (
    <section className="team_list">
      {teams && teams.map((team,index) =>{
        return <div onClick={()=>showTeam(team.id)} className="team_img square" key={index}><p>{team.name}</p></div>
      }
      )}
      <Link to={{
        pathname: `/${props.params.team}/${props.params.channel}`,
        state: { modal: true, returnTo: props.location.pathname }
      }} onClick={getTeams}>
        <h1 className="square"> + </h1>
      </Link>
    </section>
  )
}

export default TeamList;