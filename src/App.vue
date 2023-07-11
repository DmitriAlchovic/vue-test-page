<template>
  <NavBar :currentCategory="activeCategory" @scroll="scrollToElement" />
  <div ref="home" id="home">
    <MainBanner />
  </div>
  <div ref="about" id="about">
    <AboutCard />
  </div>
  <div ref="framework" id="framework">
    <ArticleCardList />
  </div>
  <div ref="app" id="app">
    <ApplicationsList />
  </div>
  <div ref="contact" id="contact">
    <ContactForm />
  </div>
  <div>
    <MainFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import MainBanner from './components/MainBanner.vue';
import AboutCard from './components/AboutCard.vue';
import ArticleCardList from './components/ArticleCardList.vue';
import ApplicationsList from './components/ApplicationsList.vue';
import ContactForm from './components/ContactForm.vue';
import MainFooter from './components/MainFooter.vue';

export default defineComponent({
  components: {
    NavBar,
    MainBanner,
    AboutCard,
    ArticleCardList,
    ApplicationsList,
    ContactForm,
    MainFooter,
  },
  data() {
    return {
      activeCategory: '',
      categories: ['home', 'about', 'framework', 'app', 'contact'],
    };
  },
  mounted() {
    const optionsShort = {
      rootMargin: '10px',
      threshold: 0.6,
    };
    const optionsLong = {
      rootMargin: '0px',
      threshold: 0.20,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      const categoryName = entries[0].target.id;
      if (entries[0].isIntersecting) {
        this.activeCategory = categoryName;
      }
    };
    const observerShort = new IntersectionObserver(callback, optionsShort);
    const observerLong = new IntersectionObserver(callback, optionsLong);
    this.categories.forEach((item) => {
      const element = (this.$refs[item] as Element);
      if (element) {
        if (item !== 'framework' && item !== 'about' && item !== 'home') {
          observerShort.observe(element);
        } else {
          observerLong.observe(element);
        }
      }
    });
  },

  methods: {
    scrollToElement(category: string) {
      const observerElement = this.$refs[category] as Element;
      observerElement.scrollIntoView({ behavior: 'smooth' });
      this.activeCategory = category;
    },
  },
});

</script>

<style lang="scss">
@import './variables.scss';
* {
  margin: 0;
  font-family: 'Gothic A1';
  scroll-margin-top: 5rem;

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden !important;
    background-color: $c-bg-main;
  }

  .container {
    max-width: none;
  }

  .category-title {
    font-weight: $f-w-bold;
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
    color: $c-dark-grey;
    font-family: Gothic A1;
    font-size: 16px;
    font-style: normal;
    font-weight: $f-w-normal;
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
