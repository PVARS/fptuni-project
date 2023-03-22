<template>
  <div id="navbar" class="navbar-content">
    <div class="navbar">
      <div class="nav__pc">
        <ul class="header-avatar">
          <li class="header-avatar-icon">
            <a href="/">
              <img
              class="header-avatar-image"
              src="../assets/img/Artboard4.png"
              alt="avatar"
            /></a>
          </li>
        </ul>
        
        <ul class="nav__list">
          <li class="nav__link">
            <a href="/">Trang chủ</a>
          </li>
          <li class="nav__link"><a href="#aboutus">Về chúng tôi</a></li>
          <li class="nav__link dropdown">
            <button class="dropbtn">Dịch vụ</button>
            <div class="dropdown-content">
            <a href="#service-content">Thiết kế nội thất 3D</a>
            <a href="#service-content">Thiết kế bộ nhận diện thương hiệu</a>
            <a href="#service-content">Thiết kế NFT Avatar</a>
            </div>
          </li>
          <li class="nav__link"><a href="#Project">Đối tác</a></li>
          <li class="nav__link"><a href="#team">Tin tức và sự kiện</a></li>
          <li class="nav__link"><a href="#island">FAQ</a></li>
          <li class="nav__link"><a href="#memory">Liên hệ</a></li>
          <!-- <li class="nav__link"><a href="#suggestion">Suggestion</a></li>
          <li class="nav__link"><a href="#lovemailbox">Love mailbox</a></li> -->
          <!-- <li v-if="!user" class="nav__link">
            <button class="btn-login__pc" @click="login">Login</button>
          </li>
          <li v-else class="nav__link">
            <button class="btn-login__pc" @click="logout">Logout</button>
          </li>
           <li class="nav__link"><a href="/danang">DaNang </a><span style="color: #fff">|</span><a href="/hcm"> HCM</a></li> -->
        </ul>
      </div>
      <div>
        <label for="nav-mobile-input" class="nav__bars-btn">
          <img
            class="header-avatar-logo"
            src="../assets/img/Artboard4.png"
          />
          <div class="nav-mobile__icon">
            <div class="menu-toggle">
              <span></span> <span></span> <span></span>
            </div>
          </div>
        </label>
        <input id="nav-mobile-input" type="checkbox" class="nav__input" />
        <label for="nav-mobile-input" class="nav__overlay"></label>
        <div class="nav__mobile">
          <label
            ref="navMobileClose"
            for="nav-mobile-input"
            class="nav__mobile-close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                fill="white"
              />
            </svg>
          </label>
          <ul class="nav__mobile-list">
            <li class="nav__link-mobile" @click="hideNav">
              <a href="#home">Trang chủ</a>
            </li>
            <li class="nav__link-mobile" @click="hideNav">
              <a href="#countdown">Về chúng tôi</a>
            </li>
            <li class="nav__link-mobile" @click="hideNav">
              <a href="#schedulecpn">Dịch vụ</a>
            </li>
            <li class="nav__link-mobile" @click="hideNav">
              <a href="#project">Đối tác</a>
            </li>
            <li class="nav__link-mobile" @click="hideNav">
              <a href="#team">Tin tức và sự kiện</a>
            </li>
            <li class="nav__link-mobile" @click="hideNav">
              <a href="#island">FAQ</a>
            </li>
            <li class="nav__link-mobile" @click="hideNav">
              <a href="#memory">Liên hệ</a>
            </li>
            <!-- <li class="nav__link-mobile" @click="hideNav">
              <a href="#suggestion">Suggestion</a>
            </li>
            <li class="nav__link-mobile" @click="hideNav">
              <a href="#lovemailbox">Love mailbox</a>
            </li> -->
            <!-- <li v-if="!user" class="nav__link-mobile" @click="hideNav">
              <button class="btn-login__mobile" @click="login">Login</button>
            </li>
            <li v-else class="nav__link-mobile" @click="hideNav">
              <button class="btn-login__mobile" @click="logout">Logout</button>
            </li> -->
          </ul>
           <!-- <li class="nav__link-mobile-switch">
              <a href="/danang" @click="hideNav">DaNang </a><span style="color: #fff">|</span
              ><a href="/hcm" @click="hideNav"> HCM</a>
          </li> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth: false,
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    user() {
      return this.$auth.user
    },
  },
  methods: {
    login() {
      this.$auth.loginWith('google', { params: { prompt: 'select_account' } })
    },
    async logout() {
      await this.$auth.logout()
      // alert('Logout successful')
    },
    hideNav() {
      this.$refs.navMobileClose.click()
    },
  },
}
</script>

