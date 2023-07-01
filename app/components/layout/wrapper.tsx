"use client";
import ContextProvider from "@/app/Context/ContextProvider";
import Aos from "aos";
import React, { FunctionComponent, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";

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
        outerSize={44}
        color="255, 160, 1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ContextProvider>{children}</ContextProvider>
      <ToastContainer />
    </>
  );
};

export default Wrapper;
