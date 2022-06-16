<template>
    <div class="indexArticle">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ value.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Author : {{ value.author }}</h6>
          <div v-html="value.text"></div>
          <p class="card-text">Posté le : {{ value.date }}</p>
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
<style scoped>

</style>