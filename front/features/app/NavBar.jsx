import React from 'react';
import {Link} from 'react-router';
import auth from '../../routes/auth';

const NavBar = props => {
  return (
    <div className="nav">

      <Link to='/'><button onClick={()=>auth.logout()}>Log Out</button></Link>
    </div>
  )
}

export default NavBar