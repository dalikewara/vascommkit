"use strict";

const redis = require('redis');
const md5 = require('md5');
const client = redis.createClient();

token	Object	The token(s) to be saved.
token.accessToken	String	The access token to be saved.
token.accessTokenExpiresAt	Date	The expiry time of the access token.
[token.refreshToken]	String	The refresh token to be saved.
[token.refreshTokenExpiresAt]	Date	The expiry time of the refresh token.
[token.scope]	String	The authorized scope of the token(s).
client	Object	The client associated with the token(s).
user	Object	The user associated with the token(s).
[callback]	Function	Node-style callback to be used instead of the returned Promise.

exports.redisCreateAccessTokenOauth2 = function (token, client, user, callback) {
  const accessToken = md5(token.accessToken);

  module.exports.redisGetAccessTokenOauth2(clientId, function (err, result) {
    if (err) {
      callback({
        err: err
      });
    } else {
      if (result && result != null) {
        callback('user exists!');
      } else {
        client.hmset('oauth2_accesstoken_' + clientId, [
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

exports.redisGetAccessTokenOauth2 = function (clientId, callback) {
  const accessToken = md5(token.accessToken);

  client.hgetall('oauth2_accesstoken_' + clientId, function (err, result) {
    if (err) {
      callback({
        err: err
      });
    } else {
      callback(null, result);
    }
  });
};
