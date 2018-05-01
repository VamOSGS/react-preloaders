import React, { Component } from 'react';
import './css/Circle2.css';

class Circle2 extends Component {
  componentDidMount() {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          document.getElementById('preloader').classList.add('close');
        }, this.props.time);
      }
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: this.props.bgColor }} id="preloader">
        <div className="preloader" style={{ borderTopColor: this.props.color }} />
      </div>
    );
  }
}

Circle2.defaultProps = { time: 1300, bgColor: '#f7f7f7', color: '#2D2D2D' };

export default Circle2;
