import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';

const propTypes = {
};

const defaultProps = {
};

class TestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <span className={style.root}>Meow</span>
    );
  }
}

TestComponent.propTypes = propTypes;
TestComponent.defaultProps = defaultProps;

export default TestComponent;
