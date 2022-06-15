<template>
    <div id="article">
        <form id="form-article-setting" class="needs-validation">
            <h2 class="mb-3">{{ localization.addArticle }}</h2>
            <div class="form-floating mb-3">
                <input id="floating-name" v-model="title" type="text" class="form-control">
                <label for="floating-name">Titre :</label>
            </div>
            <div class="row mb-3 vue-editor">
                <vue-editor id="vue-editor" v-model="content" use-custom-image-handler :editor-toolbar="customToolbar" placeholder="Saisissez le contenu de l'article ici"/>
            </div>
            <div class="row mb-3 form-footer">
                <button id="btn-register-submit" type="submit" class="btn btn-primary">{{ localization.save }}</button>
            </div>
        </form>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
const apiArticle = require('../../API/article')
const localization = require('../../../helpers/localization')

    export default {
        name: 'Article',
        component: {
            VueEditor
        },
        data() {
            return this.initialData()
        },
        methods: {
            initialData () {
                return {
                    localization,
                    title: undefined,
                    nameValid: false,
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
            create (event) {
                event.preventDefault()
                apiArticle.createArticle(event.target.elements.title.value, event.target.elements.body.value, this.$store.state.user.name, this.$store.state.user.token)    
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