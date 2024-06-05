import React, { useEffect, useState } from 'react';
import './App.css';
import RenderAnimation from './RenderAnimation';

function App() {
  const [animationURLFromInput, setAnimationURLFromInput] = useState('');
  const [animationSource, setAnimationSource] = useState('');
  const [animationType, setAnimationType] = useState('');
  // const animationJSONPath = require('./testAnimation.json');
  // console.log(animationPath)

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
      localStorage.setItem(animationURLFromInput, JSON.stringify(responseJson));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div style={{ width: '50%' }}>
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
      <div style={{ width: '50%' }}>
        test
      </div>
    </div>
  );
}

export default App;
