export const slideAnimation = ({ animation, loadingStatus }) => {
  if (animation.name === 'slide') {
    if (animation.direction) {
      if (animation.direction === 'up' || animation.direction === 'down') {
        return `top: ${loadingStatus ? 0 : `${animation.direction === 'up' ? '-100%' : '100%'}`};
     transition: 0.5s;`;
      }
      return `left: ${loadingStatus ? 0 : `${animation.direction === 'right' ? '100%' : '-101%'}`};
              top: 0;
              transition: 0.5s;`;
    }
    return `top: ${loadingStatus ? 0 : '-100%'};
            transition: 0.5s;`;
  }
  return `top: 0; 
          left: 0;`;
};

export const fadeAnimation = props => props.animation.name === 'fade'
  && ` opacity: ${props.loadingStatus ? 1 : 0};
       visibility: ${props.loadingStatus ? 'visible' : 'hidden'};
       transition: opacity 0.3s linear, visibility 0.2s linear 0.3s;`;
