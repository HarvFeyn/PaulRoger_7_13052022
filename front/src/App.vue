<template>
    <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/login">Login</router-link>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Register
          </button>
        </div>
        <main>
          <transition name="fade">
            <router-view />
          </transition>
          <!-- Modal -->
          <Modal
            :value="value"
            :options="modalOptions"
            :is-form="isForm"
            :component="component"
          />
        </main>
    </div>
</template>

<script>

</script>

<style lang="scss">
  @import "./scss/custom.scss";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3e33d8;
    margin-top: 0px;
  }
</style>
