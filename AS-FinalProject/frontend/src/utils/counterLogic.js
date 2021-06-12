export function counterLogicPoints(
  playerWhoWon,
  {points, p1CounterPoints, p2CounterPoints},
) {
  const pointsIncrement = {
    1: 15,
    2: 15,
    3: 10,
  };
  let CounterWinner = 0,
    playerWhoLost;

  playerWhoWon === 'p1'
    ? (playerWhoLost = 'p2') &&
      (p1CounterPoints += 1) &&
      (CounterWinner = p1CounterPoints)
    : (playerWhoLost = 'p1') &&
      (p2CounterPoints += 1) &&
      (CounterWinner = p2CounterPoints);

  const previousPoint = points[points.length - 1];

  let newPoint = JSON.parse(JSON.stringify(previousPoint));

  newPoint = {
    [playerWhoWon]: (newPoint[playerWhoWon] +=
      pointsIncrement[CounterWinner] || 1),
    [playerWhoLost]: newPoint[playerWhoLost],
  };

  points.push(newPoint);

  return {
    points,
    p1CounterPoints,
    p2CounterPoints,
  };
}

export function counterLogicScoring(playerWhoWon, score) {
  let playerWhoLost;
  playerWhoWon === 'p1' ? (playerWhoLost = 'p2') : (playerWhoLost = 'p1');

  const previousGame = score[score.length - 1];

  let newGame = JSON.parse(JSON.stringify(previousGame));
  newGame = {
    [playerWhoWon]: (newGame[playerWhoWon] += 1 || 1),
    [playerWhoLost]: newGame[playerWhoLost],
  };

  score.push(newGame);

  return score;
}
