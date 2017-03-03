'use strict';

exports.index = function* index(ctx) {
  ctx.logger.info('test')
  ctx.body = {
    env: ctx.app.config.env,
    config: ctx.app.config.keys,
  };
};
