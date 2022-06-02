<template>
    <div id="register">
        <p>Register:</p>
        <form @submit="submitRegister" class="form-register">
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
            <div class="row mb-3">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
const auth = require('../API/auth')

    export default {
        name: 'Register',
        data() {
            return {}
        },
        methods: {
            submitRegister (event) {
                event.preventDefault()
                auth.signup({email: event.target.elements.email.value, password: event.target.elements.password.value});
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>