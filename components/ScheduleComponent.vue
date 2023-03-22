<template>
  <div id="schedulecpn" class="content-schedule__border">
    <div class="content-schedule">
      <div class="content-schedule__header">
        SỨ MỆNH - TẦM NHÌN - GIÁ TRỊ CỐT LÕI
      </div>
      <div class="content-schedule__list">
          <img src="../assets/img/banner1.jpg" alt="" width="1000px">
        <!-- <div class="content-schedule__item">
          
          <a
            data-fancybox="schedule"
            class="fancybox"
            data-caption="Day 1"
            href="https://powerup.bap.jp/_nuxt/img/schedule-1.83f0bb2.jpg"
          >
            <img
              class="content-schedule__item-img"
              src="~/assets/img/schedule-1.jpg"
            />
          </a>
        </div>
        <div class="content-schedule__item">
          <a
            data-fancybox="schedule"
            class="fancybox"
            data-caption="Day 2"
            href="https://powerup.bap.jp/_nuxt/img/schedule-2.517b2c2.jpg"
          >
            <img
              class="content-schedule__item-img"
              src="~/assets/img/schedule-2.jpg"
            />
          </a>
        </div>
        <div class="content-schedule__item">
          <a
            data-fancybox="schedule"
            class="fancybox"
            data-caption="Day 3"
            href="https://powerup.bap.jp/_nuxt/img/schedule-3.c8f3f0a.jpg"
          >
            <img
              class="content-schedule__item-img"
              src="~/assets/img/schedule-3.jpg"
            />
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleComponent',
}
</script>

<style scoped lang="scss">
.content-schedule__border {
  margin: 80px;
}

.content-schedule {
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  // border: 2px solid #00a668;
}

.content-schedule__header {
  text-align: center;
  color: #00a668;
  font-family: 'tahoma';
  font-size: 4rem !important;
}

.content-schedule__list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap !important;
  margin: 10vh;
}

.content-schedule__item {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  transition: 0.3s;
  border-radius: 20px;
}

.content-schedule__item:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transition-duration: 0.3s;
  cursor: pointer;
}

.content-schedule__item-img {
  width: 440px;
  height: 420px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transition-duration: 0.3s;
  cursor: pointer;
}

@media (max-width: 1766px) {
  .content-schedule__item {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    transition: 0.3s;
    border-radius: 20px;
    margin-top: 10vh;
  }
}

@media (max-width: 620px) {
  .content-schedule__item {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    transition: 0.3s;
    border-radius: 20px;
    margin-top: 6vh;
  }

  .content-schedule__item-img {
    width: 80vw;
    height: 40vh;
  }
}

@media (max-width: 500px) {
  .content-schedule__header {
    font-size: 2.8rem !important;
  }
  .content-schedule__list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap !important;
    margin: 2vh;
  }
  .content-schedule__item {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    transition: 0.3s;
    border-radius: 20px;
    margin-top: 6vh;
  }
  .content-schedule__border {
    margin: 10px;
  }

  .content-schedule__item-img {
    width: 80vw;
    height: 40vh;
  }
}
</style>
