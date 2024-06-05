import React, { useState } from 'react';
import './App.css';
import RenderAnimation from './RenderAnimation';
import { useMutation, gql } from '@apollo/client';

const UPLOAD_ANIMATION = gql`
  mutation uploadAnimation($name: String!, $data: String!) {
    uploadAnimation(name: $name, data: $data) {
      id
      name
      data
    }
  }
`;

function App() {
  const [animationURLFromInput, setAnimationURLFromInput] = useState('');
  const [animationSource, setAnimationSource] = useState('');
  const [animationType, setAnimationType] = useState('');
  // const animationJSONPath = require('./testAnimation.json');
  // console.log(animationPath)

  const [uploadAnimation] = useMutation(UPLOAD_ANIMATION);

  const previewAnimation = () => {
    const animationJSON = localStorage.getItem(animationURLFromInput);
    if (animationJSON) {
      setAnimationSource(JSON.parse(animationJSON));
      setAnimationType('json');
    } else {
      setAnimationSource(animationURLFromInput)
      setAnimationType('url');
    }
  }

  const saveAnimation = async () => {
    try {
      let response = await fetch(animationURLFromInput);
      let responseJson = await response.json();
      const JSONStringFromResponse = JSON.stringify(responseJson)
      localStorage.setItem(animationURLFromInput, JSONStringFromResponse); // key & value
      await uploadAnimation({ variables: { name: animationURLFromInput, data: JSONStringFromResponse } });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        <input
          name="animation-url"
          placeholder="Paste the animation URL..."
          value={animationURLFromInput}
          onChange={(e) => setAnimationURLFromInput(e.target.value)}
        />
        <button onClick={previewAnimation}>Preview</button>
        <button onClick={saveAnimation}>Make available offline</button>
        <RenderAnimation animationSource={animationSource} animationType={animationType} />
      </div>
      <div>
        test
      </div>
    </div>
  );
}

export default App;
