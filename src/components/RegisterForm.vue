<template>
  <div class="registration-box">
    <form class="login-pass-input-fields" name="logon" id="login-form">
      <div class="text-box">Enter your username:</div>
      <input required class="text-field" type="text" autofocus maxlength="64">
      <div class="text-box">Enter your password:</div>
      <input required class="text-field" type="password" maxlength="64">
      <div id="button-sign-in">
        <input class="button-sign-in" type="submit" id="image-login" value="Sign in" style="margin-top: 10%">
      </div>
      <div id="button-sign-up">
        <input class="button-sign-in" type="submit" id="image-signup" value="Sign in" style="background-color: #27d42a">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm'
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
  height: 360px;
}

.login-pass-input-fields {
  margin: auto;
  position: relative;
  width: 60%;
  top: 10%;
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

.button-sign-in {
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
