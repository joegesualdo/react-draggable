import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';

const propTypes = {
  defaultPostition: React.PropTypes.object,
  postion: React.PropTypes.object,
  axis: React.PropTypes.string,
  onDrag: React.PropTypes.func,
  onStart: React.PropTypes.func,
  onStop: React.PropTypes.func,
};

const defaultProps = {
  axis: 'both',
  onDrag: function(){ },
  onStop: function(){ },
  onStart: function(){ },
};

class Draggable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false,
    };
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this)
    const parentNode = node.parentNode
    // This is how we later access the dom element of the children: http://stackoverflow.com/questions/29568721/getting-dom-node-from-react-child-element
    const childNode = node.childNodes[0]
    const parentRect = parentNode.getBoundingClientRect();
    const childRect = childNode.getBoundingClientRect();
    parentNode.style.position = 'relative'
    parentNode.addEventListener("mousemove", (e) => {
      if (this.state.dragging) {
        e.preventDefault();
        let x = (e.pageX - this.state.buffer.x)
        let y = (e.pageY - this.state.buffer.y)
        this.onMouseMove({x: x, y: y})
      }
    });
    parentNode.addEventListener("mouseleave", (e) => {
      e.preventDefault();
      this.onMouseLeave(e)
    });

    this.setState({
      parentPosition: {
        x: parentRect.left,
        y: parentRect.top,
        width: parentRect.width,
        height: parentRect.height,
      },
      width: childRect.width,
      height: childRect.height,
    })
  }

  onMouseLeave = () => {
    this.setState({
      dragging: false,
    })
  }
  onMouseDown = (e) => {
    e.preventDefault();
    this.setState({
      dragging: true,
      buffer: {
        x: (e.pageX - this.props.position.x),
        y: (e.pageY - this.props.position.y),
      }
    }, () => {
      this.props.onStart(this.props.position)
    })
  }

  onMouseUp = (e) => {
    this.setState({
      dragging: false,
    }, () => {
      this.props.onStop(this.props.position)
    })
  }

  onMouseMove = (cords) => {
    if (this.state.dragging) {
      const axis = this.props.axis;
      let x = cords.x
      let y = cords.y
      if (x < 0) {
        x = 0;
      } else if (x > (this.state.parentPosition.width - this.state.width)){
        x = this.state.parentPosition.width - this.state.width
      }
      if (y < 0) {
        y = 0;
      } else if (y > (this.state.parentPosition.height- this.state.height)){
        y = this.state.parentPosition.height- this.state.height
      }
      if (axis === 'x') {
        y = this.props.position.y
      }
      if (axis === 'y') {
        x = this.props.position.x
      }

      this.props.onDrag({x: x, y: y})
      // this.setState({
      //   position: {
      //     x: x,
      //     y: y
      //   }
      // }, () => {
      //   this.props.onDrag(this.state.position)
      // })
    }
  }

  render() {
    let inlineStyles = {
      left: this.props.position.x,
      top: this.props.position.y,
      position: 'absolute'
    }
    return (
      <div
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        style={inlineStyles}
        className={style.root}
      >
      {/*This is how we later access the dom element of the children: http://stackoverflow.com/questions/29568721/getting-dom-node-from-react-child-element*/}
      {this.props.children}
      {/*}
      {React.Children.map(this.props.children, (element, idx) => {
        return React.cloneElement(element, { ref: `child-${idx}`});
      })}
      */}
      </div>
    );
  }
}

Draggable.propTypes = propTypes;
Draggable.defaultProps = defaultProps;

export default Draggable;
