<template>
  <div id="home">
    <div id="articles" class="container">
      <div v-for="(article, key) in articles" :key="key" class="zoom">
        <post-article
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
import PostArticle from '../article/page/oneArticle.vue'
import { mapState } from 'vuex'
import api from '../API/article'

  export default {
    name: 'Home',
    components: {
      Modal,
      PostArticle
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
    },
    beforeRouteEnter (to, from, next) {
      api.getTenArticle()
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