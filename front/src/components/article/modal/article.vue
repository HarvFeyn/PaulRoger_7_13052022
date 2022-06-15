<template>
    <div id="article">
        <p>Create new article:</p>
        <form @submit="create" class="form-register">
            <div class="form-register">
                <label for="title">Title: </label>
                <input type="text" name="title" id="title" required>
            </div>
            <div class="form-register">
                <label for="body">Write your article here: </label>
                <input type="text" name="body" id="body" required>
            </div>
            <div class="row mb-3">
                <button type="submit" class="btn btn-primary">Create Article</button>
                <p>{{ messageSubmit }}</p>
            </div>
        </form>
    </div>
</template>

<script>
const article = require('../../API/article')

    export default {
        name: 'Article',
        data() {
            return {
                messageSubmit: ''
            }
        },
        methods: {
            create (event) {
                event.preventDefault()
                article.createArticle(event.target.elements.title.value, event.target.elements.body.value, this.$store.state.user.name, this.$store.state.user.token)    
                    .then(() => {
                        console.log("article created")
                    })
                    .catch(this.messageSubmit="email ou mot de passe incorrect")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>