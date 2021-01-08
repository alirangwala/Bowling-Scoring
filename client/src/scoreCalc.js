function calculateScore(arr) {

  let scoreCard = [];
  let score = 0;

  if (arr.length > 21) {
    return 'Too many frames in score card'
  }

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      scoreCard.push(arr[i])
    } else if (i % 2 === 0) {

    }
    score += arr[i]

  }
  return score
}

module.exports = { calculateScore }