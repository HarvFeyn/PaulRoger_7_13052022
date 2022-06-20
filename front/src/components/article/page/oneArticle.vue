<template>
    <div class="oneArticle">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{article.title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Auteur : {{article.author}}</h6>
          <div class="card" v-html="article.text"></div>
          <div class="card-footer">
            <div class="card-likes">
              <div class="card-like">
                <i id="thumbliked" class="bi-hand-thumbs-up btn-like" title="J'aime" @click="likeArticle()"/>
                <p> {{numberlikes}} </p>
              </div>
              <div class="card-like">
                <i id="thumbdisliked" class="bi-hand-thumbs-down btn-like" title="Je n'aime pas" @click="dislikeArticle()"/>
                <p> {{numberdislikes}} </p>
              </div>
            </div>
            <p class="card-text">Posté le : {{article.date.split('T')[0]}}</p>
            <button type="button" class="btn btn-modif" data-bs-toggle="modal" data-bs-target="#modal" v-if="canModify()" @click="modifArticle()">Modify</button>
            <button type="button" class="btn btn-modif" data-bs-toggle="modal" data-bs-target="#modal" v-if="canModify()" @click="deleteArticle()">Delete</button>
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
      article : {
        date: ""
      },
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
    },
    isliked() {
      let liked = 0
      for (let like in this.article.likes) {
        if (like == this.$store.state.user.id) {
          liked = this.article.likes[like]
        }
      }
      return liked
    }

  },
  methods: {
    canModify () {
      if( ( this.article.author == this.$store.state.user.name ) || this.$store.state.user.isAdmin == 1 ) {
        return true
      }
      return false
    },
    callApi () {
      api.getOneArticle(this.$route.params.id)
        .then(article => {
            this.article = article.data.result[0]
            this.changelikecolor()
          }
      )
    },
    modifArticle () {
      this.$parent.modifyArticle(this.article.id)
    },
    deleteArticle () {
      this.$parent.deleteArticle(this.article.id)
    },
    apilike (like) {
      api.likeArticle(this.$store.state.user.id, this.article.id, like, this.$store.state.user.token)
        .then(() => {
            this.callApi()
          }
        )
    },
    likeArticle () {
      if(this.$store.state.authenticated) {

        if(this.isliked == 1) {
          this.apilike(0)
        }

        else {
          this.apilike(1)
        }

      }

      else {
        this.$parent.login(this.article.id)
      }
    },
    dislikeArticle () {
      if(this.$store.state.authenticated) {

        if(this.isliked == -1) {
          this.apilike(0)
        }

        else {
          this.apilike(-1)
        }
        
      }

      else {
        this.$parent.login(this.article.id)
      }
    },
    changelikecolor () {
      if(this.isliked == 1) {
        document.getElementById("thumbliked").style.color = "green"
        document.getElementById("thumbdisliked").style.color = "black"
      }

      if(this.isliked == -1) {
        document.getElementById("thumbdisliked").style.color = "red"
        document.getElementById("thumbliked").style.color = "black"
      }

      if(this.isliked == 0) {
        document.getElementById("thumbdisliked").style.color = "black"
        document.getElementById("thumbliked").style.color = "black"
      }
    }
  },
  beforeCreate () {
      api.getOneArticle(this.$route.params.id)
        .then(article => {
            this.article = article.data.result[0]
        }
      )
  },
  updated() {
    this.changelikecolor() 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card-body{
  margin: 15px;
  overflow: hidden;
}

img {
  object-fit: cover;
}

.card {
  margin-bottom: 25px;
}

.card-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
}

.card-likes {
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin-top: 13px;
}

.card-like {
  margin: 5px;
  display: flex;
  text-align: center;
  justify-content: space-around;
}

.card-text {
  margin-top: 18px;
}

i:hover {
  cursor: pointer;
}

@media (max-width : 700px) {
  .card-footer {
    flex-direction: column;
  }
}

</style>