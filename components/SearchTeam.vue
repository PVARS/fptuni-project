<template>
  <div id="services" class="team-container">
    <div class="ranking" id="service-content" style="padding: 0 100px 0 100px;">
      <p class="slogan-title__header">DỊCH VỤ</p>
      <div class="card" style="border: unset;">
        <div class="card-body" style="margin: 0 auto; float: none; margin-bottom: 10px;">
          <div class="row">
            <div class="card mb-5" style="width: 18rem; margin-left: 70px;">
              <img class="card-img-top" src="../assets/img/service1.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Thiết kế nội thất 3D</h5>
                <p class="card-text" style="text-align: justify;">Chúng tôi cung cấp những dịch vụ thiết kế nhà ở, phòng ốc, nhà hàng, khách sạn, văn phòng với mọi phong cách, màu sắc và tầm giá.</p>
                <!-- <a href="#" class="btn" style="background-color: #00a668; color: white;">Chi tiết</a> -->
              </div>
            </div>

            <div class="card mb-5" style="width: 18rem; margin-left: 70px;">
              <img class="card-img-top" src="../assets/img/service2.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Thiết kế bộ nhận diện thương hiệu</h5>
                <p class="card-text" style="text-align: justify;">Chúng tôi cung cấp bộ nhận diện từ logo, linh vật, poster, card visit,... nhằm tăng sự ấn tượng của khách hàng với sản phẩm.</p>
                <!-- <a href="#" class="btn" style="background-color: #00a668; color: white;">Chi tiết</a> -->
              </div>
            </div>

            <div class="card mb-5" style="width: 18rem; margin-left: 70px;">
              <img class="card-img-top" src="../assets/img/service3.jpg" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">Thiết kế NFT Avatar</h5>
                <p class="card-text" style="text-align: justify;">Xây dựng một bộ thiết kế NFT Avatar độc nhất, giúp bạn có thể sử dụng cho nhiều mục đích các nhân với sự khác biệt.</p>
                <!-- <a href="#" class="btn" style="background-color: #00a668; color: white;">Chi tiết</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <b-row style="text-align: bottom">
        <b-col>
          <div v-if="currentDateTime() >= 1" class="md-step-title">
            <i
              v-if="currentDateTime() == 1"
              class="fa fa-long-arrow-right arrow4"
              aria-hidden="true"
            ></i
            ><br />
            <b><span class="team-font">Lên thuyền</span></b>
          </div>
          <div v-else class="md-step-title" style="color: gray">
            <br />
            <span class="team-font">Lên thuyền</span>
          </div>
          <b-img src="../assets/img/start.gif" class="content_img_icon_road" />
        </b-col>

        <b-col>
          <div v-if="currentDateTime() >= 2" class="md-step-title">
            <i
              v-if="currentDateTime() == 2"
              class="fa fa-long-arrow-right arrow4"
              aria-hidden="true"
            ></i
            ><br />
            <b><span class="team-font">Sóng gió 1</span></b>
          </div>
          <div v-else class="md-step-title" style="color: gray">
            <br />
            <span class="team-font">Sóng gió 1</span>
          </div>
          <b-img
            src="../assets/img/roading1.gif"
            class="content_img_icon_road"
          />
        </b-col>
        <b-col
          ><div v-if="currentDateTime() >= 3" class="md-step-title">
            <i
              v-if="currentDateTime() == 3"
              class="fa fa-long-arrow-right arrow4"
              aria-hidden="true"
            ></i
            ><br />
            <b><span class="team-font">Sóng gió 2</span></b>
          </div>
          <div v-else class="md-step-title" style="color: gray">
            <br />
            <span class="team-font">Sóng gió 2</span>
          </div>
          <b-img src="../assets/img/roading3.gif" class="content_img_icon_road"
        /></b-col>
        <b-col
          ><div v-if="currentDateTime() >= 4" class="md-step-title">
            <i
              v-if="currentDateTime() == 4"
              class="fa fa-long-arrow-right arrow4"
              aria-hidden="true"
            ></i
            ><br />
            <b><span class="team-font">Sóng gió 3</span></b>
          </div>
          <div v-else class="md-step-title" style="color: gray">
            <br />
            <span class="team-font">Sóng gió 3</span>
          </div>
          <b-img
            src="../assets/img/roading2.gif"
            class="content_img_icon_road"
          />
        </b-col>
        <b-col
          ><div v-if="currentDateTime() >= 5" class="md-step-title">
            <i
              v-if="currentDateTime() == 5"
              class="fa fa-long-arrow-right arrow4"
              aria-hidden="true"
            ></i
            ><br />
            <b><span class="team-font">Sóng gió 4</span></b>
          </div>
          <div v-else class="md-step-title" style="color: gray">
            <br />
            <span class="team-font">Sóng gió 4</span>
          </div>
          <b-img src="../assets/img/roading4.gif" class="content_img_icon_road"
        /></b-col>

        <b-col>
          <div v-if="currentDateTime() >= 6" class="md-step-title">
            <i
              v-if="currentDateTime() == 6"
              class="fa fa-long-arrow-right arrow4"
              aria-hidden="true"
            ></i
            ><br />
            <b><span class="team-font">Kho báu</span></b>
          </div>
          <div v-else class="md-step-title" style="color: gray">
            <br />
            <span class="team-font">Kho báu</span>
          </div>
          <b-img src="../assets/img/piece.gif" class="content_img_icon_road"
        /></b-col>

        <b-img
          src="../assets/img/roading5.gif"
          style="width: 100%; height: 40px"
        />
      </b-row> -->

      <!-- <p class="slogan-title__header">Cuộc đua kỳ thú</p> -->
      <!-- <b-progress v-for="(p, index) in sortedData" :key="index" :max="max">
        <b-progress-bar
          v-if="p.tau == 'Tàu Bloody Morgan'"
          :value="p.score + 100"
        >
          <div class="boat">
            <b-row>
              <b-col>
                <div
                  v-if="p.tau == 'Tàu Bloody Morgan' && p.score > 500"
                  :value="p.score"
                  style="margin-top: 5%; margin-left: 50%"
                >
                  <p class="team-font-rank">{{ p.tau }}</p>
                  <p class="team-font-rank">{{ p.score }}</p>
                </div>
              </b-col>
              <b-col> <img src="~/assets/img/tau4.png" class="tau4" /> </b-col>
            </b-row>
          </div>
        </b-progress-bar>
        <div
          v-if="p.tau == 'Tàu Bloody Morgan' && p.score <= 500"
          :value="p.score + 100"
          style="margin-top: 3%"
        >
          <p class="team-font-rank">{{ p.tau }}</p>
          <p class="team-font-rank">{{ p.score }}</p>
        </div>

        <b-progress-bar
          v-if="p.tau == 'Tàu Black Pearl'"
          :value="p.score + 100"
        >
          <div class="boat">
            <b-row>
              <b-col>
                <div
                  v-if="p.tau == 'Tàu Black Pearl' && p.score > 500"
                  :value="p.score"
                  style="margin-top: 5%; margin-left: 50%"
                >
                  <p class="team-font-rank">{{ p.tau }}</p>
                  <p class="team-font-rank">{{ p.score }}</p>
                </div>
              </b-col>
              <b-col>
                <img src="~/assets/img/tau2.png" class="tau4" />
              </b-col>
            </b-row>
          </div>
        </b-progress-bar>
        <div
          v-if="p.tau == 'Tàu Black Pearl' && p.score <= 500"
          :value="p.score"
          style="margin-top: 3%"
        >
          <p class="team-font-rank">{{ p.tau }}</p>
          <p class="team-font-rank">{{ p.score }}</p>
        </div>
        <b-progress-bar
          v-if="p.tau == 'Tàu Fancy'"
          :value="p.score + 100"
          show-progress
        >
          <div class="boat">
            <b-row>
              <b-col>
                <div
                  v-if="p.tau == 'Tàu Fancy' && p.score > 500"
                  :value="p.score"
                  style="margin-top: 5%; margin-left: 50%"
                >
                  <p class="team-font-rank">{{ p.tau }}</p>
                  <p class="team-font-rank">{{ p.score }}</p>
                </div>
              </b-col>
              <b-col>
                <img src="~/assets/img/tau3.png" class="tau4" />
              </b-col>
            </b-row>
          </div>
        </b-progress-bar>
        <div
          v-if="p.tau == 'Tàu Fancy' && p.score <= 500"
          :value="p.score"
          style="margin-top: 3%"
        >
          <p class="team-font-rank">{{ p.tau }}</p>
          <p class="team-font-rank">{{ p.score }}</p>
        </div>
        <b-progress-bar
          v-if="p.tau == 'Tàu Royal Fortune'"
          :value="p.score + 100"
        >
          <div class="boat">
            <b-row>
              <b-col>
                <div
                  v-if="p.tau == 'Tàu Royal Fortune' && p.score > 500"
                  :value="p.score"
                  style="margin-top: 5%; margin-left: 40%"
                >
                  <p class="team-font-rank">{{ p.tau }}</p>
                  <p class="team-font-rank">{{ p.score }}</p>
                </div>
              </b-col>
              <b-col>
                <img src="~/assets/img/tau5.png" class="tau4" />
              </b-col>
            </b-row>
          </div>
        </b-progress-bar>
        <div
          v-if="p.tau == 'Tàu Royal Fortune' && p.score <= 500"
          :value="p.score"
          style="margin-top: 3%"
        >
          <p class="team-font-rank">{{ p.tau }}</p>
          <p class="team-font-rank">{{ p.score }}</p>
        </div>
        <b-progress-bar
          v-if="p.tau == 'Tàu Silent Marry'"
          :value="p.score + 100"
        >
          <div class="boat">
            <b-row>
              <b-col>
                <div
                  v-if="p.tau == 'Tàu Silent Marry' && p.score > 500"
                  :value="p.score"
                  style="margin-top: 5%; margin-left: 50%"
                >
                  <p class="team-font-rank">{{ p.tau }}</p>
                  <p class="team-font-rank">{{ p.score }}</p>
                </div>
              </b-col>
              <b-col>
                <img src="~/assets/img/tau1.png" class="tau4" />
              </b-col>
            </b-row>
          </div>
        </b-progress-bar>
        <div
          v-if="p.tau == 'Tàu Silent Marry' && p.score <= 500"
          :value="p.score + 100"
          style="margin-top: 3%"
        >
          <p class="team-font-rank">{{ p.tau }}</p>
          <p class="team-font-rank">{{ p.score }}</p>
        </div>
        <br />
      </b-progress> -->
    </div>
    <!-- <p class="slogan-title__header">
      Lời nguyền và nỗi khiếp sợ trên đại dương
    </p>
    <br /><br />
    <div class="team-column">
      <b-row>
        <b-col>
          <a id="sepia" class="column">
            <b-img
              v-b-modal.modal-1
              src="../assets/img/team1.png"
              class="content_img"
            />
          </a>
          <div>
            <b-modal
              v-if="user"
              id="modal-1"
              size="lg"
              hide-header
              hide-footer
              scrollable
            >
              <div class="close-modal">
                <b-button variant="outline"
                  ><b-icon
                    icon="x-circle"
                    block
                    @click="$bvModal.hide('modal-1')"
                  ></b-icon
                ></b-button>
              </div>
              <div class="image-container">
                <b-img src="~/assets/img/listteam.js.png" style="width: 30%" />
                <p class="slogan" style="text-align: left">
                  <b
                    class="image-text font-team1 font-text-title"
                    style="font-size: 27px"
                  >
                    Những thủy thủ đoàn của Tàu Bloody Morgan</b
                  >
                </p>
              </div>
              <div v-for="(item, index) in items" :key="index">
                <div v-if="item.tau === 'Tàu Bloody Morgan'">
                  <b-row>
                    <b-col cols="1"></b-col>
                    <b-col>
                      <b
                        ><p v-if="index < 4" class="team-font font-team1">
                          {{ item.chuc }}:
                        </p></b
                      >
                    </b-col>
                    <b-col>
                      <p class="team-font">{{ item.chat }}</p>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-modal>
          </div>
          <h2 class="slogan-item">Bloody Morgan</h2>
        </b-col>
        <b-col>
          <a id="sepia" class="column">
            <b-img
              v-b-modal.modal-2
              src="../assets/img/team4.png"
              class="content_img"
            />
          </a>
          <div>
            <b-modal
              v-if="user"
              id="modal-2"
              size="lg"
              hide-header
              hide-footer
              scrollable
            >
              <div class="close-modal">
                <b-button variant="outline"
                  ><b-icon
                    icon="x-circle"
                    block
                    @click="$bvModal.hide('modal-2')"
                  ></b-icon
                ></b-button>
              </div>
              <div class="image-container">
                <b-img src="~/assets/img/listteam.js.png" style="width: 30%" />
                <p class="slogan">
                  <b
                    class="image-text font-team2 font-text-title"
                    style="font-size: 27px"
                  >
                    Những thủy thủ đoàn của Tàu Black Pearl</b
                  >
                </p>
              </div>
              <div v-for="(item, index) in items" :key="index">
                <div v-if="item.tau === 'Tàu Black Pearl'">
                  <b-row>
                    <b-col cols="1"></b-col>
                    <b-col>
                      <b
                        ><p v-if="index < 34" class="team-font font-team2">
                          {{ item.chuc }}:
                        </p></b
                      >
                      <b
                        ><p
                          v-if="index < 39 && index > 35"
                          class="team-font font-team2"
                        >
                          {{ item.chuc }}:
                        </p></b
                      >
                    </b-col>
                    <b-col>
                      <p class="team-font">{{ item.chat }}</p>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-modal>
          </div>
          <h2 class="slogan-item">Black Pearl</h2>
        </b-col>
        <b-col>
          <a id="sepia" class="column">
            <b-img
              v-b-modal.modal-3
              src="../assets/img/team3.png"
              class="content_img"
            />
          </a>
          <div>
            <b-modal
              v-if="user"
              id="modal-3"
              size="lg"
              hide-header
              hide-footer
              scrollable
            >
              <div class="close-modal">
                <b-button variant="outline"
                  ><b-icon
                    icon="x-circle"
                    block
                    @click="$bvModal.hide('modal-3')"
                  ></b-icon
                ></b-button>
              </div>
              <div class="image-container">
                <b-img src="~/assets/img/listteam.js.png" style="width: 30%" />
                <p class="slogan">
                  <b
                    class="image-text font-team3 font-text-title"
                    style="font-size: 27px"
                    >Những thủy thủ đoàn của Tàu Fancy</b
                  >
                </p>
              </div>
              <div v-for="(item, index) in items" :key="index">
                <div v-if="item.tau === 'Tàu Fancy'">
                  <b-row>
                    <b-col cols="1"></b-col>
                    <b-col>
                      <b
                        ><p v-if="index < 72" class="team-font font-team3">
                          {{ item.chuc }}:
                        </p></b
                      >
                    </b-col>
                    <b-col>
                      <p class="team-font">{{ item.chat }}</p>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-modal>
          </div>
          <h2 class="slogan-item">Fancy</h2>
        </b-col>
        <b-col>
          <a id="sepia" class="column">
            <b-img
              v-b-modal.modal-4
              src="../assets/img/team2.png"
              class="content_img"
            />
          </a>
          <div>
            <b-modal
              v-if="user"
              id="modal-4"
              size="lg"
              hide-header
              hide-footer
              scrollable
            >
              <div class="close-modal">
                <b-button variant="outline"
                  ><b-icon
                    icon="x-circle"
                    block
                    @click="$bvModal.hide('modal-4')"
                  ></b-icon
                ></b-button>
              </div>
              <div class="image-container">
                <b-img src="~/assets/img/listteam.js.png" style="width: 30%" />
                <p class="slogan">
                  <b
                    class="image-text font-team4 font-text-title"
                    style="font-size: 27px"
                    >Những thủy thủ đoàn của Tàu Royal Fortune</b
                  >
                </p>
              </div>
              <div v-for="(item, index) in items" :key="index">
                <div v-if="item.tau === 'Tàu Royal Fortune'">
                  <b-row>
                    <b-col cols="1"></b-col>
                    <b-col>
                      <b
                        ><p v-if="index < 101" class="team-font font-team4">
                          {{ item.chuc }}:
                        </p>
                      </b>
                      <b>
                        <p
                          v-if="index < 106 && index > 102"
                          class="team-font font-team4"
                        >
                          {{ item.chuc }}:
                        </p>
                      </b>
                    </b-col>
                    <b-col>
                      <p class="team-font">{{ item.chat }}</p>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-modal>
          </div>
          <h2 class="slogan-item">Royal Fortune</h2>
        </b-col>
        <b-col>
          <a id="sepia" class="column">
            <b-img
              v-b-modal.modal-5
              src="../assets/img/team5.png"
              class="content_img"
            />
          </a>
          <div>
            <b-modal
              v-if="user"
              id="modal-5"
              size="lg"
              hide-header
              hide-footer
              scrollable
            >
              <div class="close-modal">
                <b-button variant="outline"
                  ><b-icon
                    icon="x-circle"
                    block
                    @click="$bvModal.hide('modal-5')"
                  ></b-icon
                ></b-button>
              </div>
              <div class="image-container">
                <b-img src="~/assets/img/listteam.js.png" style="width: 30%" />
                <p class="slogan">
                  <b
                    class="image-text font-team5 font-text-title"
                    style="font-size: 27px"
                    >Những thủy thủ đoàn của Tàu Silent Marry</b
                  >
                </p>
              </div>
              <div v-for="(item, index) in items" :key="index">
                <div v-if="item.tau === 'Tàu Silent Marry'">
                  <b-row>
                    <b-col cols="1"></b-col>
                    <b-col>
                      <b
                        ><p v-if="index < 139" class="team-font font-team5">
                          {{ item.chuc }}:
                        </p></b
                      >
                    </b-col>
                    <b-col>
                      <p class="team-font">{{ item.chat }}</p>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-modal>
          </div>
          <h2 class="slogan-item">Silent Marry</h2>
        </b-col>
      </b-row>
    </div>
    <div class="team-search">
      <p class="slogan font-team6" style="font-size: 50px">
        Mèn đét ơi! Biết đội của mình chưa?
      </p>
      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <b-input-group>
            <b-form-input
              v-model="searchQuery"
              style="color: #00a668"
              placeholder="Nhập chatwork của bạn"
            />

            <b-button
              v-b-modal.modal-search
              variant="outline-info"
              style="margin-left: 1%"
              >Tìm</b-button
            >
          </b-input-group>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
    </div>

    <b-modal
      v-if="user"
      id="modal-search"
      size="lg"
      hide-header
      hide-footer
      scrollable
    >
      <div class="close-modal">
        <b-button variant="outline"
          ><b-icon
            icon="x-circle"
            block
            @click="$bvModal.hide('modal-search')"
          ></b-icon
        ></b-button>
      </div>
      <div v-if="searchQuery != null" style="text-align: center">
        <p class="font-team4 slogan">Legend of Pirates</p>
        <h4 class="team-font" style="text-align: center">
          Ahoy! Chào mừng bạn gia nhập chuyến tàu. Bạn đã sẵn sàng nhập vai
          thành một huyền thoại cướp biển mới?
        </h4>
        <div v-if="searchQuery == ''">
          <b-img src="~/assets/img/welcome.gif" style="width: 40%" />
          <p class="team-font" style="text-align: center">
            Chưa nhập chatwork chưa đúng mà đòi lên tàu hả...?
          </p>
        </div>
        <div v-for="(r, f) in resultQuery" :key="f.id">
          <div v-if="f == 0">
            <div v-if="searchQuery.toLowerCase() == r.chat.toLowerCase()">
              <b-img src="~/assets/img/wel.gif" style="width: 40%" />
              <p v-if="r.tau == 'Tàu Bloody Morgan'" class="slogan">
                <b class="font-team1" style="font-size: 25px">{{ r.tau }}</b>
              </p>
              <p v-if="r.tau == 'Tàu Black Pearl'" class="slogan">
                <b class="font-team2" style="font-size: 25px">{{ r.tau }}</b>
              </p>
              <p v-if="r.tau == 'Tàu Fancy'" class="slogan">
                <b class="font-team3" style="font-size: 25px">{{ r.tau }}</b>
              </p>
              <p v-if="r.tau == 'Tàu Royal Fortune'" class="slogan">
                <b class="font-team4" style="font-size: 25px">{{ r.tau }}</b>
              </p>
              <p v-if="r.tau == 'Tàu Silent Marry'" class="slogan">
                <b class="font-team5" style="font-size: 25px">{{ r.tau }}</b>
              </p>

              <p class="team-font" style="text-align: center">
                <b>{{ r.chat }}</b>
              </p>
              <p class="team-font" style="text-align: center">{{ r.chuc }}</p>
            </div>
            <div v-else>
              <b-img src="~/assets/img/wrong.gif" style="width: 50%" />
              <p class="team-font" style="text-align: center">
                Nhập chatwork chưa đúng mà đòi lên tàu hả...?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-else style="text-align: center">
        <b-img src="~/assets/img/sorry.gif" style="width: 50%" />
        <p class="team-font" style="text-align: center">
          Cậu quên nhập tên kìa...!
        </p>
      </div>
    </b-modal>
    <b-modal
      v-else
      id="modal-search"
      size="lg"
      hide-header
      hide-footer
      scrollable
    >
      <div style="text-align: center">
        <b-img src="~/assets/img/sorry.gif" style="width: 50%" />
        <p class="team-font" style="text-align: center">
          Vui lòng login để tìm đường lên tàu...!
        </p>
      </div>
    </b-modal> -->
  </div>
