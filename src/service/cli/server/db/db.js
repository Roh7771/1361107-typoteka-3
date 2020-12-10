"use strict";

const Sequelize = require(`sequelize`);
const config = require(`../../../../config`);
const {getLogger} = require(`../../../lib/logger`);

const logger = getLogger({name: `database`});

const sequelize = new Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASSWORD,
    {
      host: config.DB_HOST,
      dialect: `postgres`,
      logging: (msg) => logger.info(msg),
    }
);

const Category = require(`./models/category`)(sequelize);
const Comment = require(`./models/comment`)(sequelize);
const Article = require(`./models/article`)(sequelize);
const User = require(`./models/user`)(sequelize);

User.hasMany(Article, {
  foreignKey: `userId`,
  as: `articles`,
});
Article.belongsTo(User, {
  foreignKey: `userId`,
  as: `owner`,
});

User.hasMany(Comment, {
  foreignKey: `userId`,
  as: `comments`,
});
Comment.belongsTo(User, {
  foreignKey: `userId`,
  as: `user`,
});

Article.hasMany(Comment, {
  foreignKey: `articleId`,
  as: `comments`,
});
Comment.belongsTo(Article, {
  foreignKey: `articleId`,
  as: `article`,
});

Category.belongsToMany(Article, {
  through: `Article_Categories`,
  as: `articles`,
  timestamps: false,
  foreignKey: `categoryId`,
  otherKey: `articleId`,
});
Article.belongsToMany(Category, {
  through: `Article_Categories`,
  as: `categories`,
  timestamps: false,
  foreignKey: `articleId`,
  otherKey: `categoryId`,
});

const initDb = async () => {
  await sequelize.sync({force: true});
  logger.info(`Database created successfully.`);
};

module.exports = {
  db: {
    Category,
    User,
    Article,
    Comment,
  },
  sequelize,
  initDb,
};