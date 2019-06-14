import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function StyledPreloader({ children, bgColor, color }) {
  const [loading, setLoading] = useState(true);
  const Preloader = styled.div`
    background: ${bgColor};
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
    opacity: 1;
    visibility: 1;
  `;
  const bodyScroll = () => {
    document.body.style.overflow = loading ? 'hidden' : 'auto';
    document.body.style.height = loading ? '100%' : 'auto';
    document.body.style.width = loading ? '100%' : 'auto';
    document.body.style.position = loading ? 'fixed' : 'unset';
  };
  bodyScroll();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {});
  const childrenWithProp = React.Children.map(children, child => React.cloneElement(child, {
    color,
  }));
  return <Preloader id="preloader">{childrenWithProp}</Preloader>;
}

StyledPreloader.defaultProps = { time: 1300, bgColor: '#f7f7f7', color: '#2D2D2D' };

export default StyledPreloader;
