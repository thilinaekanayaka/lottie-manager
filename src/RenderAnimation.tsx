import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const RenderAnimation = () => {
  let testJSON = require('./test.json');
  return (
    <>
      <DotLottieReact
        // src='http://test.com'
        data={testJSON}
        loop
        autoplay
      />
    </>
  )
}

export default RenderAnimation;
