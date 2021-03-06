"use strict";

const Joi = require(`joi`);
const {NewArticleMessage} = require(`../../../../constants`);

module.exports = Joi.object({
  title: Joi.string().label(`Заголовок`).min(30).max(250).messages({
    "string.min": NewArticleMessage.MIN_TITLE_LENGTH,
    "string.max": NewArticleMessage.MAX_TITLE_LENGTH,
    "string.empty": NewArticleMessage.REQUIRED_FIELD,
  }),
  announce: Joi.string().label(`Анонс`).min(30).max(250).messages({
    "string.min": NewArticleMessage.MIN_ANNOUNCE_LENGTH,
    "string.max": NewArticleMessage.MAX_ANNOUNCE_LENGTH,
    "string.empty": NewArticleMessage.REQUIRED_FIELD,
  }),
  fullText: Joi.string().label(`Описание`).max(1000).messages({
    "string.max": NewArticleMessage.MAX_FULL_TEXT_LENGTH,
    "string.empty": NewArticleMessage.REQUIRED_FIELD,
  }),
  picture: Joi.string(),
  categories: Joi.array()
    .label(`Категории`)
    .items(Joi.number())
    .messages({
      "number.base": NewArticleMessage.WRONG_CATEGORY,
    }),
});
