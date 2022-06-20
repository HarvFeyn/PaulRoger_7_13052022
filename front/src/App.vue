<template>
    <div id="app">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/" @click="reload()">
            <img id="logogroupomania" alt="logo de groupomania" src="./assets/img/Groupomania Logos (update 2022)/icon-left-font-monochrome-black.png">
          </router-link>
          <div class="navbar-nav">
            <p id="username" v-if="authenticated">{{$store.state.user.name}}</p>
            <button type="button" class="btn btn-nav" data-bs-toggle="modal" data-bs-target="#modal" @click="login()" v-if="!authenticated">{{localization.login}}</button>
            <button type="button" class="btn btn-nav" data-bs-toggle="modal" data-bs-target="#modal" @click="register()" v-if="!authenticated">{{localization.register}}</button>
            <button type="button" class="btn btn-nav" data-bs-toggle="modal" data-bs-target="#modal" @click="article()" v-if="authenticated">{{localization.newarticle}}</button>
            <button type="button" class="btn btn-nav" @click="logout()" v-if="authenticated">Déconnection</button>
          </div>
        </div>
      </nav>
      <main>
        <transition name="fade">
          <router-view />
        </transition>
        <!-- Modal -->
        <Modal :component="component" :isForm="isForm" :articleId="articleId" />
      </main>
    </div>
</template>

<script src="https://kit.fontawesome.com/ff2781ec58.js" crossorigin="anonymous"></script>
<script>
import Register from './components/register/register.vue'
import Login from './components/login/login.vue'
import Modal from './components/modal.vue'
import Article from './components/article/modal/article.vue'
import ModifyArticle from './components/article/modal/modify.vue'
import DeleteArticle from './components/article/modal/delete.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { mapState } from 'vuex'
const localization = require('./helpers/localization')

export default {
  name: 'App',
  components: {
    Modal
  },
  data () {
    return {
      component: undefined,
      isForm: true,
      articleId: undefined,
      localization
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
    },
    modifyArticle (id) {
      this.component = ModifyArticle
      this.isForm = true
      this.articleId = id
    },
    deleteArticle (id) {
      this.component = DeleteArticle
      this.isForm = true
      this.articleId = id
    },
    reload () {
      
    }
  }
}
</script>


<style lang="scss">

  @import "./scss/custom.scss";
  @import "./scss/utils";
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  #app {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $tertiarycolor;
    margin: 0px;
    padding: 0px;
  }

  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .container-fluid {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .navbar-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .btn-nav {
    margin: 10px;
  }

  main {
    margin: 25px;
  }

  #logogroupomania {
    max-width: 150px;
  }

  form > h3 {
    text-decoration: underline $primarycolor;
  }

  #username {
    margin-top: 17px;
    color: $primarycolor;
    text-decoration: bold;
  }

  @media (max-width : 700px) {
    .container-fluid {
      flex-direction: column;
      justify-content: center;
    }

    .navbar-nav {
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
