import React from 'react';
import './App.css';
import RenderAnimation from './RenderAnimation';

function App() {
  let testJSON = require('./test.json')
  console.log(typeof testJSON)
  return (
    <div>
      <RenderAnimation />
    </div>
  );
}

export default App;
