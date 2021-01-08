import React from 'react';
import scoreCalc from '../scoreCalc.js'

const Scorecard = ({ scoreArr }) => {

  console.log(scoreCalc.calculateScore([1, 2, 3]))


  return (
    <div>
      <div>ScoreCard: {scoreArr}</div>
      <div>Score: {scoreCalc.calculateScore(scoreArr)}</div>

    </div>
  );
}

export default Scorecard;