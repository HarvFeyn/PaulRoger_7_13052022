<template>
    <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/login">Login</router-link>
          <router-link to="/register">Register</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>

</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3e33d8;
    margin-top: 0px;
  }

  #nav {
    background-color: rgb(228, 205, 172);
    padding: 10px;
    margin-top: 0%;
    display: flex;
    justify-content: space-around;
  }
</style>
