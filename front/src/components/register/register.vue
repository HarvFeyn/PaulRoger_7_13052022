<template>
    <div id="register">
        <form v-if="!confirmation" @submit="submitRegister" class="form-register">
            <h3>Register :</h3>
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
                <p>{{ messageSubmit }}</p>
            </div>
        </form>
        <div v-if="confirmation" class="confirmation">
            {{ localization.register }}
        </div>
    </div>
</template>

<script>
const auth = require('../API/auth')
const localization = require('../../helpers/localization')
const eventBus = require('../../helpers/event-bus')

    export default {
        name: 'Register',
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
            submitRegister (event) {
                event.preventDefault()
                auth.signup({name: event.target.elements.name.value, email: event.target.elements.email.value, password: event.target.elements.password.value})
                    .then(result => {
                        this.confirmation = true
                    })
                    .catch(error => {this.messageSubmit='Nom ou email déjà utilisé.'})
            }
        },
        created() {
            this.reset()
            console.log("Register created")
            eventBus.$on('show-modal-Register', value => {
                console.log('Register - eventBus.$on(show-modal)')
                this.reset()
            })
        },
        beforeDestroy () {
            console.log('beforeDestroy Register')
            eventBus.$off('show-modal-Register')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn {
    margin-top: 10px;
}

</style>