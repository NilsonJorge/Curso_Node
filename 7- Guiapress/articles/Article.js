const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});
Category.hasMany(Article); // Uma categoria tem muitos artigos 1-m
Article.belongsTo(Category);//Um artigo pertence a uma categoria 1-1

//Article.sync({force: true});

module.exports = Article;