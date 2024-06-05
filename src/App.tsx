import React, { useEffect, useState } from 'react';
import './App.css';
import RenderAnimation from './RenderAnimation';

function App() {
  const [animationURLFromInput, setAnimationURLFromInput] = useState('');
  const [animationPath, setAnimationPath] = useState('');
  // const animationJSONPath = require('./animations/test.json');
  // console.log(animationPath)

  const previewAnimation = () => {
    setAnimationPath(animationURLFromInput)
  }

  return (
    <div>
      <input
        name="animation-url"
        placeholder="Paste the animation URL..."
        value={animationURLFromInput}
        onChange={(e) => setAnimationURLFromInput(e.target.value)}
      />
      <button onClick={previewAnimation}>Preview</button>
      <RenderAnimation animationPath={animationPath} />
    </div>
  );
}

export default App;
