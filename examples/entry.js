import Draggable from './../index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div style={{margin: 400}}>
    <div style={{width: 1000, height: 1000, backgroundColor: 'gray'}}>
      <Draggable axis='both' onDrag={function(e){console.log(e)}} onStart={function(){console.log('started')}} onStop={function(){console.log('stopped')}}>
        <div style={{backgroundColor: 'blue', width: 100, height: 60}}></div></Draggable>
      <div
        style={
          {
            width: '100%',
            height: 5,
            backgroundColor: 'red',
            position: 'relative',
            top: '50%',
            transform: 'translateY(-50%)',
          }
        }
      >
      </div>
    </div>
  </div>,
  document.querySelector('#app')
);



