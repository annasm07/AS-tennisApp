const AWS = require('aws-sdk');
const md5 = require('md5');

AWS.config.update({
  region: process.env.REGION,
  endpoint: process.env.ENDPOINT,
});

const docClient = new AWS.DynamoDB.DocumentClient();

async function getPlayerQuery(table, name) {
  const params = {
    TableName: table,
    FilterExpression: '#name = :name',
    ExpressionAttributeNames: {
      '#name': 'name',
    },
    ExpressionAttributeValues: { ':name': name },

  };

  function onScan(err) {
    if (err) {
      console.error('Error', JSON.stringify(err, null, 2));
    } else {
      console.log('Scan succeeded.');
    }
  }
  const player = await docClient.scan(params, await onScan).promise();
  if (player.Items.length) {
    return player.Items[0];
  }
  return false;
}

async function getAws(table, email) {
  const paramsGet = {
    TableName: table,
    Key: {
      email,
    },
  };
  const result = await docClient.get(paramsGet).promise();
  if (Object.keys(result).length > 0) { return result.Item; } return false;
}

async function putDataAws(table, params) {
  const paramsPut = {
    TableName: table,
    Item: params,
  };
  const result = await docClient.put(paramsPut).promise();
  return result;
}

function isValidPassword(password, passDB) {
  return md5(password) === passDB;
}

module.exports = {
  getAws, putDataAws, getPlayerQuery, isValidPassword,
};
