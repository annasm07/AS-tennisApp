export function checkEndSet(playerWhoWon, games) {
  let set = false;
  const gamesScore = games[games.length - 1];
  let playerWhoLost;
  playerWhoWon === 'p1' ? (playerWhoLost = 'p2') : (playerWhoLost = 'p1');
  if (
    gamesScore[playerWhoWon] >= 6 &&
    gamesScore[playerWhoWon] - gamesScore[playerWhoLost] >= 2
  ) {
    set = true;
  } else if (gamesScore[playerWhoWon] === 7 && gamesScore[playerWhoLost] <= 6) {
    set = true;
  }

  return set;
}

export function checkEndMatch(playerWhoWon, sets) {
  let set = false;
  const gamesScore = sets[sets.length - 1];
  let playerWhoLost;
  playerWhoWon === 'p1' ? (playerWhoLost = 'p2') : (playerWhoLost = 'p1');
  if (
    gamesScore[playerWhoWon] >= 6 &&
    gamesScore[playerWhoWon] - gamesScore[playerWhoLost] >= 2
  ) {
    set = true;
  } else if (gamesScore[playerWhoWon] === 7 && gamesScore[playerWhoLost] <= 6) {
    set = true;
  }

  return set;
}
