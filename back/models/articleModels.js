const query = require("../helpers/dbpool").query

exports.getOneArticle = (id) => {
    return query("SELECT * FROM article WHERE id = '" + id + "'")
        .then(result => {
            return result
        })
};

exports.getTenArticle = () => {
    return query("SELECT * FROM article")
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

exports.deleteArtcile = (id) => {
    return query("DELETE FROM article WHERE id = '" + id + "'")
        .then(() => {
            console.log('article deleted')
            return {message: "ok"}
        })
};

exports.modifyArticle = (id, article) => {
    return query("UPDATE article SET (title, text) VALUES (?, ?) WHERE id = '" + id + "'", [article.title, article.text])
        .then(() => {
            console.log('article modify')
            return {message: "ok"}
        })
};
