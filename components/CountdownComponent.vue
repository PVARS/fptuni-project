<template>
  <div id="aboutus" class="countdown-timer">
    <br />
    <br />
    <h1 class="countdown-title" style="text-align: center; font-weight: bold">VỀ CHÚNG TÔI</h1>
    
    <!-- <flip-countdown deadline="08/13/2022 05:00:00"></flip-countdown> -->

    <div>
      <p style="color: white; font-size: 1.2rem;">Công ty TNHH Thiết kế Future Studio (FS) được thành lập trên niềm Đam mê mạnh mẽ “Mang đến cho khách hàng những cảm xúc mạnh mẽ nhất và những chuyến phiêu lưu mở mang tầm mắt”, hướng tới mục tiêu nâng cao chất lượng cuộc sống và mang lại nguồn năng lượng tích cực cho con người.</p>
      <p style="color: white; font-size: 1.2rem;">Future Studio tự hào là một đơn vị thiết kế tận tâm và sáng tạo. Đội ngũ thiết kế hơn 3 năm kinh nghiệm, mang đến cho Khách hàng những Giải pháp Thiết kế “Thông minh – Cá tính – Tinh tế”.</p>
      <p style="color: white; font-size: 1.2rem;">Với trang thiết bị hiện đại cùng đội ngũ Nhân công lành nghề, Future Studio đã khẳng định Năng lực và Uy tín với hơn nhiều dự án thiết kế nội thất (Nhà ở, Chung cư, Biệt thự, Nhà hàng…), thiết kế nhận diện thương hiệu (Logo, Poster, Mascot, Brochure…) với các khách hàng trong và ngoài nước. </p>
    </div>
    <br />
  </div>
</template>

<script>
// import FlipCountdown from 'vue2-flip-countdown'

export default {
  components: {
    // FlipCountdown,
  },
}
</script>

<style lang="scss">
.countdown-timer {
  text-align: left;
  background-color: #379237;
  padding: 50px 200px 50px;
  transition: transform linear 0.2s , opacity linear 0.3s;
}

.countdown-timer h1 {
  font-size: 3.9rem;
  font-family: 'tahoma';
  color: #ffffff;
  padding: 0 0 24px 0;
}

.flip-clock__slot {
  color: #fff;
  font-family: 'rocker';
  font-size: 22px !important;
}

.flip-card__top {
  color: #fff !important;
}

.flip-card__bottom {
  color: #fff !important;
  position: absolute;
  top: 50%;
  left: 0;
  border-top: solid 1px #000;
  background: #393939;
  border-radius: 0 0 0.15em 0.15em;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;
}

.flip-card__back-bottom {
  color: #fff !important;
}

.flip-card__back {
  color: #fff !important;
}

@media (max-width: 500px) {
  .countdown-title {
    font-size: 4 rem !important;
  }
}
</style>
