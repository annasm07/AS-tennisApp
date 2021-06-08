export const splitQueryStringIntoArray = queryString => queryString.split('-');

export const filterPlayersByKey = (playerList, key) =>
  playerList.filter(product => product.name.toLowerCase().includes(key));

export const filterPlayersByKeyList = (playerList, keyList) => {
  const filteredPlayers = [];
  keyList.forEach(key => {
    const result = filterPlayersByKey(playerList, key);
    filteredPlayers.push(result);
  });

  return filteredPlayers;
};
