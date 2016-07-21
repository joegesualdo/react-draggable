// import Draggable from './../dist/index.js';
import Draggable from './../index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div style={{width: 1000, height: 500, border: 'solid 1px black', backgroundColor: '#303030'}}>
    <Draggable axis='both' position={{x: 30, y: 30}} onDrag={function(e){console.log(e)}} onStart={function(){console.log('started')}} onStop={function(){console.log('stopped')}}>
      <div style={
        {
          backgroundImage: 'url(http://benchmarkitconsulting.com/wp-content/uploads/2013/02/AngryCat-266x300.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50%',
          borderRadius: '50%',
          border: 'white 2px solid',
          width: '250px',
          height: '250px',
        }
      }></div>
    </Draggable>
  </div>,
  document.querySelector('#app')
);



