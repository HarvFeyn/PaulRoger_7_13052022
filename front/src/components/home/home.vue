<template>
  <div class="home">
    <p>Page d'accueil</p>
    <button v-on:click="test">connect?</button>
    <button v-on:click="token">token</button>
    <button v-on:click="user">user</button>
    <button data-bs-toggle="modal" data-bs-target="#modal" @click="article()" v-if="authenticated">Create new article</button>
  </div>
</template>

<script>
import Article from '../article/modal/article.vue'
import Modal from '../modal.vue'
import { mapState } from 'vuex'

  export default {
    name: 'Home',
    components: {
      Modal
    },
    data () {
      return {
        component: undefined,
        isForm: true
      }
    },
    computed: {
      ...mapState(['authenticated'])
    },
    methods: {
      test() {
        console.log(this.$store.state.authenticated)
      },
      token() {
        console.log(this.$store.state.user.token)
      },
      user() {
        console.log(this.$store.state.user)
      },
      Article () {
        this.component = Article
        this.isForm = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>