<template>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <NavBar />
  <MainBanner />
  <AboutCard />
  <FrameworksList></FrameworksList>
  <ApplicationsList />
  <ContactForm />
  <MainFooter />
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue';
import MainBanner from './components/MainBanner.vue';
import AboutCard from './components/AboutCard.vue';
import FrameworksList from './components/FrameworksList.vue';
import ApplicationsList from './components/ApplicationsList.vue';
import ContactForm from './components/ContactForm.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  components: {
    NavBar,
    MainBanner,
    AboutCard,
    FrameworksList,
    ApplicationsList,
    ContactForm,
    MainFooter,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};

</script>

<style lang="scss">
* {
  margin: 0;
  font-family: 'Gothic A1';

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden !important;
    background-color: #F5F7FA;
  }

  .container {
    max-width: none;
  }

  @media (max-width:1440px) {
    .container {}
  }

  @media (max-width:992px) {
    .container {}
  }

  @media (max-width:767px) {
    .container {}
  }

  .category-title {
    font-weight: 700;
    font-size: 1.75rem;
    text-align: center;
  }

  .btn-container {
    display: flex;
    justify-content: space-between;
    max-width: 26.4rem;
    padding: 1rem 0;
    flex-wrap: wrap;
  }

  label {
    color: #3D3D3D;
    font-family: Gothic A1;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    margin: 1.4rem 0;
    flex-wrap: wrap;
  }

  .img-container {
    position: relative;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
    height: inherit;
    width: inherit;
  }

  .centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