</template>

<script>
export default {
  name: 'SearchTeam',
  data() {
    return {
      searchQuery: null,
      max: 900,
      items: [
        // Tau 1
        {
          ten: 'Nguyễn Thị Kim Thoa',
          chat: 'ThoaNTK',
          tau: 'Tàu Bloody Morgan',
          chuc: 'BTC',
        },
        {
          ten: 'Trần Phương Nam',
          chat: 'NamTP',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền Trưởng',
        },
        {
          ten: 'Lê Thị Tường Vi',
          chat: 'ViLTT',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền Phó',
        },
        {
          ten: 'Trần Phan Hoài Linh',
          chat: 'LinhTPH',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Thị Anh Thư',
          chat: 'ThuNTA',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trương Thị Mỹ Trinh',
          chat: 'TrinhTTM',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đặng Thị Hoàng Na',
          chat: 'NaDTH',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Hoàng Thị Ý Nhi',
          chat: 'NhiHTY',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Nho Tường Linh',
          chat: 'LinhNNT',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trần Thị Nhi',
          chat: 'NhiTT',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Thị Huyền Trâm',
          chat: 'TramNTH',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Dương Tường Vy',
          chat: 'VyDT',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },

        {
          ten: 'Nguyễn Quốc Trường',
          chat: 'TruongNQ',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đàm Công Thành',
          chat: 'ThanhDC',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Đình Tuyên',
          chat: 'TuyenND',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Văn Công Thái',
          chat: 'ThaiVC',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Cao Khả Minh',
          chat: 'MinhCK',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Toàn',
          chat: 'ToanL',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Văn Sỹ',
          chat: 'SyLV',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Võ Văn Danh',
          chat: 'DanhVV',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Xuân Tuấn',
          chat: 'TuanNX',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trương Công Danh',
          chat: 'DanhTC',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Phan Đại Phước',
          chat: 'PhuocPD',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Phạm Vỏ Phong',
          chat: 'PhongPV',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Ngô Đức Hoàng',
          chat: 'HoangND',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trần Khánh Huy',
          chat: 'HuyTK',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Hoàng Cường',
          chat: 'CuongNH',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Văn Hoàng',
          chat: 'HoangNV',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Phạm Văn Mạnh',
          chat: 'ManhPV',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Tấn Thoại',
          chat: 'ThoaiNT',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Hồ Ngọc Hoàng Minh',
          chat: 'MinhHNH',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Hoàng Ngọc Hân',
          chat: 'HanLHN',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Võ Phi Hải',
          chat: 'HaiVP',
          tau: 'Tàu Bloody Morgan',
          chuc: 'Thuyền viên',
        },

        // Tau 2

        {
          ten: 'Nguyễn Ngọc Bảo Châu',
          chat: 'ChauNNB',
          tau: 'Tàu Black Pearl',
          chuc: 'BTC',
        },
        {
          ten: 'Nguyễn Thị Thảo Vi',
          chat: 'ViNTT',
          tau: 'Tàu Black Pearl',
          chuc: 'BTC',
        },
        {
          ten: 'Trương Thị Hoài Thanh',
          chat: 'ThanhTTH',
          tau: 'Tàu Black Pearl',
          chuc: 'BTC',
        },
        {
          ten: 'Hồ Vĩnh Minh',
          chat: 'MinhHV',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền Trưởng',
        },
        {
          ten: 'Nguyễn Thị Tý',
          chat: 'TyNT',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền Phó',
        },
        {
          ten: 'Nguyễn Ngọc Hoàng Anh',
          chat: 'AnhNNH',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Văn Thanh Phương',
          chat: 'PhuongNVT',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Thị Hậu',
          chat: 'HauNT',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Đắc Mai Trinh',
          chat: 'TrinhNDM',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Thị Mải',
          chat: 'MaiLT',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Thị Cúc',
          chat: 'CucLT',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Mai Thị Hồng Nhung',
          chat: 'NhungMTH',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'La Hoài Trinh',
          chat: 'TrinhLH',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trần Thị Thương',
          chat: 'ThuongTT',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },

        {
          ten: 'Phan Văn Vũ',
          chat: 'VuPV',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Hồ Văn Kỳ Tài',
          chat: 'TaiHVK',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đỗ Thành Cao Thái',
          chat: 'ThaiDTC',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Giang Hữu Tài',
          chat: 'TaiGH',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Khắc Phục',
          chat: 'PhucNK',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trương Tất Uyển',
          chat: 'UyenTT',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Ngô Thanh Lợi',
          chat: 'LoiNT',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Thành Văn',
          chat: 'VanNT',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Ngọc Huy',
          chat: 'HuyNN',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Phạm Văn Tú',
          chat: 'TuPV',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Võ Long',
          chat: 'LongV',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đặng Trọng Đức',
          chat: 'DucDT',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Nhất Phong',
          chat: 'PhongLN',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Thế Lân',
          chat: 'LanNT',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Văn Cườm',
          chat: 'CuomLV',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Sanh Toàn',
          chat: 'ToanNS',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đặng Phước Thắng',
          chat: 'ThangDP',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Dương Văn Luyến',
          chat: 'LuyenDV',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Phan Văn Thạch',
          chat: 'ThachPV',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đặng Như Quốc Đạt',
          chat: 'DatDNQ',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Châu Xuân Thịnh',
          chat: 'ThinhCX',
          tau: 'Tàu Black Pearl',
          chuc: 'Thuyền viên',
        },

        // Tau 3
        {
          ten: 'Hồ Nguyễn Mai Nguyên',
          chat: 'NguyenHNM',
          tau: 'Tàu Fancy',
          chuc: 'BTC',
        },

        {
          ten: 'Nguyễn Hoàng Vũ',
          chat: 'VuNH',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền Trưởng',
        },
        {
          ten: 'Nguyễn Thị Thiên Nga',
          chat: 'NgaNTT',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền Phó',
        },
        {
          ten: 'Đào Thị Xuân',
          chat: 'XuanDT',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Hà Nha Vy',
          chat: 'VyHN',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đặng Thị Mộng Linh',
          chat: 'LinhDTM',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Huỳnh Thu Thanh Thủy',
          chat: 'ThuyHTT',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Tôn Hiếu Thảo',
          chat: 'ThaoNTH',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Minh Thị Cẩm Tú',
          chat: 'TuLMTC',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Ngọc Anh',
          chat: 'AnhLN',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Bùi Thị Thu Hằng',
          chat: 'HangBTT',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đỗ Thị Minh Thư',
          chat: 'ThuDTM',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },

        {
          ten: 'Trần Hoàng Bửu',
          chat: 'BuuTH',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Phan Trường Sơn',
          chat: 'SonNPT',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Ngọc Thắng',
          chat: 'ThangLN',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Văn Hảo',
          chat: 'HaoNV',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Phạm Minh Hiếu',
          chat: 'HieuPM',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Bùi Đặng Thống Nhất',
          chat: 'NhatBDT',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trần Minh Lâm',
          chat: 'LamTM',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Hoàng Đức Đại Hạnh',
          chat: 'HanhHDD',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đào Trọng Duy Phong',
          chat: 'PhongDTD',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Nguyên Thi',
          chat: 'ThiLN',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lương Nhật Tân',
          chat: 'TanLN',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Công Chính',
          chat: 'ChinhNC',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Huỳnh Hùng Phú',
          chat: 'PhuHH',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Hà Minh Đức',
          chat: 'DucNHM',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đặng Văn Tú',
          chat: 'TuDV',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Hoài Nam',
          chat: 'NamNH',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Ngọc Hiếu',
          chat: 'HieuLN',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Hạ Ngọc Quân',
          chat: 'QuanHN',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Minh Huy',
          chat: 'HuyNM',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trương Hữu Sang',
          chat: 'SangTH',
          tau: 'Tàu Fancy',
          chuc: 'Thuyền viên',
        },

        // Tau 4
        {
          ten: 'Mai Đức Thắng',
          chat: 'ThangMD',
          tau: 'Tàu Royal Fortune',
          chuc: 'BTC',
        },
        {
          ten: 'Hồ Nguyễn Anh Quốc',
          chat: 'QuocHNA',
          tau: 'Tàu Royal Fortune',
          chuc: 'BTC',
        },
        {
          ten: 'Đỗ Thu Quỳnh',
          chat: 'QuynhDT',
          tau: 'Tàu Royal Fortune',
          chuc: 'BTC',
        },
        {
          ten: 'Phan Văn Nghĩa',
          chat: 'NghiaPV',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền Trưởng',
        },
        {
          ten: 'Nguyễn Phương Thảo',
          chat: 'ThaoNP',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền Phó',
        },
        {
          ten: 'Nguyễn Thị Hồng',
          chat: 'HongNT',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Bùi Thị Thùy Linh',
          chat: 'LinhBTT',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Thanh Phương Ngọc',
          chat: 'NgocNTP',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Tôn Nữ Thanh Hiền',
          chat: 'HienTNT',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Thị Nguyệt',
          chat: 'NguyetLT',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Thị Anh Tiên',
          chat: 'TienNTA',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Bùi Thị Thu Thủy',
          chat: 'ThuyBTT',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Thị Cẩm Hà',
          chat: 'HaNTC',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Hồ Trương Khương Hiển',
          chat: 'HienHTK',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },

        {
          ten: 'Đỗ Quốc Hưng',
          chat: 'HungDQ',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trần Ngọc Cường',
          chat: 'CuongTN',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trần Tấn Phát ',
          chat: 'TTP',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trần Phước Sơn',
          chat: 'SonTP',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Phước Ý Phát',
          chat: 'PhatLPY',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Tuấn Anh',
          chat: 'AnhNT',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Tuấn Thành',
          chat: 'ThanhNT',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },

        {
          ten: 'Cái Thế Sĩ',
          chat: 'SiCT',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trương Công Linh',
          chat: 'LinhTC',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Hưng Phú',
          chat: 'PhuLH',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Văn Hùng',
          chat: 'HungLV',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Tấn Đạt',
          chat: 'DatLT',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đinh Dương Hải',
          chat: 'HaiDD',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Tôn Thất Thuận',
          chat: 'ThuanTT',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Võ Duy Phước',
          chat: 'PhuocVD',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Văn Hưởng',
          chat: 'HuongNV',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Bùi Văn Chung',
          chat: 'ChungBV',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đoàn Văn Kiếm',
          chat: 'KiemDV',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Tuấn Sơn',
          chat: 'SonNT',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Ngọc Túy Anh',
          chat: 'AnhLNT',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Hoàng Đức Thành',
          chat: 'ThanhHD',
          tau: 'Tàu Royal Fortune',
          chuc: 'Thuyền viên',
        },

        // Tau 5
        {
          ten: 'Huỳnh Thị Hồng Ngọc',
          chat: 'NgocHTH',
          tau: 'Tàu Silent Marry',
          chuc: 'BTC',
        },
        {
          ten: 'Nguyễn Sỹ Hùng',
          chat: 'HungNS',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền Trưởng',
        },
        {
          ten: 'Trần Thị Như Thủy',
          chat: 'ThuyTTN',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền Phó',
        },
        {
          ten: 'Ngô Thị Kim Ngân',
          chat: 'NganNTK',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Thị Thu Thảo',
          chat: 'ThaoNTT',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đặng Thị Hạnh',
          chat: 'HanhDT',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Thị Như Thảo',
          chat: 'ThaoNTN',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Hồng Ngọc',
          chat: 'NgocLH',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trương Thị Lê',
          chat: 'LeTT',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Thị Thắm',
          chat: 'ThamLT',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Phạm Thị Thanh Thảo',
          chat: 'ThaoPTT',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },

        {
          ten: 'Nguyễn Đăng Linh',
          chat: 'LinhND',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Công Tuệ Quang',
          chat: 'QuangLCT',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Hoàng Mẫn',
          chat: 'ManNH',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Hoài Sơn',
          chat: 'SonNH',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trần Văn Khánh',
          chat: 'KhanhTV',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Đức Phương',
          chat: 'PhuongND',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Văn Chiên',
          chat: 'ChienNV',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Bạch Trần Nhật Linh',
          chat: 'LinhBTN',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trần Nhật Thiên',
          chat: 'ThienTN',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lê Văn Cảnh',
          chat: 'CanhLV',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Hồ Đình Khuê',
          chat: 'KhueHD',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Triệu Tấn Danh',
          chat: 'DanhTT',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'La Hoàng Long',
          chat: 'LongLH',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đỗ Minh Vương',
          chat: 'VuongDM',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Lưu Quốc Hải',
          chat: 'HaiLQ',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Phan Thanh Việt',
          chat: 'VietPT',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Phan Đại Nhân',
          chat: 'NhanPD',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Nguyễn Ngọc Khanh',
          chat: 'KhanhNN',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Mai Hồ Hải Hà',
          chat: 'HaMHH',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Trương Công Phúc',
          chat: 'PhucTC',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
        {
          ten: 'Đoàn Minh Phụng',
          chat: 'PhungDM',
          tau: 'Tàu Silent Marry',
          chuc: 'Thuyền viên',
        },
      ],
      points: [
        {
          score: 730,
          tau: 'Tàu Bloody Morgan',
        },
        {
          score: 720,
          tau: 'Tàu Black Pearl',
        },
        {
          score: 550,
          tau: 'Tàu Fancy',
        },
        {
          score: 390,
          tau: 'Tàu Royal Fortune',
        },
        {
          score: 610,
          tau: 'Tàu Silent Marry',
        },
      ],
    }
  },
  computed: {
    user() {
      return this.$auth.user
    },
    resultQuery() {
      if (this.searchQuery) {
        return this.items.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(' ')
            .every((v) => item.chat.toLowerCase().includes(v))
        })
      } else {
        return this.searchQuery == null
      }
    },
    sortedData() {
      return this.points.map((item) => item).sort((a, b) => b.score - a.score)
    },
  },
  methods: {
    currentDateTime() {
      const today = new Date()
      const tt1 = new Date('Aug 13, 2022 00:00:00')
      const tt2 = new Date('Aug 13, 2022 08:00:00')
      const tt3 = new Date('Aug 13, 2022 12:15:00')
      const tt4 = new Date('Aug 13, 2022 16:00:00')
      const tt5 = new Date('Aug 14, 2022 08:00:00')
      const khobau = new Date('Aug 15, 2022 00:00:00')

      if (today.getTime() >= tt1.getTime() && today.getTime() < tt2.getTime()) {
        return 1
      }
      if (today.getTime() >= tt2.getTime() && today.getTime() < tt3.getTime()) {
        return 2
      }
      if (today.getTime() >= tt3.getTime() && today.getTime() < tt4.getTime()) {
        return 3
      }
      if (today.getTime() >= tt4.getTime() && today.getTime() < tt5.getTime()) {
        return 4
      }
      if (
        today.getTime() >= tt5.getTime() &&
        today.getTime() < khobau.getTime()
      ) {
        return 5
      }
      if (today.getTime() >= khobau.getTime()) {
        return 6
      }
    },
  },
}
</script>

