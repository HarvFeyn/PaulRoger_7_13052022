<template>
    <!-- Modal -->
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">test</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <component :is="component" />
                </div>
                <div v-if="!isForm" class="modal-footer">
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Modal',
  components: {},
  props: {
    component: {
      type: Object
    },
    isForm: {
      type: Boolean
    }
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>