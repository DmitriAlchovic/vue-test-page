<template>
  <div class="category-title">Applications</div>
  <div class="app-card-container">
      <ApplicationLinkCard v-for="app in apps" :key="app.id" :app="app" />
  </div>
</template>
<script lang="ts">
import frameworksArr from '../content/frameworks';
import appArr from '../content/app';
import ApplicationLinkCard from './ApplicationLinkCard.vue';

export default {
  components: { ApplicationLinkCard },
  data() {
    return {
      frameworks: frameworksArr,
      apps: appArr,
    };
  },
};
</script>
<style lang="scss">
.app-card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 8vw;
  max-width: 80vw;
}
</style>
