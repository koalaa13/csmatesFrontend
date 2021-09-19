<template>
  <footer>
    <a href="#" @click="check">CsGoTeammates</a> &copy; 2021 by koalaa13
  </footer>
</template>

<script>
export default {
  methods: {
    check: function () {
      this.$bvToast.toast('You have been successfully registered!\n Confirm your email and start to build a team!', {
        title: 'Successful registration!',
        variant: 'success',
        solid: true
      })
    }
  }
}
</script>

<style scoped>
  footer {
    margin-top: 2rem;
    border-top: 1px solid var(--almost-white-color);
    padding-top: 0.5rem;
    text-align: center;
    color: var(--almost-white-color);
  }
</style>
