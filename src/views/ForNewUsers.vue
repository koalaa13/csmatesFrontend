<template>
  <div class="for-new-users">
    <div class="with-cache-background">
      <Header/>
      <div class="content-with-margin">
        <div class="main-info">
          <div class="main-title">
            Eeh bilo chetvero, chetire muzhika.
          </div>
          <br>
          <div class="second-info-title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, similique!
          </div>
          <div class="features">
            <div class="feature">
              <img src="@/../public/favicon.png" alt="muszhik" class="feature-icon">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div class="feature">
              <img src="@/../public/favicon.png" alt="muszhik" class="feature-icon">
              <h1>Lorem ipsum dolor sit.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div class="feature">
              <img src="@/../public/favicon.png" alt="muszhik" class="feature-icon">
              <h1>Lorem ipsum dolor.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div class="feature">
              <img src="@/../public/favicon.png" alt="muszhik" class="feature-icon">
              <h1>Lorem ipsum dolor sit.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-with-margin">
      <div class="features-info"></div>
      <div class="bait-info">
        <div class="title">
          Become part of it.
        </div>
        <div class="tournament-images">
          <div class="tournament-info">
            <img src="@/assets/IEM_Katowice.png" alt="IEM-Katowice">
            <div class="caption">Lorem ipsum.</div>
          </div>
          <div class="tournament-info">
            <img src="@/assets/IEM_Katowice.png" alt="IEM-Katowice">
            <div class="caption">Lorem ipsum.</div>
          </div>
          <div class="tournament-info">
            <img src="@/assets/IEM_Katowice.png" alt="IEM-Katowice">
            <div class="caption">Lorem ipsum.</div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header'

export default {
  name: 'ForNewUsers',
  components: {
    Header,
    Footer
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');

.content-with-margin .features {
  padding: 50px 0;
  color: whitesmoke;
  max-width: 1200px;
  margin: auto;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  flex-flow: row wrap;
}

.content-with-margin .features .feature {
  box-sizing: border-box;
  min-width: 216px;
  text-rendering: optimizeLegibility;
  margin-right: 8px;
  text-align: center;
  flex: 1;
  padding-top: 32px;
}

.content-with-margin .feature .feature-icon {
  border-radius: 50%;
  margin: auto;
  display: table;
  min-width: 92px;
  max-width: 240px;
}

.content-with-margin .main-info .main-title {
  text-transform: uppercase;
  line-height: 1.3;
  margin: auto;
  text-align: center;
  font: 700 40px var(--header-cursive);
  color: var(--white-color);
  max-width: 40%;
}

.content-with-margin .main-info .second-info-title {
  margin: auto;
  text-align: center;
  font: 400 20px var(--header-cursive), sans-serif;
  color: var(--almost-white-color);
  max-width: 50%;
}

.feature h1 {
  margin-bottom: 0;
  font: 700 24px var(--header-cursive);
}

.feature p {
  margin: 1rem 0 0;
  padding: 0 1rem 0 1rem;
  color: var(--almost-white-color);
  font: 400 16px Tahoma;
}

.bait-info .tournament-images {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.bait-info .title {
  text-align: center;
  margin-bottom: 1rem;
  font: 700 50px var(--header-cursive), Verdana;
}

.bait-info .tournament-images .tournament-info {
  margin-left: 1rem;
  margin-right: 1rem;
}

.bait-info .tournament-images .tournament-info img {
  filter: drop-shadow(0 0 4px #4444dd);
  border-radius: 8px;
  max-width: 300px;
}

.bait-info .tournament-images .caption {
  text-align: center;
  font: 400 25px var(--header-cursive), Verdana;
}

@media (max-width: 1700px) {
  .bait-info .tournament-images .tournament-info img {
    max-width: 250px;
  }

  .bait-info .title {
    font-size: 45px;
  }

  .bait-info .tournament-images .caption {
    font-size: 20px;
  }

  .content-with-margin .feature .feature-icon {
    max-width: 192px;
  }

  .feature h1 {
    font-size: 24px;
  }

  .feature p {
    font-size: 14px;
  }
}

@media (max-width: 1450px) {
  .bait-info .tournament-images .tournament-info img {
    max-width: 200px;
  }

  .bait-info .title {
    font-size: 40px;
  }

  .bait-info .tournament-images .caption {
    font-size: 18px;
  }

  .content-with-margin .feature .feature-icon {
    max-width: 144px;
  }

  .feature h1 {
    font-size: 20px;
  }

  .feature p {
    font-size: 12px;
  }
}

@media (max-width: 1024px) {
  .bait-info .tournament-images .tournament-info img {
    max-width: 150px;
  }

  .bait-info .title {
    font-size: 35px;
  }

  .bait-info .tournament-images .caption {
    font-size: 16px;
  }

  .content-with-margin .feature .feature-icon {
    max-width: 96px;
  }

  .feature h1 {
    font-size: 16px;
  }

  .feature p {
    font-size: 10px;
  }
}
</style>
