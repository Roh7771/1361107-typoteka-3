"use strict";

const {HttpCode, ResponceMessage} = require(`../../../../constants`);

module.exports = (service) => (req, res, next) => {
  const {articleId} = req.params;

  const article = service.findOne(articleId);

  if (!article) {
    return res
      .status(HttpCode.NOT_FOUND)
      .send(ResponceMessage.DATA_NOT_FOUND);
  }

  res.locals.article = article;

  return next();
};
