require('dotenv').config({ path: `${__dirname}/.env.${process.env.NODE_ENV}` });
var AWS = require('aws-sdk');

var sns = new AWS.SNS(
    {
        apiVersion: '2012-11-05',
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1',
        sessionToken: process.env.AWS_SESSION_TOKEN
    }
);

module.exports = sns
