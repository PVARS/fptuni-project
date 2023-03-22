<template>
  <section>
      <div class="wave"></div>
      <div  class="footer-qr" hidden>
          <img src="../assets/img/qrcodegame.png" class="footer-qr__img">
      </div>
  </section>
</template>

<script>
export default {
     
}
</script>

<style lang="css" scoped>
.footer-qr__img {
    width: 150px;
    height: 150px;
    margin-left: 80px;
    margin-top: 80px; 
}

@media (max-width: 500px) {
    .footer-qr__img {
        width: 100px;
        height: 100px;
        margin-left: 50px;
        margin-top: 50px;
    }
}

section {
    position: relative;
    width: 100%;
    height: 50vh;
    background: url("../assets/img/footer.jpg");
    background-size: cover;
}

section .wave {
    position: absolute;
    width: 100%;
    height: 143px;
    bottom: 0;
    left: 0;
    background: url("../assets/img/wave.png");
    opacity: 0.6;
    animation: animate 10s linear infinite;
}

section .wave::before {
    content: '';
    width: 100%;
    height: 143px;
    background: url("../assets/img/wave-3.png");
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.6;
    animation: animate-reverse 10s linear infinite;
}

section .wave::after {
    content: '';
    width: 100%;
    height: 143px;
    background: url("../assets/img/wave.png");
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
    animation-delay: -5s;
    animation: animate 20s linear infinite;
}


@keyframes animate {
    0% {
        background-position: 0;
    }
    100% 
    {
        background-position: 1360px;
    }
}

@keyframes animate-reverse {
    0% {
        background-position: 1360px;
    }
    100% 
    {
        background-position: 0;
    }
}
</style>
