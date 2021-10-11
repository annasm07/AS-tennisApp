async function createNewMatch(data) {
  const newMatch = {
    result:
          [{
            player: [data.playerId],
            name: data.p1Name || 'Player 1',
            games: [0, 0, 0],
            stats: '',
          },
          {
            name: data.p2Name || 'Player 2',
            games: [0, 0, 0],
            stats: '',
          }],
    date: Date.now(),
    winner: '',
    duration: '',
    flow: {
      points: [[{ p1: '', p2: '' }]],
      games: [[{ p1: '', p2: '' }]],
      sets: [[{ p1: '', p2: '' }]],
    },
  };

  return newMatch;
}

module.exports = {
  createNewMatch,
};
