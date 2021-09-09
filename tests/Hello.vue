<template>
  <div v-text="foo" class="a" :foo="abc" foo="def">Hello</div>
</template>

<script lang="ts">
export default {
  setup(props) {
    watch(() => {
      console.log(props.count)
    })

    return () => {
      return h('div', props.count)
    }
  },
}
</script>

<style></style>
