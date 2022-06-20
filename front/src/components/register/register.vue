<template>
    <div id="register">
        <form v-if="!confirmation" @submit="submitRegister" class="form-register">
            <h3>{{ localization.register }}</h3>
            <div class="form-item">
                <label class="info-data" for="name">{{ localization.entername }}</label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="form-item">
                <label class="info-data" for="email">{{ localization.enteremail }}</label>
                <input type="email" name="email" id="email" required>
            </div>
            <div class="form-item">
                <label class="info-data" for="password">{{ localization.enterpassword }}</label>
                <input type="password" name="password" id="password" required>
            </div>
            <div class="row mb-3">
                <button type="submit" class="btn btn-primary">{{ localization.register }}</button>
                <p>{{ messageSubmit }}</p>
            </div>
        </form>
        <div v-if="confirmation" class="confirmation">
            <p>{{ localization.registermsg }}</p>
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
                        console.log("plop")
                        this.confirmation = true
                        console.log(this.confirmation)
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

.form-register {
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.form-item {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

@media (max-width : 700px) {
    .form-item{
        flex-direction: column;
    }
}
</style>