<template>
  <div class="home">
    <p>Page d'accueil</p>
    <button v-on:click="test">connect?</button>
    <button v-on:click="token">token</button>
    <button v-on:click="user">user</button>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
        return {}
    },
    methods: {
      test() {
        console.log(this.$store.state.authenticated)
      },
      token() {
        console.log(this.$store.state.authToken)
      },
      user() {
        console.log(this.$store.state.user)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>