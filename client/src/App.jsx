import React, { useState } from 'react';
import PinQuantitySelection from './components/PinQuantitySelection.jsx'
import Scorecard from './components/Scorecard.jsx'

const App = () => {

  const [scoreArr, setScoreArr] = useState([])

  return (
    <div>
      <PinQuantitySelection
        scoreArr={scoreArr}
        setScoreArr={setScoreArr}
      />
      <Scorecard
        scoreArr={scoreArr}
      />
    </div>
  );
}

export default App;