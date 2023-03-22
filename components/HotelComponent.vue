<template>
  <div id="island" class="suggest" >
    <div class="suggest-header">ĐỘI NGŨ CHÚNG TÔI</div>
    <div class="suggest-content">
      <div class="box">
        <span style="--i: 1">
          <a
            data-fancybox="suggest"
            class="fancybox"
            data-caption="INFINITY SWIMMING POOL"
            href="https://bap-forum.s3.ap-southeast-1.amazonaws.com/1.png"
          >
            <img src="../assets/img/myteam1.png" />
          </a>
        </span>
        <span style="--i: 2">
          <a
            data-fancybox="suggest"
            class="fancybox"
            data-caption="ANYA PREMIER HOTEL "
            href="https://bap-forum.s3.ap-southeast-1.amazonaws.com/2.png"
          >
            <img src="../assets/img/myteam2.png" />
          </a>
        </span>
        <span style="--i: 3">
          <a
            data-fancybox="suggest"
            class="fancybox"
            data-caption="ACCOMODATION"
            href="https://bap-forum.s3.ap-southeast-1.amazonaws.com/3.png"
          >
            <img src="../assets/img/myteam3.png" />
          </a>
        </span>
        <span style="--i: 4">
          <a
            data-fancybox="suggest"
            class="fancybox"
            data-caption="MARKET 1 RESTAURANT"
            href="https://bap-forum.s3.ap-southeast-1.amazonaws.com/4.png"
          >
            <img src="../assets/img/myteam4.png" />
          </a>    
        </span>
        <span style="--i: 5">
          <a
            data-fancybox="suggest"
            class="fancybox"
            data-caption="SEAFOOD QUY NHON RESTAURANT"
            href="https://bap-forum.s3.ap-southeast-1.amazonaws.com/5.png"
          >
            <img src="../assets/img/myteam5.png" />
          </a>
        </span>
        <span style="--i: 6">
          <a
            data-fancybox="suggest"
            class="fancybox"
            data-caption="CHEER PUB"
            href="https://bap-forum.s3.ap-southeast-1.amazonaws.com/6.png"
          >
            <img src="../assets/img/myteam6.png" />
          </a>
        </span>
        <span style="--i: 7">
          <a
            data-fancybox="suggest"
            class="fancybox"
            data-caption="STARLIGHT BAR"
            href="https://bap-forum.s3.ap-southeast-1.amazonaws.com/7.png"
          >
            <img src="../assets/img/myteam7.png" />
          </a>
        </span>

        <span style="--i: 8">
          <a
            data-fancybox="suggest"
            class="fancybox"
            data-caption="STARLIGHT BAR"
            href="https://bap-forum.s3.ap-southeast-1.amazonaws.com/7.png"
          >
            <img src="../assets/img/myteam7.png" />
          </a>
        </span>
      </div>
    </div>
    <!-- <div class="img-test">
        <img src="../assets/img/hotel_01_detail.png">
        <img src="../assets/img/hotel_02_detail.png">
        <img src="../assets/img/hotel_03_detail.png">
        <img src="../assets/img/hotel_04_detail.png">
        <img src="../assets/img/hotel_05_detail.png">
        <img src="../assets/img/hotel_06_detail.png">
        <img src="../assets/img/hotel_07_detail.png">
        <img src="../assets/img/hotel_08_detail.png">
    </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.img-test {
    display: none;
}

.suggest {
  background: #00a668;
}

.suggest-header {
  font-size: 60px;
  color: white;
  font-family: 'tahoma';
  text-align: center;
  background: #00a668;
  padding-top: 40px;
}

.suggest-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

.box {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: animate 40s linear infinite;
}

@keyframes animate {
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
}

.box span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i) * 45deg)) translateZ(400px);
  -webkit-box-reflect: below 0px
    linear-gradient(transparent, transparent, #0004);
}

.box span img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
