"use strict";

const redis = require('redis');
const md5 = require('md5');
const client = redis.createClient();

exports.redisCreateClientOauth2 = function (clientId, params, callback) {
  clientId = md5(clientId);

  module.exports.redisGetClientOauth2(clientId, function (err, result) {
    if (err) {
      callback({
        err: err
      });
    } else {
      if (result && result != null) {
        callback('user exists!');
      } else {
        client.hmset('oauth2_client_' + clientId, [
          'clientId', clientId,
          'clientSecret', md5(params.clientSecret) || 'null',
          'redirectUris', params.redirectUris || 'null',
          'grants', params.grants || 'null',
          'accessTokenLifetime', params.accessTokenLifetime || 'null',
          'refreshTokenLifetime', params.refreshTokenLifetime || 'null'
        ], function (err, result) {
          if (err) {
            callback({
              err: err
            });
          } else {
            callback(null, result);
          }
        });
      }
    }
  });
};

exports.redisGetClientOauth2 = function (clientId, callback) {
  clientId = md5(clientId);

  client.hgetall('oauth2_client_' + clientId, function (err, result) {
    if (err) {
      callback({
        err: err
      });
    } else {
      callback(null, result);
    }
  });
};

exports.redisCreateUserOauth2 = function (username, params, callback) {
  module.exports.redisGetUserOauth2(username, function (err, result) {
    if (err) {
      callback({
        err: err
      });
    } else {
      if (result && result != null) {
        callback('user exists!');
      } else {
        client.hmset('oauth2_user_' + username, [
          'username', username,
          'password', md5(params.password) || 'null'
        ], function (err, result) {
          if (err) {
            callback({
              err: err
            });
          } else {
            callback(null, result);
          }
        });
      }
    }
  });
};

exports.redisGetUserOauth2 = function (username, callback) {
  client.hgetall('oauth2_user_' + username, function (err, result) {
    if (err) {
      callback({
        err: err
      });
    } else {
      callback(null, result);
    }
  });
};
