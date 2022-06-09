<template>
    <div id="app">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">Groupomania</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarLogReg">
            <div class="navbar-nav ms-auto">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" @click="login()" v-if="!authenticated">Login</button>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" @click="register()" v-if="!authenticated">Register</button>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" @click="article()" v-if="authenticated">Create new article</button>
              <button type="button" class="btn btn-primary" @click="logout()" v-if="authenticated">Logout</button>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <transition name="fade">
          <router-view />
        </transition>
        <!-- Modal -->
        <Modal :component="component" :isForm="isForm" />
      </main>
    </div>
</template>

<script>
import Register from './components/register/register.vue'
import Login from './components/login/login.vue'
import Modal from './components/modal.vue'
import Article from './components/article/modal/article.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
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
    register () {
      this.component = Register
      this.isForm = true
    },
    login () {
      this.component = Login
      this.isForm = true
    },
    logout () {
      console.log("logout")
      this.$store.dispatch('DISCONNECT')
    },
    article () {
      this.component = Article
      this.isForm = true
    }
  }
}
</script>

<style lang="scss">
  @import "./scss/custom.scss";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3e33d8;
    margin-top: 0px;
  }
</style>