<style scoped lang="scss">
.dropbtn {
  background-color: #00a668;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #00a668;
  min-width: 280px;
  z-index: 1;
}

.dropdown-content a {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: white; color: #333;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #00a668;
}

.dropdown-item:hover {
  color: #00a668 !important;
}

.nav__link-mobile-switch {
  display: flex;
  justify-content: center;
}

.nav__link-mobile-switch  a{
  color: #fff;
}

.nav__link-mobile-switch span {
  margin:0 20px;
}

.nav-mobile__icon {
  display: block;
  margin-top: 12vh;
  cursor: pointer;
}

.navbar-content {
  display: flex;
  justify-content: center;
}

#navbar {
  position: sticky;
  top: 0;
  z-index: 9;
}

.navbar {
  background: #00a668;
  position: fixed;
  top: 40px;
  width: 74vw;
  min-height: 6.8vh;
  font-size: 16px;
  z-index: 100;
  border-radius: 50px;
  animation: navPCMoveBottom 1s;
}

.btn-login__pc {
  background: #00a668;
  color: #fff;
  border-radius: 20px;
  width: 5vw;
  border-color: #fff;
}

.btn-login__pc:hover {
  background: #fff;
  color: #00a668;
  border-radius: 20px;
  width: 5vw;
  border-color: rgba(255, 255, 255, 0.01);
}

.skite {
  background: #00a668;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  min-height: 6.8vh;
  font-size: 16px;
  border-radius: 0;
  transition: all 0.3s ease 0s;
  -webkit-transition: all 0.3s ease 0s;
}

.skite .header-avatar-image {
  width: auto;
  height: 30px;
  margin-top: 20px;
  filter: brightness(6);
}

.nav__pc {
  align-items: center;
  display: flex;
  background: #00a668;
  justify-content: center;
}

.header-avatar {
  list-style: none;
}

.menu-toggle span:nth-child(2)::before {
  content: '';
  border-width: 20px 30px;
  border-style: solid;
  border-color: transparent transparent rgba(0, 0, 0, 0) transparent;
  position: absolute;
  left: 0px;
  top: -10px;
}
.menu-toggle span:nth-child(1) {
  top: 22px;
}
.menu-toggle span:nth-child(2) {
  top: 32px;
}
.menu-toggle span:nth-child(3) {
  top: 42px;
}

.menu-toggle span {
  position: absolute;
  width: 30px;
  height: 2.6px;
  background-color: #fff;
  right: 6%;
  transition: all 0.3s ease-in-out 0s;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  -ms-transition: all 0.3s ease-in-out 0s;
  -o-transition: all 0.3s ease-in-out 0s;
}
.nav__list {
  display: flex;
  list-style: none;
  margin-bottom: 0;
  align-items: center;
  padding-left: 0;
  justify-content: center;
  margin-left: 4vw;
}

.header-avatar-image {
  width: auto;
  height: 30px;
  margin-top: 10px;
  filter: brightness(6);
}

.header-avatar-logo {
  width: auto;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
  filter: brightness(6);
}
.nav__link {
  text-decoration: none;
  margin-right: 42px;
}
.nav__link a {
  color: #fff;
}
.nav__link a:hover {
  // color: #1977f2;
  text-decoration: none;
}
.nav__bars-btn {
  display: flex;
  justify-content: space-around;
  display: none;
}
.nav__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  animation: fadeIn linear 0.3s;
}

