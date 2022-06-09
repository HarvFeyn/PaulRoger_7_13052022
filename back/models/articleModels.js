const query = require("../helpers/dbpool").query

exports.getOneArticle = (id) => {
    return query("SELECT * FROM article WHERE id = ?", [id])
        .then(result => {
            return result
        })
};

exports.getTenArticle = () => {
    return query("SELECT top 10 FROM article")
        .then(result => {
            return result
        })
};

exports.creatArticle = (article) => {
    return query("INSERT INTO article (title, text, author, likes, date) VALUES (?, ?, ?, ?, ?)", [article.title, article.text, article.author, "", new Date()])
        .then(() => {
            console.log('article created')
            return {message: "ok"}
        })
};
