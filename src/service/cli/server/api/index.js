"use strict";

const {Router} = require(`express`);
const category = require(`./category`);
const {
  CategoryService,
  SearchService,
  CommentsService,
  ArticlesService,
} = require(`../data-service`);
const search = require(`./search`);
const articles = require(`./articles`);
const getMockData = require(`../../../lib/get-mock-data`);
const {db} = require(`../db/db`);

const app = new Router();

category(app, new CategoryService(db));
search(app, new SearchService(db));

(async () => {
  const mockData = await getMockData();
  articles(app, new ArticlesService(mockData), new CommentsService());
})();

module.exports = app;
