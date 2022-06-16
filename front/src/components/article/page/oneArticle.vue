<template>
    <div class="oneArticle">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{article.title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Author : {{article.author}}</h6>
          <div v-html="article.text"></div>
          <p class="card-text">Posté le : {{article.date}}</p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" v-if="canModify()" @click="modifArticle()">Modify</button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" v-if="canModify()" @click="deleteArticle()">Delete</button>
        </div>
      </div>
    </div>
</template>

<script>
import api from '../../API/article'

export default {
  name: 'oneArticle',
  data () {
    return {
      article : {},
      component: undefined,
      isForm: true
    }
  },
  methods: {
    canModify () {
      if( ( this.article.author == this.$store.state.user.name ) || this.$store.state.user.isAdmin == 1 ) {
        return true
      }
      return false
    },
    modifArticle () {
      this.$parent.modifyArticle(this.article.id)
    },
    deleteArticle () {
      this.$parent.deleteArticle(this.article.id)
    }
  },
  beforeCreate () {
    api.getOneArticle(this.$route.params.id)
      .then(article => {
          this.article = article.data.result[0]
        }
      )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>