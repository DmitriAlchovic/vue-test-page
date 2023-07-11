<template>
  <div class="app-link-container">
    <img v-if="app" alt="no img" :src="require('@/assets/' + app.image + '')" />
    <div class="app-name">{{ app?.name }}</div>
  </div>
</template>
<script lang="ts">
import { ApplicationPreview } from '@/types';
import { PropType } from 'vue';

export default {
  props: {
    app: Object as PropType<ApplicationPreview>,
  },
};

</script>
<style lang="scss">
@import '../variables.scss';

.app-link-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2.5rem 3rem;
  max-width: 14.2rem;
  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }

  .app-name {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $c-white;
    background-color: $c-dark-grey;
    width: 100%;
    font-size: 1rem;
    max-height: 2.37rem;
  }
}
</style>