.nav__mobile {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 320px;
  z-index: 1000;
  background-color: #00a668;
  transform-origin: 0 0;
  transform: scale(1, 0);
  opacity: 0;
  transition: width 2s linear 2s;
}

.nav__mobile-list {
  margin-top: 40px;
  padding: 0;
}

.nav__mobile-link {
  text-decoration: none;
  color: #333;
  display: block;
  font-size: 1.4rem;
}
.nav__link-mobile {
  margin-top: 30px;
}

li {
  list-style: none !important;
  text-decoration: none;
}

.nav__mobile-list li a {
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.nav__mobile-list li a {
  align-items: center;
}

.nav__link-mobile a {
  color: #fff;
  transition: 0.3s;
  width: 320px !important;
  display: flex;
  margin-left: 20px;
}

.nav__link-mobile a:hover {
  color: #0056b3;
  cursor: pointer;
  text-decoration: none;
}
.nav__mobile-close {
  width: 20px;
  height: 20px;
  color: #666;
  position: absolute;
  top: 0.4rem;
  right: 1rem;
}

.btn-login__mobile {
  width: 320px;
  background: #00a668;
  color: #fff;
  border-radius: 20px;
  border-color: #fff;
}

.btn-login__mobile:hover {
  width: 320px;
  background: #fff;
  color: #00a668;
  border-radius: 20px;
  border-color: rgba(255, 255, 255, 0.01);
}

.nav__input {
  display: none;
}
.nav__input:checked ~ .nav__overlay {
  display: block;
}

.nav__input:checked ~ .nav__mobile {
  transform: translateX(0);
  opacity: 1;
}

.nav__list {
  display: flex;
  list-style: none;
  margin-bottom: 0;
  align-items: center;
  padding-left: 0;
  justify-content: center;
  margin-left: 6vw;
}

@media (min-width: 1760px) and (max-width: 1880px) {
  .nav__bars-btn {
    display: none;
  }
  .navbar {
    top: 20px;
    width: 80vw;
    height: 68px;
  }

  .skite {
    max-height: 6.6vh;
    font-size: 16px;
  }
}

@media (min-width: 1650px) and (max-width: 1760px) {
  .nav__bars-btn {
    display: none;
  }
  .navbar {
    top: 20px;
    width: 84vw;
    height: 68px;
  }

  .skite {
    max-height: 6.6vh;
    font-size: 16px;
  }
}

@media (min-width: 1460px) and (max-width: 1650px) {
  .nav__bars-btn {
    display: none;
  }
  .navbar {
    top: 20px;
    width: 86vw;
    height: 68px;
  }
  .skite {
    max-height: 6.6vh;
    font-size: 16px;
  }
}

@media (min-width: 1350px) and(max-width: 1460px) {
  .nav__bars-btn {
    display: none;
  }
  .navbar {
    top: 20px;
    width: 90vw;
    height: 68px;
  }
  .nav__link {
    text-decoration: none;
    margin-right: 30px;
  }
  .skite {
    max-height: 6.6vh;
    font-size: 16px;
  }
}

@media (min-width: 1190px) and(max-width: 1350px) {
  .nav__bars-btn {
    display: none;
  }
  .navbar {
    top: 20px;
    width: 94vw;
    height: 68px;
  }
  .nav__link {
    text-decoration: none;
    margin-right: 20px;
  }
  .skite {
    max-height: 6.6vh;
    font-size: 16px;
  }
}

@media (max-width: 1190px) {
  .nav__bars-btn {
    display: block;
  }
  .nav__pc {
    display: none;
  }

  .navbar {
    position: fixed;
    top: 20px;
    width: 80vw;
    height: 60px;
  }
  .skite {
    height: 60px;
    font-size: 16px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes navPCMoveTop {
  from {
    top: 40px;
  }
  to {
    top: 0;
  }
}

@keyframes navPCMoveBottom {
  from {
    top: 0;
  }
  to {
    top: 40px;
  }
}

@keyframes navMobiMoveRight {
  from {
    right: 0;
  }
  to {
    right: 320px;
  }
}
</style>
