const dbmodel = require('../models/articleModels');

exports.getArticleById = (req, res, next) => {
    dbmodel.getOneArticle(req.body.id)
        .then(result => {
            res.status(200).json({
                result
            })
        })
        .catch(error => res.status(400).json({ error }))
}

exports.getTenArticle = (req, res, next) => {
    dbmodel.getTenArticle()
        .then(result => {
            res.status(200).json({
                result
            })
        })
        .catch(error => res.status(400).json({ error }))
}

exports.creatArticle = (req, res, next) => {
    const article = {
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
    }
    dbmodel.creatArticle(article)
        .then(() => res.status(201).json({ message: 'Article créé !' }))
        .catch(error => res.status(400).json({ error }));
}