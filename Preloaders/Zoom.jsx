import React, { Component } from 'react';
import './css/Zoom.css';

class Zoom extends Component {
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
        <div className="spinner">
          <div style={{ backgroundColor: this.props.color }} className="rect1" />
          <div style={{ backgroundColor: this.props.color }} className="rect2" />
          <div style={{ backgroundColor: this.props.color }} className="rect3" />
          <div style={{ backgroundColor: this.props.color }} className="rect4" />
          <div style={{ backgroundColor: this.props.color }} className="rect5" />
        </div>
      </div>
    );
  }
}

Zoom.defaultProps = { time: 1300, bgColor: '#f7f7f7', color: '#2D2D2D' };

export default Zoom;
