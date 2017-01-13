import React from 'react';
import {Link} from 'react-router';
import auth from '../../routes/auth';

const NavBar = props => {
  console.log(props)
  return (
    <div className="nav" style={{display:'flex', justifyContent: 'space-between'}}>
    <div className="nav-title" style={{display:'flex'}}>
      {props.channel && <p style={{marginRight: 50}}>{props.channel.name}</p>}
      {props.channelMembers && <p>Member in channel: {props.channelMembers.length}</p>}
    </div>
    <div className="nav-btn">
      <Link to='/'><button className='input-btn' onClick={()=>auth.logout()}>Log Out</button></Link>
    </div>
    </div>
  )
}

export default NavBar