<template>
  <div id="home">
      
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="150"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide
        img-src="../assets/img/1.png"
        class="background-img"
      >
      </b-carousel-slide>

      <b-carousel-slide
        img-src="../assets/img/2.png"
        class="background-img"
      >
      </b-carousel-slide>

      <b-carousel-slide
        img-src="../assets/img/3.png"
        class="background-img"
      >
      </b-carousel-slide>
       <!-- <div class="centered-home__top">
        <div class="content-home__header-main">BAP TRIP 2022</div>
        <div class="content-home__header-bap">QUY NH0N</div>
      </div> -->
    </b-carousel>
   
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  },
}
</script>

<style lang="scss">
@font-face {
  src: url(../assets/font/luckiest-guy.regular.ttf);
  font-family: luckiestguy;
}

.carousel-indicators {
  z-index: 2 !important;
}

.centered-home__top {
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.content-home__header-main {
    background: -webkit-linear-gradient(180deg, #ed4b13, #FFD700);
    background: linear-gradient(180deg, #ed4b13, #FFD700);
    font-family: luckiestguy;
    font-size: 6.8vw;
    text-align: center;
    line-height: 110%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(5px 10px #00a668);
    animation: textShow 5s; 
    
}

.content-home__header-bap {
    background: -webkit-linear-gradient(180deg, #ed4b13, #FFD700);
    background: linear-gradient(180deg, #ed4b13, #FFD700);
    font-family: luckiestguy;
    font-size: 4.6vw;
    text-align: center;
    line-height: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(6px 6px #00a668);
    animation: textShow 5s;

}

@media (min-width: 784px) and (max-width: 1120px) {
    .centered-home__top {
        top: 32%;
    }

    .content-home__header-main {
        font-size: 6.8vw;
        filter: drop-shadow(5px 6px #00a668);
    }

    .content-home__header-bap {
        font-size: 4.6vw;
        filter: drop-shadow(3px 3px #00a668);
    }
}

@media (min-width: 530px) and (max-width: 784px){
    .centered-home__top {
        top: 40%;
    }

    .content-home__header-main {
        font-size: 6.8vw;
        text-align: center;
        filter: drop-shadow(2px 3px #00a668);
    }

    .content-home__header-bap {
        font-size: 4.6vw;
        filter: drop-shadow(3px 3px #00a668);
    }
}

@media (max-width: 530px){
     .centered-home__top {
        top: 55%;
    }

    .content-home__header-main {
        font-size: 7.2vw;
        filter: drop-shadow(2px 3px #00a668);
    }

    .content-home__header-bap {
        font-size: 5.2vw;
        text-align: center;
        filter: drop-shadow(3px 3px #00a668);
    }
}

@keyframes textShow {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

</style>
