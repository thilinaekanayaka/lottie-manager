import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const RenderAnimation = (props: any) => {
  return (
    <>
      <DotLottieReact
        key={props.animationPath}
        src={props.animationPath}
        // data={props.animationPath}
        loop
        autoplay
      />
    </>
  )
}

export default RenderAnimation;
