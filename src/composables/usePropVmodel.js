import { ref, watch, onMounted, defineEmits } from 'vue'

export default function usePropVmodel(prop, { emit }) {
  // Create a reactive reference for the deep-copied prop
  const propCopy = ref(null)

  propCopy.value = JSON.parse(JSON.stringify(prop))
  // Lifecycle hook to perform deep copy once component is created

  // Watch the propCopy for changes
  watch(propCopy.value, (newVal, oldVal) => {
    // Check if newVal has a truthy value; if not, return early
    if (!newVal) {
      return
    }
    emit('prop-update', newVal)
    // Emit the 'prop-update' event with the new value of propCopy
  })

  // Return the propCopy so it can be used in the component
  return propCopy.value
}
