"use strict";

const OAuth2Server = require('oauth2-server');

exports.init = function (options, callback) {
  const oauth2 = new OAuth2Server({
    model: options.model || require('../models/Oauth2ServerModel.js'),
    allowBearerTokensInQueryString: options.allowBearerTokensInQueryString || true,
    accessTokenLifetime: options.accessTokenLifetime || 4 * 60 * 60
  });

  return oauth2;
};
