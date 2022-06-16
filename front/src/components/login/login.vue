<template>
    <div id="login">
        <form v-if="!confirmation" @submit="login" class="form-register">
            <h3>Login :</h3>
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
        <div v-if="confirmation" class="confirmation">
            {{ localization.loged }}
        </div>
    </div>
</template>

<script>
const auth = require('../API/auth')
const localization = require('../../helpers/localization')
const eventBus = require('../../helpers/event-bus')

    export default {
        name: 'Login',
        data() {
            return this.initialData()
        },
        methods: {
            initialData () {
                return {
                    messageSubmit: "",
                    localization,
                    confirmation: false
                }
            },
            reset () {
                Object.assign(this.$data, this.initialData())
            },
            login (event) {
                event.preventDefault()
                auth.signin(event.target.elements.email.value, event.target.elements.password.value)    
                    .then(result => {
                        this.$store.dispatch('CONNECTION', {user: { token: result.data.token, name: result.data.userName, email: result.data.userEmail, id: result.data.userId, isAdmin: result.data.isAdmin }})
                        this.confirmation = true
                    })
                    .catch(this.messageSubmit="email ou mot de passe incorrect")
            }
        },
        created() {
            this.reset()
            console.log("Login created")
            eventBus.$on('show-modal-Login', value => {
                console.log('Login - eventBus.$on(show-modal)')
                this.reset()
            })
        },
        beforeDestroy () {
            console.log('beforeDestroy Login')
            eventBus.$off('show-modal-Login')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>