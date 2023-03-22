<template>
  <div class="multi-language mx-3">
    <b-img
      src="/lang/vn.png"
      class="img-lang mx-1"
      @click="change('vn')"
    />
    <b-img
      src="/lang/en.png"
      class="img-lang mx-1"
      @click="change('en')"
    />
  </div>
</template>

<script>
export default {
  name: 'MultiLanguage',
  methods: {
    change(lang) {
      this.$store.dispatch('lang/switchLang', lang)
      this.refreshTooltipMessageErrors()
    },
    refreshTooltipMessageErrors() {
      const inputNodes = document.querySelectorAll('input.is-invalid')
      inputNodes.forEach((input) => {
        input.focus({ preventScroll: true })
        input.blur()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
