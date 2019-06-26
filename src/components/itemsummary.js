import React from 'react';
import logo from './00.jpg'


function  title() {
  const st = {color:'red'}

  return (
    <div>
        	<h1 style={st}>My Name here</h1>
          <h1 small>My Job here</h1>
          <img src={logo}/>
    </div>
  );
}

export default title;
