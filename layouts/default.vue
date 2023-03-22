<template>
  <b-container class="px-0 layout" fluid>
    <nuxt />
  </b-container>
</template>

<script>
export default {
  name: 'LayoutDefault',
}
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  // background-color: rgb(227, 249, 255);
}
</style>
