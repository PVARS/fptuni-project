<template>
  <div id="memory" class="memory">
    <p class="content-play__header text-center" style="font-weight: bold;">
      ĐỐI TÁC
    </p>
    <b-row>
      <b-col>
        <b-img src="../assets/img/1-1.png" class="content_img_icon_road " />
      </b-col>
      <b-col>
        <b-img src="../assets/img/2-2.png" class="content_img_icon_road" />
      </b-col>
      <b-col>
        <b-img src="../assets/img/3-3.png" class="content_img_icon_road" />
      </b-col>
      <b-col>
        <b-img src="../assets/img/4.png" class="content_img_icon_road" />
      </b-col>
      <b-col>
        <b-img src="../assets/img/5.png" class="content_img_icon_road" />
      </b-col>
      
    </b-row>
    <b-row>
     
      <b-col>
        <b-img src="../assets/img/6.png" class="content_img_icon_road" />
      </b-col>
      <b-col>
        <b-img src="../assets/img/7.png" class="content_img_icon_road" />
      </b-col>
      <b-col>
        <b-img src="../assets/img/8.png" class="content_img_icon_road" />
      </b-col>
      <b-col>
       
        <b-img src="../assets/img/9.png" class="content_img_icon_road" />
      </b-col>
      <b-col>
        <b-img src="../assets/img/10.png" class="content_img_icon_road" />
      </b-col>
    </b-row>
    
  </div>

</template>

<script>
export default {
  name: 'IntroductionComponent',
  data() {
    return {
      partner: ['']
    }
  },
   computed: {
        user() {
        return this.$auth.user
        }
     }
}
</script>

<style lang="css" scoped>
.hotel {
  background-color: #00a668;
  padding: 2%;
}
.font-folk {
  font-size: 4vw !important;
  color: white;
  font-family: 'rocker';
}

.header-title {
  margin-top: 4vh;
}

.content-play__header {
  font-size: 4vw !important;
  color: rgb(8, 7, 6);
  font-family: 'tahoma';
  padding-top: 50px;
}
.name-hotel {
  border-left: 3px solid white;
  margin-bottom: 3%;
}
.name-hotel .text {
  border-bottom: 2px solid white;
  font-size: 1.2vw;
  font-family: 'rocker';
  color: white;
}
.name-hotel .text.h4 {
  margin-top: 10%;
}

.slide-hotel {
  margin: 2%;
}
.d-block {
  border: 1px solid #006dd1;
}
.content-play__header {
  font-size: 4vw !important;
  color: #379237;
  font-family: 'tahoma';
}
.memory {
  padding: 5%;
  padding-top: 50px;
}

.img-page-img {
  width: 100%;
  height: 230px;
  margin: 2%;
}

.comingsoon {
  width: 10%;
  height: 15%;
}

.row {
  margin-top: 2%;
}

@media (max-width: 700px) {
  .content-play__header {
    font-size: 2rem !important;
  }

  .img-page-img {
    width: 100%;
    height: 180px;
    margin: 2%;
  }
  .comming {
    font-size: 0.8rem;
  }
  .comingsoon {
    width: 20%;
    height: 25%;
  }
}

@media (min-width: 600px) and (max-width: 750px) {
  .content-play__header {
    font-size: 3rem !important;
  }

  .img-page-img {
    width: 100%;
    height: 100px;
    margin: 1%;
  }
  .comming {
    font-size: 0.8rem;
  }
}
@media (min-width: 750px) and (max-width: 1000px) {
  .content-play__header {
    font-size: 3.5rem !important;
  }

  .img-page-img {
    width: 100%;
    height: 120px;
    margin: 1%;
  }
  .comming {
    font-size: 0.8rem;
  }
}

.tab-main section {
  display: none;
  padding: 4em 0 2em 0;
  border-top: 1px solid #ddd;
}


.tab-main input {
  display: none;

}

.tab-main label {
  display: inline-block;
  margin: 0 0 0px;
  padding: 15px 60px;
  font-weight: 600;
  text-align: center;
  color: #9090a0;
  border: none;
  background: #eff0f1;
  text-transform: uppercase;
  font-size: 0.9em;
  margin-top: 10px;
}

.tab-main span {
  margin-right: 0.5em;
}

.tab-main label:hover {
  color: #00a668;
  cursor: pointer;
}

.tab-main input:checked + label {
  background: #00a668;
  color: white;
}

.tab-main #tab1:checked ~ #content1,
.tab-main #tab2:checked ~ #content2,
.tab-main #tab3:checked ~ #content3,
.tab-main #tab4:checked ~ #content4 {
  display: block;
}

@media (max-width: 500px) {
  .tab-main label { 
    margin-top: 5px;
    width: 100%;
  }
}
</style>
