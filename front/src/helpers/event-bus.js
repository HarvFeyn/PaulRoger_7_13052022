const eventBus = {
  events: {}
}

eventBus.$on = (event, callback) => {
  const eventsType = eventBus.events[event]
  if (typeof eventsType === 'undefined') {
    eventBus.events[event] = []
  }

  eventBus.events[event].push(callback)
}

eventBus.$emit = (event, ...args) => {
  for (const callback in eventBus.events[event]) {
    // eslint-disable-next-line no-prototype-builtins
    if (!eventBus.events[event].hasOwnProperty(callback)) {
      return
    }

    eventBus.events[event][callback](...args)
  }
}

eventBus.$off = (event) => {
  delete (eventBus.events[event])
}

module.exports = eventBus
