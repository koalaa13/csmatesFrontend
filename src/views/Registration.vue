<template>
  <div class="registration">
    <div class="with-cache-background">
      <Header/>
      <div class="content-with-margin">
        <RegisterForm/>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Registration',
  components: { Header, RegisterForm, Footer }
}
</script>

<style scoped>
</style>
