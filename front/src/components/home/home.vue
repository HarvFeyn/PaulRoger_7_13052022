<template>
  <div id="home">
    <div id="articles" class="container">
      <div v-for="(article, key) in articles" @click="goToArticleRouteId(article.id)" :key="key" class="zoom">
        <index-article
          :id="article.id"
          :value="article"
          :count="article.count"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../modal.vue'
import IndexArticle from '../article/page/indexArticle.vue'
import { mapState } from 'vuex'
import api from '../API/article'

  export default {
    name: 'Home',
    components: {
      Modal,
      IndexArticle
    },
    data () {
      return {
        articles: []
      }
    },
    computed: {
      ...mapState(['authenticated'])
    },
    methods: {
      goToArticleRouteId (id) {
        console.log(id)
        this.$router.replace({ name: 'article', params: { id } })
      }
    },
    beforeRouteEnter (to, from, next) {
      api.getAllArticle()
        .then(dataApi => {
            const articles = dataApi.data.result
            next(page => {
              page.articles = articles
            })
          }
        )
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>