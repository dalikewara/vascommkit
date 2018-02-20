"use strict";

const UserModel = require('../models/UserModel.js');
const TokenModel = require('../models/TokenModel.js');
const md5 = require('md5');

// should return an object with, at minimum:
// redirectUris (Array)
// grants (Array)
exports.getClient = function (clientId, clientSecret, callback) {
  UserModel.redisGetClientOauth2(clientId, function (err, result) {
    if (err) {
      callback(err);
    } else {
      if (result && result != null) {
        if (result.clientSecret == md5(clientSecret)) {
          result.id = clientId;

          callback(null, result);
        } else {
          callback(false, false);
        }
      } else {
        callback(false, false);
      }
    }
  });
};

// should return an object:
// No longer requires that id be returned.
exports.getUser = function (username, password, callback) {
  UserModel.redisGetUserOauth2(username, function (err, result) {
    if (err) {
      callback(err);
    } else {
      if (result && result != null) {
        if (result.password == md5(password)) {
          result.id = username;

          callback(null, result);
        } else {
          callback(false, false);
        }
      } else {
        callback(false, false);
      }
    }
  });
};

// should return:
// accessToken (String)
// accessTokenExpiresAt (Date)
// client (Object)
// refreshToken (optional String)
// refreshTokenExpiresAt (optional Date)
// user (Object)
exports.saveToken = function (token, client, user, callback) {
  return {};
};



/* ------------------------------------------------------------------------- */



//  is optional and should return a String.
exports.generateAccessToken = function (client, user, scope) {
  return '';
};

// is optional and should return a String.
exports.generateAuthorizationCode =  function () {
  return '';
};

// is optional and should return a String.
exports.generateRefreshToken = function (client, user, scope) {
  return '';
};

// should return an object with:
// accessToken (String)
// accessTokenExpiresAt (Date)
// client (Object), containing at least an id property that matches the supplied client
// scope (optional String)
// user (Object)
exports.getAccessToken = function (token) {
  return {};
};

// was renamed to getAuthorizationCode(code) and should return:
// client (Object), containing at least an id property that matches the supplied client
// expiresAt (Date)
// redirectUri (optional String)
// user (Object)
exports.getAuthCode = function () {
  return {};
};

// should return an object with:
// refreshToken (String)
// client (Object), containing at least an id property that matches the supplied client
// refreshTokenExpiresAt (optional Date)
// scope (optional String)
// user (Object)
exports.getRefreshToken = function (token) {
  return {};
};

// should return an object:
// No longer requires that id be returned.
exports.getUserFromClient = function (client) {
  return {};
};

// is required and should return true
exports.revokeAuthorizationCode = function (code) {
  return true;
};

// is required and should return true
exports.revokeToken = function (token) {
  return true;
};

// was renamed to saveAuthorizationCode(code, client, user) and should return:
// authorizationCode (String)
exports.saveAuthCode = function () {
  return '';
};

// should return:
// authorizationCode (String)
exports.saveAuthorizationCode = function (code, client, user) {
  return '';
};

// should return a Boolean.
exports.validateScope = function (user, client, scope) {
  return true;
};
