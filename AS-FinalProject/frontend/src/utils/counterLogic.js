export default function counterLogicPoints(playerWhoWon, currentMatch) {
  const pointsIncrement = {
    1: 15,
    2: 15,
    3: 10,
  };
  let p1CounterPoints = 0,
    p2CounterPoints = 0,
    playerWhoLost,
    points = [],
    CounterWinner = 0;

  playerWhoWon === 'p1'
    ? (playerWhoLost = 'p2') &&
      (p1CounterPoints += 1) &&
      (CounterWinner = p1CounterPoints)
    : (playerWhoLost = 'p1') &&
      (p2CounterPoints += 1) &&
      (CounterWinner = p2CounterPoints);

  let matchFlow = currentMatch;

  const previousPoint = currentMatch.result[0].flow.points[0] || {p1: 0, p2: 0};

  points.push(previousPoint);

  let newPoint = JSON.parse(JSON.stringify(previousPoint));

  newPoint = {
    [playerWhoWon]: (newPoint[playerWhoWon] += pointsIncrement[CounterWinner]),
    [playerWhoLost]: newPoint[playerWhoLost],
  };

  points.push(newPoint);

  matchFlow.points.push(points);

  return matchFlow;
}
