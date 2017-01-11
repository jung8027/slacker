import React from 'react';
import {Link} from 'react-router'

const NavBar = props => {
  return (
    <div className="nav">NavBar
      <Link to='/'><button onClick={()=>auth.logout()}>Log Out</button></Link>
    </div>
  )
}

export default NavBar