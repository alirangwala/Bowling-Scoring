import React from 'react';

const PinQuantitySelection = ({ scoreArr, setScoreArr }) => {

  const updateScore = (event) => {
    let scoreArrClone = [...scoreArr]
    scoreArrClone.push(+event.target.innerHTML)
    console.log(event)
    setScoreArr(scoreArrClone)
  }

  return (
    <div>
      <div className='pin-button' onClick={(e) => updateScore(e)}>0</div>
      <div className='pin-button' onClick={(e) => updateScore(e)}>1</div>
      <div className='pin-button' onClick={(e) => updateScore(e)}>2</div>
      <div className='pin-button' onClick={(e) => updateScore(e)}>3</div>
      <div className='pin-button' onClick={(e) => updateScore(e)}>4</div>
      <div className='pin-button' onClick={(e) => updateScore(e)}>5</div>
      <div className='pin-button' onClick={(e) => updateScore(e)}>6</div>
      <div className='pin-button' onClick={(e) => updateScore(e)}>7</div>
      <div className='pin-button' onClick={(e) => updateScore(e)}>8</div>
      <div className='pin-button' onClick={(e) => updateScore(e)}>9</div>
      <div className='pin-button' onClick={(e) => updateScore(e)}>10</div>
    </div>
  );
}

export default PinQuantitySelection;