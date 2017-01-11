import React from 'react';
import store from '../../store/store'

const Channel = (props)=> {
   // store.subscribe(() => {
    //   this.setState({
    //     userInfo: store.getState().userInfo;
    //   });
    // });
    console.log(props.users)
    // Object.keys(props).map((k)=>console.log('from channel', k, props[k]))
    return (
      <div>
      channel
      </div>
    );
}
  


export default Channel;