<template>
  <header>
    <a class="logo" @click="$router.push('/')">
      <img src="@/assets/logo.png" alt="CsGoTeammates">
    </a>
    <div class="enter-or-register-box">
      <div v-if="isLoggedIn">
        <div>{{ getUsername }}</div>
        <a @click="logout">
          <span>Logout</span>
        </a>
      </div>
      <div v-else>
        <a @click="$router.push('sign-in')">
          <span>Log In</span>
        </a>
        <a @click="$router.push('sign-up')">
          <span>Register</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    },
    getUsername: function () {
      return this.$store.getters.getUsername
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style scoped>
header {
  padding: 35px 35px 0 35px;
  margin: 0 0 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}

header .logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

header .enter-or-register-box {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-end;
}

header .enter-or-register-box a {
  margin-left: 2rem;
  position: relative;
  width: 150px;
  height: 45px;
  background-color: var(--almost-white-color);
  display: inline-block;
}

header .enter-or-register-box a:before,
header .enter-or-register-box a:after {
  content: '';
  position: absolute;
  inset: 0;
  background: #f00;
  transition: 0.5s;
  background: linear-gradient(45deg, #ff075b, var(--background-color), var(--background-color), #1faa22);
}

header .enter-or-register-box a:hover:before {
  inset: -3px;
}

header .enter-or-register-box a:hover:after {
  inset: -3px;
  filter: blur(10px);
}

header .enter-or-register-box a span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--background-color);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--almost-white-color);
  border: 1px solid var(--buttons-border-color);
  overflow: hidden;
}

header .enter-or-register-box a span::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 100%;
  height: 100%;
  background: var(--second-color);
  transform: skew(25deg);
}
</style>
