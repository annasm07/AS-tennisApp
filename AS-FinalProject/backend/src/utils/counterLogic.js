const AWS = require('aws-sdk');

AWS.config.update({
  region: process.env.REGION,
  endpoint: process.env.ENDPOINT,
});

const docClient = new AWS.DynamoDB.DocumentClient();

async function getAws(table, email) {
  const paramsGet = {
    TableName: table,
    Key: {
      email,
    },
  };
  const result = await docClient.get(paramsGet).promise();
  return result.Item;
}

async function putDataAws(table, params) {
  const paramsPut = {
    TableName: table,
    Item: params,
  };
  const result = await docClient.put(paramsPut).promise();
  return result;
}

module.exports = { getAws, putDataAws };
