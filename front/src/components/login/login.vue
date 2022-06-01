<template>
    <div id="login">
        <p>Login:</p>
        <form @submit="test" class="form-register">
            <div class="form-register">
                <label for="email">Enter your email: </label>
                <input type="email" name="email" id="email" required>
            </div>
            <div class="form-register">
                <label for="password">Enter your password: </label>
                <input type="password" name="password" id="password" required>
            </div>
            <div class="row mb-3">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {}
        },
        methods: {
            test (event) {
                event.preventDefault()
                console.log("mdr Login")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>