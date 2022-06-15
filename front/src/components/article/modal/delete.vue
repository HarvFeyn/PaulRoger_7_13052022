<template>
    <div id="DeleteArticle">
        <form>
            <p>Are you sure you want to delete this article ?</p>
        </form>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary" @click="deleteArticle()">Delete</button>
        </div>
    </div>
</template>

<script>
const apiArticle = require('../../API/article')

export default {
    name: 'DeleteArticle',
    data() {
        return {}
    },
    props: {
        articleId: {
            type: Number
        }
    },
    methods: {
        deleteArticle() {
            apiArticle.deleteArticle(this.articleId, this.$store.state.user.token)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>