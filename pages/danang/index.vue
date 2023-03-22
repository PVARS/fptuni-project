<template>
  <div>
    <navbar-component />
    <home-component />
    <coundown-component />
    <schedule-component />
    <search-team />
    <hotel-component />
    <memory-component />
    <suggest-component />
    <contact-bap />
    <footer-component />
  </div>
</template>

<script>
import NavbarComponent from '~/components/NavbarComponent'
import CoundownComponent from '@/components/CountdownComponent.vue'
import HomeComponent from '~/components/HomeComponent'
import ScheduleComponent from '~/components/ScheduleComponent'
import ContactBap from '@/components/ContactPage.vue'
import MemoryComponent from '~/components/MemoryComponent.vue'
import SearchTeam from '~/components/SearchTeam.vue'
import SuggestComponent from '~/components/SuggestComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HotelComponent from '~/components/HotelComponent.vue'
export default {
  name: 'IndexPage',
  components: {
    NavbarComponent,
    CoundownComponent,
    HomeComponent,
    MemoryComponent,
    ContactBap,
    ScheduleComponent,
    SearchTeam,
    SuggestComponent,
    FooterComponent,
    HotelComponent,
  },
  // middleware: 'auth',
  // computed: {
  //   user() {
  //     return this.$auth.user
  //   },
  // },
  mounted() {
    this.skiteNav()
  },
  methods: {
    skiteNav() {
      const classNavbar = document.getElementsByClassName('navbar')[0]
      const classLayout = document.getElementsByClassName('layout')[0]
      classLayout.addEventListener('scroll', function () {
        if (classLayout.scrollTop >= 100) {
          classNavbar.classList.add('skite')
          classNavbar.classList.remove('navbar')
        } else {
          classNavbar.classList.remove('skite')
          classNavbar.classList.add('navbar')
        }
      })
    },
  },
}
</script>
