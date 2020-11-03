"use strict";

const chalk = require(`chalk`);
const fs = require(`fs`).promises;

exports.getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [array[i], array[randomPosition]] = [
      array[randomPosition],
      array[i],
    ];
  }

  return array;
};

exports.readContent = async (fileName) => {
  try {
    const list = await fs.readFile(`${fileName}`, `utf8`);
    const content = list
      .split(`\n`)
      .map((string) => string.replace(/(\r\n|\n|\r)/gm, ``));
    return content;
  } catch (error) {
    console.log(chalk.red(`Не удалось прочитать файл с данными`));
    return [];
  }
};

exports.formatDate = (date) => {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${day}.${month}.${year}, ${hours}:${minutes}`;
};

exports.getTime = (date) => {
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${hours}:${minutes}`;
};

exports.buildQueryString = (o) => {
  const keys = Object.keys(o);

  let queryString = `?`;

  if (keys.length === 0) {
    return queryString;
  }

  keys.forEach((key) => {
    let value = o[key];
    let arrayString = ``;
    if (Array.isArray(value)) {
      value.forEach((arrayValue) => {
        arrayString = `${arrayString}${key}=${arrayValue}&`;
      });
      queryString = `${queryString}${arrayString}`;
      return;
    }
    queryString = `${queryString}${key}=${value}&`;
  });

  return queryString.slice(0, -1);
};
