import React, { useState } from 'react';
import ShapeCard from './components/ShapeCard';
import Header from './components/Header';

const App = () => {
  const [stepNum, setStepNum] = useState(0);

  const nextStep = () => {
    const nextS = stepNum + 1;

    if (nextS > 2)
      setStepNum(0);
    else
      setStepNum(nextS);

  };

  const onCancel = () => {
    if (stepNum > 0)
      setStepNum(0);

  };


  return (
    <div>
      <Header />
      <ShapeCard stepNum={stepNum + 1} callback1={nextStep} callCancel={onCancel} />
    </div>
  );
};

export default App;
