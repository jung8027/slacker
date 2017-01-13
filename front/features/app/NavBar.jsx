import React from 'react';
import {Link} from 'react-router';
import auth from '../../routes/auth';

const NavBar = props => {
  return (
    <div className="nav">
    <div className="nav-title">
    	<p>{props.params.channel}</p>
    </div>
    <div className="nav-btn">
      <Link to='/'><button className='input-btn' onClick={()=>auth.logout()}>Log Out</button></Link>
    </div>
    </div>
  )
}

export default NavBar