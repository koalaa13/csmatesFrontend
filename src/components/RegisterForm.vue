<template>
  <div class="registration-box">
    <form class="sign-up-form" @submit.prevent="register">
      <div class="text-box">Enter your email:</div>
      <input v-model="email" class="text-field" type="text" required autofocus maxlength="64">
      <div class="text-box">Enter your username:</div>
      <input v-model="username" class="text-field" type="text" required autofocus maxlength="64">
      <div class="text-box">Enter your password:</div>
      <input v-model="password" class="text-field" type="password" required maxlength="64">
      <div class="text-box">Confirm your password:</div>
      <input v-model="passwordConfirmation" class="text-field" type="password" required maxlength="64">
      <input class="button-sign-up" type="submit" value="Sign up" style="margin-top: 10%">
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: ''
    }
  },
  methods: {
    register: function () {
      const data = {
        email: this.email,
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('register', data)
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.registration-box {
  margin: auto;
  position: relative;
  background-color: rgba(48, 48, 59, 0.4);
  border-color: #17171d;
  border-style: solid;
  border-width: 0;
  border-radius: 5px;
  width: 540px;
  height: 480px;
}

.sign-up-form {
  margin: auto;
  position: relative;
  width: 60%;
  top: 7%;
}

.text-field {
  box-sizing: border-box;
  height: 44px;
  width: 100%;
  outline: none;
  border-width: 0;
  border-radius: 3px;
  text-rendering: auto;
  text-indent: 0;
  display: inline-block;
  text-align: start;
  padding: 4px 6px;
  font: 400 24px "Comic Sans MS";
  color: #bfbfbf;
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0;
}

.text-box {
  margin-top: 2%;
  margin-bottom: 3%;
  position: relative;
  text-align: center;
  color: aliceblue;
  font: 400 20px var(--header-cursive), Verdana;
}

.button-sign-up {
  color: whitesmoke;
  margin: 5% auto auto;
  border-width: 0;
  border-radius: 3px;
  position: relative;
  font: 400 18px var(--header-cursive), Verdana;
  background-color: #ff075b;
  height: 40px;
  width: 100%;
}
</style>
