import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Preloader = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: opacity 0.3s linear, visibility 0.2s linear 0.3s;
  background: ${props => props.bgColor};
  opacity: ${props => (props.loadingStatus ? 1 : 0)};
  visibility: ${props => (props.loadingStatus ? 'visible' : 'hidden')};
`;

function StyledPreloader({
  children, bgColor, color, time,
}) {
  const [loading, setLoading] = useState(true);
  const childrenWithProp = React.Children.map(children, child => React.cloneElement(child, {
    color,
  }));
  const bodyScroll = () => {
    document.body.style.overflow = loading ? 'hidden' : null;
    document.body.style.height = loading ? '100%' : null;
    document.body.style.width = loading ? '100%' : null;
    document.body.style.position = loading ? 'fixed' : null;
  };

  bodyScroll();
  useEffect(() => {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          setLoading(false);
        }, time);
      }
    };
  }, []);

  return (
    <Preloader bgColor={bgColor} loadingStatus={loading} id="preloader">
      {childrenWithProp}
    </Preloader>
  );
}

StyledPreloader.propTypes = {
  time: PropTypes.number,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.element,
};

StyledPreloader.defaultProps = { time: 1300, bgColor: '#f7f7f7', color: '#2D2D2D' };

export default StyledPreloader;
