const express = require('express');
const router = express.Router();

const Category = require('../categories/Category')
const Article = require('./Article')
const slugify = require('slugify')

const adminAuth = require('../middlewares/adminAuth')

router.get('/admin/articles', adminAuth, (req,res) => {
    Article.findAll({
        include: [{model: Category}]
    }).then(articles => {
        res.render('admin/articles/index',{articles: articles})
    });
});

router.get('/admin/articles/new', adminAuth, (req,res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new', {categories: categories});
    })
})

router.post('/articles/save', adminAuth, (req,res) => {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect('/admin/articles');
    })
})

router.post('/articles/delete', adminAuth,(req,res) => {
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            Article.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect('/admin/articles')
            })
        }else{//não for um numero
            res.redirect('/admin/articles')
        }
    }else{//null
        res.redirect('/admin/articles')
    }
})

router.get('/admin/articles/edit/:id', adminAuth, (req,res) => {
    var id = req.params.id;

    if(isNaN(id)){
        res.redirect('/admin/articles');
    }

    Article.findByPk(id).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render('admin/articles/edit', {article: article, categories: categories})
            })
        }else{
            res.redirect('/admin/articles');
        }
    }).catch(erro => {
        res.redirect('/admin/articles');
    })
})

router.post('/articles/update', adminAuth,(req,res)=> {
    var id = req.body.id;
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.update({
        title:title,
        body: body,
        categoryId: category,
        slug: slugify(title)
    },{
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/admin/articles')
    }).catch(err => {
        res.redirect('/')
    })
});

router.get("/articles/page/:num",(req,res) => {
    var page = req.params.num;
    var limit = 4
    var offset = 0
    if(isNaN(page) || page == 1){
        offset = 0;
    }else{
        offset = (parseInt(page) -1) * limit;
    }
    
    Article.findAndCountAll({
        order: [['id', "DESC"]],
        limit: limit,
        offset: offset
    }).then(articles => {
        var next;
        if(offset + limit >= articles.count){
            next = false;
        }else{
            next = true;
        }

        var result = {
            page:parseInt(page),
            next:next,
            articles: articles
        }

        Category.findAll().then(categories => {
            res.render('admin/articles/page',{result:result, categories: categories})
        })

        
    })
})

module.exports = router;