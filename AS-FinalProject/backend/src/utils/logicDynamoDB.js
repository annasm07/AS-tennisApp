/* eslint-disable no-underscore-dangle */
const AWS = require('aws-sdk');
const md5 = require('md5');

AWS.config.update({
  region: 'eu-west-1',
  endpoint: 'https://dynamodb.eu-west-1.amazonaws.com',
});

const docClient = new AWS.DynamoDB.DocumentClient();

async function getDynamoDB(table, email) {
  const paramsGet = {
    TableName: table,
    Key: {
      email,
    },
  };
  const result = await docClient.get(paramsGet).promise();
  if (Object.keys(result).length > 0) { return result.Item; } return false;
}

async function getQuery(table, filter, nameOrId) {
  const params = {
    TableName: table,
    FilterExpression: `#${filter} = :${filter}`,
    ExpressionAttributeNames: {
      [`#${filter}`]: `${filter}`,
    },
    ExpressionAttributeValues: { [`:${filter}`]: nameOrId },
  };

  function onScan(err) {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('Error', JSON.stringify(err, null, 2));
    } else {
      // eslint-disable-next-line no-console
      console.log('');
    }
  }

  const player = await docClient.scan(params, await onScan).promise();

  if (player.Items.length) {
    return player.Items;
  }
  return false;
}

function isValidPassword(password, passDB) {
  return md5(password) === passDB;
}

async function putDataDynamoDB(table, params) {
  const paramsPut = {
    TableName: table,
    Item: params,
  };
  const result = await docClient.put(paramsPut).promise();
  return result;
}

async function updateDynamoDB(table, filter, dataToAdd, idDynamo, createID) {
  const arrayData = [];
  const resultData = dataToAdd.result || dataToAdd;

  if (typeof resultData === 'string') {
    arrayData.push(resultData);
  }

  const finalData = typeof resultData === 'object' ? resultData : arrayData;

  let id = '';
  if (typeof idDynamo === 'string') {
    id = idDynamo;
  } else if (idDynamo[0]) {
    id = idDynamo[0]._id;
  } else {
    id = createID;
  }

  const params = {
    TableName: table,
    Key: {
      _id: id,
    },
    UpdateExpression: `SET ${filter} =:p`,
    ExpressionAttributeValues: {
      ':p': finalData,
    },
    ReturnValues: 'ALL_NEW',
  };
  const result = await docClient.update(params).promise();
  return result;
}

async function updateArray(table, playerInfo, arrayOfMatches) {
  const playedMatchesId = playerInfo[0].playedMatches
    ? playerInfo[0].playedMatches : arrayOfMatches;
  const id = playerInfo[0]._id ? playerInfo[0]._id : playerInfo;
  // console.log('INFOOOOO--->>>', info);
  // console.log('ID--->>>', id);
  const params = {
    TableName: table,
    Key: {
      _id: id,
    },
    UpdateExpression: 'set #playedMatches = :value',
    ExpressionAttributeNames: {
      '#playedMatches': 'playedMatches',
    },
    ExpressionAttributeValues: {
      ':value': playedMatchesId,
    },
    ReturnValues: 'UPDATED_NEW',
  };

  const result = await docClient.update(params).promise();
  return result;
}

async function deleteDynamoDB(tableName, matchId) {
  const params = {
    TableName: tableName,
    Key: {
      _id: matchId,
    },
    ReturnValues: 'ALL_OLD',

  };
  const result = docClient.delete(params).promise();
  return result;
}

module.exports = {
  getDynamoDB,
  putDataDynamoDB,
  getQuery,
  isValidPassword,
  updateDynamoDB,
  updateArray,
  deleteDynamoDB,
};
