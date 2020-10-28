"use strict";

const {Router} = require(`express`);
const api = require(`../api`).getAPI();

const searchRouter = new Router();

searchRouter.get(`/`, async (req, res) => {
  const {search} = req.query;
  try {
    const results = await api.search(search);
    res.render(`search`, {
      results, search
    });
  } catch (error) {
    res.render(`search`, {
      results: [], search
    });
  }
});

module.exports = searchRouter;
