'use client';
import Aos from 'aos';
import React, { FunctionComponent, useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { ToastContainer } from 'react-toastify';

interface Props {
  children: React.ReactNode;
}

const Wrapper: FunctionComponent<Props> = ({ children }) => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="65, 105, 225"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      {children}
      <ToastContainer />
    </>
  );
};

export default Wrapper;
