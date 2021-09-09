<template>
  <div class="registration">
    <div class="with-cache-background">
      <Header/>
      <div class="content-with-margin">
        <LoginForm/>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Login',
  components: {
    Header,
    LoginForm,
    Footer
  }
}
</script>

<style scoped>
</style>
