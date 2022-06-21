<template>
    <div id="article">
        <form v-if="!confirmation" id="form-article-setting" class="needs-validation" novalidate @submit="onSubmit">
            <h3 class="mb-3">{{ localization.addArticle }}</h3>
            <div class="form-floating mb-3">
                <input id="floating-title" v-model="title" type="text" class="form-control" :class="titleValid ? 'is-valid' : 'is-invalid' " @input="titleCheck">
                <label for="floating-title">Titre :</label>
            </div>
            <div class="row mb-3 vue-editor">
                <vue-editor id="vue-editor" v-model="content" use-custom-image-handler :editor-toolbar="customToolbar" placeholder="Saisissez le contenu de l'article ici" @image-added="handleImageAdded" @text-change="textChange"/>
            </div>
            <div class="row mb-3 form-footer">
                <button id="btn-register-submit" type="submit" class="btn btn-primary" :class="isValid ? '' : 'disabled'">{{ localization.savebtn }}</button>
            </div>
        </form>
        <div v-if="confirmation" class="confirmation">
            {{ localization.articleCreatedSuccess }}
        </div>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
const apiArticle = require('../../API/article')
const apiImage = require('../../API/images')
const localization = require('../../../helpers/localization')
const validator = require('validator')
const eventBus = require('../../../helpers/event-bus')

export default {
    name: 'Article',
    components: {
        VueEditor
    },
    props: {
        articleId: {
            type: Number,
            require: false
        }
    },
    data() {
        return this.initialData()
    },
    methods: {
        initialData () {
            return {
                localization,
                title: undefined,
                titleValid: false,
                content: '',
                contentValid: false,
                isValid: false,
                confirmation: false,
                errorApiMessage: undefined,
                customToolbar: [
                ['bold', 'italic', 'underline'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['image', 'code-block']
                ]
            }
        },
        textChange () {
            console.log('textChange')
            this.contentValid = this.content.length > 0
            this.isValid = this.inputsAreValid()
        },
        inputsAreValid () {
            return this.titleValid && this.contentValid
        },
        titleCheck () {
            this.titleValid = this.title.length >= 2 && validator.isAlphanumeric(this.title, 'fr-FR', { ignore: ' -' })
            this.isValid = this.inputsAreValid()
        },
        reset () {
            Object.assign(this.$data, this.initialData())
        },
        handleImageAdded (file, Editor, cursorLocation) {
            console.log('handleImageAdded')
            const formData = new FormData()
            formData.append('image', file)
            console.log(file)
            apiImage.saveImage(formData, this.$store.state.user.token)
                .then(result => {
                    console.log(result)
                    const { imageUrl } = result.data
                    console.log(imageUrl)
                    Editor.insertEmbed(cursorLocation, 'image', imageUrl)
                })
                .catch(reason => {
                    this.errorApiMessage = reason
                })
        },
        onSubmit (event) {
            event.preventDefault()
            if (this.inputsAreValid) {
                this.save()
            }
        },
        save () {
            const data = {
                title: this.title,
                content: this.content,
                name: this.$store.state.user.name,
                authorId: this.$store.state.user.id
            }

            if (this.articleId) {
                apiArticle.modifyArticle(this.$store.state.user.id, data.title, data.content, data.name, this.articleId, this.$store.state.user.token)
                    .then(result => {
                        console.log(result)
                        this.confirmation = true
                        eventBus.$emit('reload-page')
                    })
                    .catch(reason => {
                        this.errorApiMessage = reason
                    })
            }

            else {
                apiArticle.createArticle(data.title, data.content, data.name, data.authorId, this.$store.state.user.token)
                    .then(result => {
                        this.confirmation = true
                        eventBus.$emit('reload-page')
                    }).catch(reason => {
                        this.errorApiMessage = reason
                    })
            }
        },
        loadArticle (id) {
            apiArticle.getOneArticle(id)
                .then(article => {
                    this.title = article.data.result[0].title
                    this.content = article.data.result[0].text
                    this.titleCheck()
                })
        }
    },
    created() {
        this.reset()
        console.log("article created")
        eventBus.$on('show-modal-Article', value => {
            console.log('article - eventBus.$on(show-modal)')
            this.reset()
            if (this.articleId) {
                this.loadArticle(this.articleId)
            }
        })
    },
    beforeDestroy () {
        console.log('beforeDestroy article')
        eventBus.$off('show-modal-Article')
        eventBus.$off('reload-page')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#btn-register-submit {
    margin-top: 50px;
}

</style>