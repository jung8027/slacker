import React from 'react';
import store from '../../store/store';
import _ from 'lodash';
import $ from 'jquery';
import auth from '../../routes/auth';

const JoinTeam = props => {
  const addTeamToUser = teamName => {
    $.ajax({
      url: `/api/user/${props.user.username}`,
      type: 'PUT',
      data: {
        teamName: teamName
      }
    })
    .done(userInfo => {
      localStorage.userInfo = JSON.stringify(userInfo);
    })
  }
   const submitLoginInfo = () =>{  
    auth.login(props.user.username, props.user.password, (loggedIn, teamName) => {
      console.log('loggedin?', teamName);
      props.router.replace(`/${teamName}/${teamName}`)
    })
  }
  return (
    <div>
    Click On A Team To Join:
      {props.allTeams && _.map(props.allTeams, (team, index) => (
        <p key={index} onClick={()=>addTeamToUser(team.name)}>{team.name}</p>
      ))}
      <button onClick={()=>submitLoginInfo()}>Enter Chat</button>
    </div>
  )
}

export default JoinTeam;