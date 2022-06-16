const dbmodel = require('../models/articleModels');

exports.getArticleById = (req, res, next) => {
    console.log(req.params)
    dbmodel.getOneArticle(req.params.id)
        .then(result => {
            res.status(200).json({
                result
            })
        })
        .catch(error => res.status(400).json({ error }))
}

exports.getAllArticle = (req, res, next) => {
    dbmodel.getAllArticle()
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
        authorId: req.body.authorId
    }
    dbmodel.creatArticle(article)
        .then(() => res.status(201).json({ message: 'Article créé !' }))
        .catch(error => res.status(400).json({ error }));
}

exports.deleteArtcile = (req, res, next) => {
    dbmodel.authToModify(req.params.id, req.body.userId)
        .then(auth => {
            if(auth) {
                dbmodel.deleteArtcile(req.params.id)
                    .then(() => res.status(201).json({ message: 'Article supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            }
        })
}

exports.modifyArticle = (req, res, next) => {
    const article = {
        title: req.body.title,
        text: req.body.text
    }
    dbmodel.authToModify(req.params.id, req.body.userId)
        .then(auth => {
            if(auth) {
                dbmodel.modifyArticle(req.params.id, article)
                    .then(() => res.status(201).json({ message: 'Article modifié !' }))
                    .catch(error => res.status(400).json({ error }));
            }
        })
}

exports.likeArticle = (req, res, next) => {
    dbmodel.likeArticle(req.body.userId, req.params.id, req.body.like)
        .then()
}
