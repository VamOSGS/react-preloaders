import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PreloaderStyles from './PreloaderStyles';

const StyledPreloader = styled.div`
  ${PreloaderStyles}
`;

function Preloader({
  children, background, color, time, customLoading, animation,
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
  const generateAnimation = () => {
    const animate = animation && animation.split('-');
    return {
      name: animate && animate[0],
      direction: animate && animate[1],
    };
  };
  const detectBg = () => {
    if (background === 'blur') {
      return 'rgba(94, 85, 85, 0.32941176470588235)';
    }
    return background;
  };

  bodyScroll();
  useEffect(() => {
    if (customLoading === false) {
      setTimeout(() => {
        setLoading(false);
      }, time);
    }
    if (customLoading === undefined) {
      document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
          setTimeout(() => {
            setLoading(false);
          }, time);
        }
      };
    }
  }, [customLoading]);
  useEffect(() => {
    if (background === 'blur') {
      const nodes = Object.values(
        document.getElementById('preloader').parentNode.childNodes,
      ).filter(i => i.id !== 'preloader');
      nodes.forEach((el) => {
        // eslint-disable-next-line no-param-reassign
        el.style.filter = loading ? 'blur(5px)' : 'blur(0px)';
      });
    }
  }, [loading]);

  return (
    <StyledPreloader
      animation={generateAnimation()}
      background={detectBg()}
      loadingStatus={loading}
      id="preloader"
    >
      {childrenWithProp}
    </StyledPreloader>
  );
}

Preloader.propTypes = {
  time: PropTypes.number,
  background: PropTypes.string,
  color: PropTypes.string,
  animation: PropTypes.string,
  children: PropTypes.element,
  customLoading: PropTypes.bool,
};

Preloader.defaultProps = {
  time: 1300,
  background: '#f7f7f7',
  color: '#2D2D2D',
  animation: 'fade',
};

export default Preloader;
