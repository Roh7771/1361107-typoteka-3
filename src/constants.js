"use strict";

exports.DEFAULT_COMMAND = `--help`;

exports.USER_ARGV_INDEX = 2;

exports.ExitCode = {
  ERROR: 1,
  SUCCESS: 0,
};

exports.HELP_MESSAGE = `
Программа запускает http-сервер и формирует файл с данными для API.

  Гайд:
  service.js <command>

  Команды:
  --version:            выводит номер версии
  --help:               печатает этот текст
  --generate <count>    формирует файл mocks.json
  --server <port>       запускает API-сервер на указаном порту
`;

exports.DataFileName = {
  titles: `data/titles.txt`,
  categories: `data/categories.txt`,
  sentences: `data/sentences.txt`,
  comments: `data/comments.txt`,
};

exports.DEFAULT_PUBLICATION_AMOUNT = 1;

exports.MAX_PUBLICATION_AMOUNT = 1000;

exports.MAX_ANNOUNCE_SIZE = 5;

exports.MAX_FULL_DESCR_SIZE = 30;

exports.MOCKS_FILE_NAME = `mocks.json`;

exports.DEFAULT_API_PORT = 3000;

exports.DEFAULT_RENDER_PORT = 8080;

exports.Route = {
  ROOT: `/`,
};

exports.NOT_FOUND_MESSAGE = `Ничего не найдено`;
exports.SERVER_ERROR_MESSAGE = `Ошибка на стороне сервера`;

exports.HttpCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

exports.PUBLIC_DIR = `public`;

exports.TEMPLATES_DIR = `templates`;

exports.MAX_ID_LENGTH = 6;

exports.CommentRestrict = {
  MAX_SENTENCES_AMOUNT: 3,
  MAX_COMMENTS_AMOUNT: 5,
};

exports.ResponceMessage = {
  DATA_NOT_FOUND: `Данные не найдены`,
  API_ROUTE_NOT_FOUND: `Маршрут не найден`,
  PAGE_NOT_FOUND: `Страница не найдена`,
  BAD_REQUEST: `Получены неверные данные`,
};

exports.API_PREFIX = `/api`;

exports.DirPath = {
  PUBLIC: `public`,
  TEMPLATES: `templates`,
};
