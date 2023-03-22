<template>
  <section id="lovemailbox" class="contact py-5">
    <!-- mail -->
    <!-- <div class="container"> -->
    <!-- <img :src="user.picture" alt="" />
      <p>{{ user.name }}</p>
    </div> -->

    <!-- <button class="logout" @click="login">Login with Google</button> -->
    <!-- <button class="logout" @click="logout">Logout with Google</button> -->

    <div class="container py-md-5">
      <h3 class="heading text-center mb-3 mb-sm-5">LIÊN HỆ</h3>
      <div class="contact-grids mt-5">
        <div class="row">
          <div class="col-lg-6 col-md-6 contact-left-form">
            <form
              action="https://formsubmit.co/a0eff5abecba3cd7ab60e77fbd3b7b92"
              method="post"
            >
              <input type="hidden" name="_captcha" value="false" />
              <div class="form-group contact-forms">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Họ và tên"
                  name="name"
                  required=""
                />
              </div>
              <div class="form-group contact-forms">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Số điện thoại"
                  name="name"
                  required=""
                />
              </div>
              <div class="form-group contact-forms">
                <textarea
                  class="form-control"
                  placeholder="Nội dung"
                  rows="3"
                  name="desc"
                  required=""
                ></textarea>
              </div>
              <button class="btn btn-block sent-butnn">Gửi</button>
              
            </form>
          </div>
          <div class="col-lg-6 col-md-6 contact-right pl-lg-5">
            <img
              src="~/assets/img/team.jpg"
              class="img-fluid"
              alt="user-image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactBap',
  // middleware: 'auth',
  // computed: {
  //   user() {
  //     return this.$auth.user
  //   },
  // },
  // methods: {
  //   login() {
  //     this.$auth.loginWith('google', { params: { prompt: 'select_account' } })
  //   },
  // },
}
</script>

<style scoped lang="css">
/* contact */
@font-face {
  src: url(../assets/font/Itim-Regular.ttf);
  font-family: itim;
}

@font-face {
  src: url(../assets/font/alura.ttf);
  font-family: alura;
}

@font-face {
  src: url(../assets/font/Beef3.ttf);
  font-family: back;
}

@font-face {
  src: url(../assets/font/eula.ttf);
  font-family: eula;
}

/* @font-face {
  src: url(../assets/font/LetterPress_Condensed.ttf);
  font-family: condense;
}

@font-face {
  src: url(../assets/font/Letterpress_Gothic_0.ttf);
  font-family: gothic;
}

@font-face {
  src: url(../assets/font/Letterpress_Wood.ttf);
  font-family: wood;
} */

@font-face {
  src: url(../assets/font/Tapestry-Regular.ttf);
  font-family: tap;
}

@font-face {
  src: url(../assets/font/TAHOMAB0.ttf);
  font-family: tahoma;
}

.heading {
  font-size: 3.8em;
  font-family: 'tahoma';
  color: #00a668;
}

/* @media (max-width: 500px) {
  font-size: 2.8em !important;
} */

.adress-w3pvt-info p {
  font-size: 0.7em;
}
.adress-w3pvt-info h6 {
  font-size: 1em;
  color: #00a668;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 1em 0;
  text-transform: capitalize;
}

.adress-w3pvt-info a {
  color: #777;
  letter-spacing: 1px;
}

.adress-icon span.fa {
  color: #006dd1;
  font-size: 1.4em;
  vertical-align: middle;
}

.contact-forms input,
.contact-forms textarea,
.contact-forms select {
  font-size: 15px;
  color: #000;
  padding: 1em 1em;
  background: #f6f6f6;
  outline: none;
  border: none;
  font-family: 'itim';
  letter-spacing: 1px;
  border-radius: 0px;
  outline: none !important;
}

.contact-forms select {
  padding: 0em 1em;
  height: 50px !important;
  color: #777;
}

button.sent-butnn {
  font-size: 18px;
  text-decoration: none;
  text-transform: capitalize;
  display: inline-block;
  font-family: 'itim';
  letter-spacing: 2px;
  outline: none;
  color: #fff;
  background: #006dd1;
  border-radius: 0px;
  padding: 10px 20px;
}

.contact-left-form {
  justify-content: center;
  padding: 1em;
  /* background-color: rgb(227, 249, 255); */
  vertical-align: middle;
}

.contact-right h4 {
  font-size: 30px;
  text-transform: capitalize;
  letter-spacing: 1px;
  line-height: 40px;
  font-weight: 600;
  margin-top: 1em;
}

.contact-right h5 {
  font-size: 25px;
  letter-spacing: 1px;
  font-weight: 600;
}
</style>
