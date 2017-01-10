import React from 'react';
import store from '../../store/store'

const TeamList = props => {
  const {teams} = props
  return (
    <div>
      {teams && teams.map((team,index) =>{
        console.log(team)
        return <p className="team_img" key={index}>{team.name[0] + team.name[1]}</p>
      }
      )}
    </div>
  )
}

export default TeamList;