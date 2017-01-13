import React from 'react';
import store from '../../store/store';
import _ from 'lodash';
import $ from 'jquery';

const JoinTeam = props => {
  const addTeamToUser = teamId => {
    $.ajax({
      url: `/api/user/${props.user.username}`,
      type: 'PUT',
      data: teamId
    })
    .done(userInfo => {
      localStorage.userInfo = JSON.stringify(userInfo)
    })
  }

  return (
    <div>
      {props.allTeams && _.map(props.allTeams, (team, index) => (
        <p key={index} onClick={()=>addTeamToUser(team.id)}>{team.name}</p>
      ))}
    </div>
  )
}

export default JoinTeam;