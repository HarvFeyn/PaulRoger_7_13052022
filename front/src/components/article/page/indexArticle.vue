<template>
    <div class="indexArticle">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ value.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Auteur : {{ value.author }}</h6>
          <div class="card-content" v-html="value.text"></div>
          <div class="card-footer">
            <p class="card-text">Posté le : {{value.date.split('T')[0]}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'indexArticle',
  props: ['value']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
    width: 100%;
    margin-top: 20px;
    max-height: 350px;
}

.card-body {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.card-content {
    overflow: hidden;
    margin-bottom: 15px;
}

</style>