<style>
.team-container {
  text-align: center;
}

.image-container {
  position: relative;
  margin-left: 5%;
}
.image-text {
  position: absolute;
  top: 41%;
  right: 9%;
}
.slogan {
  font-family: 'tahoma';
  font-size: 3.6rem;
  margin-top: 2%;
  text-align: center;
}

.content_img {
  border-radius: 100%;
  max-width: 190px;
  max-height: 100%;
  padding-top: 0px;
}
.column#sepia img {
  -webkit-filter: sepia(0);
  filter: sepia(0);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.column#sepia:hover img {
  -webkit-filter: sepia(100%);
  filter: sepia(100%);
}
.card-title {
    margin-bottom: 0.75rem;
    color: #379273;
}

/*GrayScale*/
.column#grayscale img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.column#grayscale:hover img {
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}

/*Zoom In*/
.column#zoomIn img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.column#zoomIn:hover img {
  -webkit-transform: scale(1.3);
  transform: scale(1.3);
}

/*Zoom Out*/
.column#zoomOut img {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.column#zoomOut:hover img {
  -webkit-transform: scale(1);
  transform: scale(1);
}
.team-font {
  font-family: 'itim';
  font-size: 28px;
  text-align: left;
}

#modal-1___BV_modal_body_ {
  background: url('~/assets/img/teambg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#modal-2___BV_modal_body_ {
  background: url('~/assets/img/teambg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#modal-3___BV_modal_body_ {
  background: url('~/assets/img/teambg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#modal-4___BV_modal_body_ {
  background: url('~/assets/img/teambg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#modal-5___BV_modal_body_ {
  background: url('~/assets/img/teambg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.font-team1 {
  background: -webkit-linear-gradient(#342711, #dc2537);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.font-team2 {
  background: -webkit-linear-gradient(#000066, #6699ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.font-team3 {
  background: -webkit-linear-gradient(#ed7b84, #f14658);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.font-team4 {
  background: -webkit-linear-gradient(#f06966, #fad6a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.font-team5 {
  background: -webkit-linear-gradient(#402565, #30be96);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.font-team6 {
  background: -webkit-linear-gradient(#2c3639, #576f72);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.close-modal {
  text-align: right;
}

@media (min-width: 500px) and (max-width: 1000px) {
  .font-text-title {
    font-size: 15px !important;
  }
}

@media (max-width: 500px) {
  .slogan-title__header {
    font-size: 2.8rem !important;
  }
  .font-text-title {
    font-size: 11px !important;
  }
}
.content_img_icon_road {
  max-width: 10vh;
  max-height: 10vh;
  padding-top: 0px;
  text-align: bottom;
}

.slogan-item {
  font-family: 'back';
  font-size: 1.8rem;
  margin-top: 6%;
  text-align: center;
  color: #00a668;
}
.slogan-title__header {
  font-family: 'tahoma';
  font-size: 3.6rem;
  margin-top: 2%;
  text-align: center;
  color: #379237;
  padding-top: 80px;
}

.progress-bar {
  border-radius: 0px 30% 20% 0px;
}
.progress {
  height: 5vw;
  background-image: linear-gradient(
    to right,
    #72ffff,
    #c1f8cf,
    #4fd3c4,
    #488fb1
  );
}

.boat {
  background: #00fdff url('~/assets/img/bg-wave.png');
  position: relative;
  height: 100%;

  background-position: 0 0;
  background-repeat: repeat-x;
  animation: animate 15s linear infinite;
}

.tau4 {
  position: absolute;
  right: 30px;
  width: 100px;
}
.team-font-rank {
  font-family: 'itim';
  font-size: 22px;
  text-align: left;
}
@media (min-width: 1300px) and (max-width: 1700px) {
  .progress {
    height: 6vw;
    background-image: linear-gradient(
      to right,
      #72ffff,
      #c1f8cf,
      #4fd3c4,
      #488fb1
    );
  }
  .tau4 {
    position: absolute;
    right: 30px;
    width: 90px;
  }
  .team-font-rank {
    font-family: 'itim';
    font-size: 18px;
    text-align: left;
  }
}

@media (min-width: 1100px) and (max-width: 1300px) {
  .progress {
    height: 7vw;
    background-image: linear-gradient(
      to right,
      #72ffff,
      #c1f8cf,
      #4fd3c4,
      #488fb1
    );
  }
  .tau4 {
    position: absolute;
    right: 30px;
    width: 80px;
  }
}

@media (min-width: 800px) and (max-width: 1100px) {
  .progress {
    height: 8vw;
    background-image: linear-gradient(
      to right,
      #72ffff,
      #c1f8cf,
      #4fd3c4,
      #488fb1
    );
  }
  .tau4 {
    position: absolute;
    right: 30px;
    width: 70px;
  }
}

@media (min-width: 600px) and (max-width: 800px) {
  .progress {
    height: 9vw;
    background-image: linear-gradient(
      to right,
      #72ffff,
      #c1f8cf,
      #4fd3c4,
      #488fb1
    );
  }
  .tau4 {
    position: absolute;
    right: 20px;
    width: 60px;
  }
}

@media (min-width: 450px) and (max-width: 600px) {
  .progress {
    height: 10vw;
    background-image: linear-gradient(
      to right,
      #72ffff,
      #c1f8cf,
      #4fd3c4,
      #488fb1
    );
  }
  .tau4 {
    position: absolute;
    right: 20px;
    width: 50px;
  }
}
@media (max-width: 450px) {
  .progress {
    height: 12vw;
    background-image: linear-gradient(
      to right,
      #72ffff,
      #c1f8cf,
      #4fd3c4,
      #488fb1
    );
  }
  .tau4 {
    position: absolute;
    right: 20px;
    top: 2px;
    width: 35px;
  }
  .team-font-rank {
    font-family: 'itim';
    font-size: 18px;
    text-align: left;
  }
}

@keyframes animate {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
}

.item {
  width: 100px;
  height: 50px;
  margin: 10px;
  position: relative;
}

i {
  color: #f14658;
  margin-left: 20px;
}

.arrow4 {
  transform-origin: 0% 50%;
  animation: slide4 4s linear infinite;
}

@keyframes slide4 {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(180deg);
  }
}
</style>
