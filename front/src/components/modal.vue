<template>
    <!-- Modal -->
    <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <component :is="component" :articleId="articleId" />
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
import { Modal } from 'bootstrap'
const eventBus = require('../helpers/event-bus')

export default {
  name: 'Modal',
  components: {},
  props: {
    options: {
      type: Object,
      required: false
    },
    isForm: {
      type: Boolean,
      default: false
    },
    component: {
      type: Object,
      required: false
    },
    value: {
      type: Object,
      default: undefined
    },
    articleId: {
      type: Number
    }
  },
  watch: {
    options: function (newVal, oldVal) { // watch it
      // Apply new configuration option to current modal instance
      this.modal._config = this.options
    }
  },
  data () {
    return {
      modal: undefined
    }
  },
  mounted () {
    console.log("modal mounted")
    const modalEl = document.getElementById('modal')
    // Create new Modal Instance and apply configuration options
    this.modal = new Modal(modalEl, this.options)
    modalEl.addEventListener('show.bs.modal', event => {
      if (this.component) {
        console.log(this.component.name)
        // waiting 100 ms in order to let time for components to be created before received event bus
        setTimeout(() => {
          eventBus.$emit(`show-modal-${this.component.name}`, undefined)
        }, 100)
      }
    })
  },
  methods: {
    close () {
      if (typeof this.modal !== 'undefined') {
        this.modal.hide()
        console.log('close modal')
      }
    }
  }
}
</script>