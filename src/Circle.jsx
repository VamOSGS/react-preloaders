import React, { Component } from 'react';
// import './css/Circle.css'; 

class Circle extends Component {
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
        <svg className="circular" height="50" width="50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            stroke={this.props.color}
            fill="none"
            strokeWidth="2.5"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    );
  }
}

Circle.defaultProps = { time: 1300, bgColor: '#f7f7f7', color: '#2D2D2D' };

export default Circle;
