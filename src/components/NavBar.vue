<template>
  <div class="nav-container">
    <div class="img-container logo"><img alt="logo" src="../assets/logo.png" /></div>
    <div class="nav-menu-container">
      <div class="menu-btn" @click="toggleShow" @keydown="toggleShow">
        <img alt="" src="../assets/menu.svg" />
      </div>
      <div :class="hasMenu ? 'menu-container' : 'menu-hidden'" v-if="hasMenu">
        <dropdown-menu v-model:show="hasMenu">
          <NavBtn
          v-for="category in navCategories"
          :key="category.id"
          :active="currentCategory === category.name ? true : false"
          @click="$emit('scroll', category.name)">{{ category.text }}</NavBtn>
        </dropdown-menu>
      </div>
    </div>
    <div class="category-container">
      <NavBtn
      v-for="category in navCategories"
      :key="category.id"
      :active="currentCategory === category.name ? true : false"
      @click="$emit('scroll', category.name)">{{ category.text }}</NavBtn>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavBtn from './NavBtn.vue';
import navCategories from '../content/nav';

export default defineComponent({
  components: {
    NavBtn,
  },
  props: {
    currentCategory: String,
  },
  data() {
    return {
      hasMenu: false,
      navCategories,
    };
  },
  methods: {
    toggleShow() {
      this.hasMenu = true;
    },
    handlerScroll(event: Event) {
      this.hasMenu = false;
      this.$emit('scrollToElement', event);
    },
  },
});

</script>
<style lang="scss">
@import '../variables.scss';

.nav-container {
  display: flex;
  justify-content: space-between;
  height: 5rem;
  align-items: center;
  background-color: $c-white;
  position: fixed;
  z-index: 50;
  width: 100vw;

  .logo {
    max-height: 38px;
    max-width: 197px;
    margin-left: 8.5%;
  }

  .menu-btn {
    display: none;
    margin-right: 8.5%;

    &:active {
      transform: scale(0.9);
      border: solid 0.2rem $c-light-blue;
    }
  }

  .menu-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    right: 0;
    width: 50vw;
    height: 35vh;
  }

  .menu-hidden {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    right: -100%;
    width: 50vw;
    height: 35vh;
  }

  .category-container {
    display: flex;
    margin-right: 8.5%;
  }

  .nav-menu-container {
    margin-right: 8.5%;
  }

  @media (max-width:992px) {
    * {
    scroll-margin-top: 0;
    }
    .category-container {
      display: none;
    }

    .menu-btn {
      display: block;
    }
  }

}
</style>
