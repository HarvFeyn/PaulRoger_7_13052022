const query = require("../helpers/dbpool").query
const userdbmodel = require('./userModels');

exports.getOneArticle = (id) => {
    return query("SELECT * FROM article WHERE id = '" + id + "'")
        .then(result => {
            return result
        })
};

exports.getAllArticle = () => {
    return query("SELECT * FROM article ORDER BY id DESC")
        .then(result => {
            return result
        })
};

exports.creatArticle = (article) => {
    return query("INSERT INTO article (title, text, author, authorId) VALUES (?, ?, ?, ?)", [article.title, article.text, article.author, article.authorId])
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
    return query("UPDATE article SET title='" + article.title + "', text='" + article.text + "' WHERE id = '" + id + "'")
        .then(() => {
            console.log('article modify')
            return {message: "ok"}
        })
};

exports.authToModify = (id, authorId) => {
    return query("SELECT * FROM article WHERE id = '" + id + "'")
        .then(result => {
            if(result[0].authorId == authorId) {
                return true
            }

            return userdbmodel.findId(authorId)
                .then(user => {
                    if (user.isAdmin == 1) {
                        return true
                    }
                    
                    return false
                })
        })
};
