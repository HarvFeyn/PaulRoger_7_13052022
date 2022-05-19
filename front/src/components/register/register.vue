<template>
    <div class="register">
        <p>Register:</p>
        <form action="" method="get" class="form-register">
            <div class="form-register">
                <label for="name">Enter your name: </label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="form-register">
                <label for="email">Enter your email: </label>
                <input type="email" name="email" id="email" required>
            </div>
            <div class="form-register">
                <label for="password">Enter your password: </label>
                <input type="password" name="password" id="password" required>
            </div>
            <div class="form-register">
                <input type="submit" value="Subscribe!">
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'register',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>