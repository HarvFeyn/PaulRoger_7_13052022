<template>
    <div class="oneArticle">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{article.title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Author : {{article.author}}</h6>
          <div class="card-content" v-html="article.text"></div>
          <div class="card-footer">
            <p class="card-text">Posté le : {{article.date.split('T')[0]}}</p>
            <div class="card-likes">
              <div class="card-like">
                <p class="card-icon-like" @click="likeArticle()">likes : </p>
                <p> {{numberlikes}} </p>
              </div>
              <div class="card-like">
                <p class="card-icon-like" @click="dislikeArticle()">dislikes : </p>
                <p> {{numberdislikes}} </p>
              </div>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" v-if="canModify()" @click="modifArticle()">Modify</button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" v-if="canModify()" @click="deleteArticle()">Delete</button>
          </div>
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
  computed: {
    numberlikes () {
      let nbrlike = 0
      const likes = this.article.likes
      for (const like in likes) {
        if ( likes[like] == 1 ) {
          nbrlike++
        }
      }
      return nbrlike
    },
    numberdislikes () {
      let nbrdislike = 0
      const likes = this.article.likes
      for ( let like in likes) {
        if ( likes[like] == -1 ) {
          nbrdislike++
        }
      }
      return nbrdislike
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
    },
    likeArticle () {
      api.likeArticle(this.$store.state.user.id, this.article.id, 1, this.$store.state.user.token)
    },
    dislikeArticle () {
      api.likeArticle(this.$store.state.user.id, this.article.id, -1, this.$store.state.user.token)
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
.card-body{
  margin: 15px;
  overflow: hidden;
}

img {
  object-fit: cover;
}

.card-footer {
  display: flex;
  justify-content: space-around;
}

.card-likes {
  display: flex;
  justify-content: space-around;
}

.card-like {
  margin: 5px;
  display: flex;
  justify-content: space-around;
}

.card-icon-like:hover {
  cursor: pointer;
}

</style>