<template>
    <div id="app">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">Groupomania</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarLogReg">
            <div class="navbar-nav ms-auto">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
            </div>
          </div>
        </div>
      </nav>
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
