import React from 'react';
import $ from 'jquery'
import store from '../../store/store';

const TeamList = props => {
  const {teams, user} = props;

  const showTeam = teamId => {
    console.log(teamId, user.id)
    $.ajax({
      url: `/api/team/${teamId}/${user.id}`,
      type: 'GET'
    })
    .done(data => {
      console.log("team data", data)
    })
  };

  return (
    <section className="team_list">
      {teams && teams.map((team,index) =>{
        return <div onClick={()=>showTeam(team.id)} className="team_img square" key={index}><p>{team.name[0] + team.name[1]}</p></div>
      }
      )}
    </section>
  )
}

export default TeamList;