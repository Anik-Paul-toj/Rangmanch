import React from 'react';
import { Grow } from '@mui/material';

interface AnimatedTransitionProps {
  children: React.ReactNode;
  inProp: boolean;
  type?: 'grow' | 'fade';
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({
  children,
  inProp,
  type = 'grow',
}) => {
  return (
    <Grow
      in={inProp}
      style={{ transformOrigin: '0 0 0' }}
      timeout={{
        enter: 800,
        exit: 300,
      }}
    >
      <div>{children}</div>
    </Grow>
  );
};

export default AnimatedTransition; 