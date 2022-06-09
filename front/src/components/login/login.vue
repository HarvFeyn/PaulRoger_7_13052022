<template>
    <div id="login">
        <p>Login:</p>
        <form @submit="login" class="form-register">
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
                <p>{{ messageSubmit }}</p>
            </div>
        </form>
    </div>
</template>

<script>
const auth = require('../API/auth')

    export default {
        name: 'Login',
        data() {
            return {
                messageSubmit: ''
            }
        },
        methods: {
            login (event) {
                event.preventDefault()
                auth.signin(event.target.elements.email.value, event.target.elements.password.value)    
                    .then(result => {
                        this.$store.dispatch('CONNECTION', {user: { token: result.data.token, name: result.data.userName, email: result.data.userEmail, id: result.data.userId }})
                    })
                    .catch(this.messageSubmit="email ou mot de passe incorrect")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>