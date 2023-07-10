<template>
  <div class="container nav-container">
    <div class="img-container logo"><img alt="logo" src="../assets/logo.png" /></div>
    <div class="nav-menu-container">
      <div class="menu-btn" @click="toggleShow" @keydown="toggleShow">
        <img alt="" src="../assets/menu.svg" />
      </div>
      <div :class="hasMenu ? 'menu-container' : 'menu-hidden'" v-if="hasMenu">
        <dropdown-menu v-model:show="hasMenu">
          <NavBtn>Home</NavBtn>
          <NavBtn>About us</NavBtn>
          <NavBtn>Frameworks</NavBtn>
          <NavBtn>Applications</NavBtn>
          <NavBtn>Contacts us</NavBtn>
        </dropdown-menu>
      </div>
    </div>
    <div class="category-container hidden">
      <NavBtn>Home</NavBtn>
      <NavBtn>About us</NavBtn>
      <NavBtn>Frameworks</NavBtn>
      <NavBtn>Applications</NavBtn>
      <NavBtn>Contacts us</NavBtn>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavBtn from './NavBtn.vue';

export default defineComponent({
  components: {
    NavBtn,
  },
  data() {
    return {
      hasMenu: false,
    };
  },
  methods: {
    toggleShow() {
      this.hasMenu = true;
    },
  },
});

</script>
<style lang="scss">
.nav-container {
  display: flex;
  justify-content: space-between;
  height: 5rem;
  align-items: center;
  padding: 0 8.5%;
  background-color: #fff;

  .logo {
    max-height: 38px;
    max-width: 197px;
  }

  .menu-btn {
    display: none;

    &:active {
      transform: scale(0.9);
      border: solid 0.2rem #71A3FF;
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
  }

  @media (max-width:992px) {
    .category-container {
      display: none;
    }

    .menu-btn {
      display: block;
    }
  }

}
</style>
