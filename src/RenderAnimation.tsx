import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const RenderAnimation = (props: any) => {
  return (
    <>
      {
        props.animationType === 'json' &&
        <DotLottieReact
          key={props.animationSource}
          data={props.animationSource}
          loop
          autoplay
        />
      }
      {
        props.animationType === 'url' &&
        <DotLottieReact
          key={props.animationSource}
          src={props.animationSource}
          loop
          autoplay
        />
      }
    </>
  )
}

export default RenderAnimation;
