<template>
    <div id="DeleteArticle">
        <div v-if="!confirmation">
            <p>{{ localization.deletequestion }}</p>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ localization.cancelbtn }}</button>
                <button type="button" class="btn btn-primary" @click="deleteArticle()">{{ localization.deletebtn }}</button>
            </div>
        </div>
        <div v-if="confirmation" class="confirmation">
            {{ localization.articleDeletedSuccess }}
        </div>
    </div>
</template>

<script>
const apiArticle = require('../../API/article')
const eventBus = require('../../../helpers/event-bus')
const localization = require('../../../helpers/localization')

export default {
    name: 'DeleteArticle',
    data() {
        return this.initialData()
    },
    props: {
        articleId: {
            type: Number
        }
    },
    methods: {
        initialData () {
            return {
                localization,
                confirmation: false
            }
        },
        reset () {
            Object.assign(this.$data, this.initialData())
        },
        deleteArticle() {
            apiArticle.deleteArticle(this.$store.state.user.id, this.articleId, this.$store.state.user.token)
                .then(result => {
                    this.confirmation = true
                })
        }
    },
    created() {
        this.reset()
        console.log("DeleteArticle")
        eventBus.$on('show-modal-DeleteArticle', value => {
            console.log('DeleteArticle - eventBus.$on(show-modal)')
            this.reset()
        })
    },
    beforeDestroy () {
        console.log('beforeDestroy DeleteArticle')
        eventBus.$off('show-modal-DeleteArticle')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>