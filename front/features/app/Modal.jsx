import React from 'react';
import {Link} from 'react-router'

const Modal = props => {
  const styles = {
    position: 'fixed',
    top: '20%',
    right: '20%',
    bottom: '20%',
    left: '20%',
    padding: 20,
    boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
    overflow: 'auto',
    background: '#fff'
  }
  console.log(props.children)
  return (
    <div style={styles}>
      <p><Link to={props.returnTo}>Back</Link></p>
      {props.children}
    </div>
  )
}

export default Modal