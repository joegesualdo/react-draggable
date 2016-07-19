## react-draggable [![Build Status](https://travis-ci.org/joegesualdo/react-draggable.svg?branch=master)](https://travis-ci.org/joegesualdo/react-draggable)
> A React component to make elements draggable.

## Install
```
$ npm install --save @joegesualdo/react-draggable
```

![react-draggable-demo](https://raw.github.com/joegesualdo/react-draggable/master/demo.gif)

## Usage
```javascript
import Draggable from '@joegesualdo/react-draggable';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div style={{width: 1000, height: 1000}}>
    <Draggable
      axis='both'
      defaultPosition={{x: 0, y:0}}
      onDrag={function(e){console.log(e)}}
      onStart={function(){console.log('started')}}
      onStop={function(){console.log('stopped')}}
    >
      // The element you want to make draggable
      <div style={{backgroundColor: 'blue', width: 100, height: 60}}>
        Woo!
      </div>
    </Draggable>
  </div>,
  document.querySelector('#app')
)
```

## Test
```
$ npm test
```
## Build
```
$ npm run build
```

## License
MIT © [Joe Gesualdo]()
