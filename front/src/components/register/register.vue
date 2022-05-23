<template>
    <div class="register">
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
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
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>

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