<template>
  <div class="background" v-if="show" @click.stop="toggleShow" @keydown.stop="toggleShow">
  </div>
  <div @click.stop v-if="show" class="dropdown-content">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'dropdown-menu',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleShow() {
      this.$emit('update:show', false);
    },
  },
});

</script>
<style lang="scss">
.background {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.5);
  position: fixed;
}

.dropdown-content {
  position: absolute;
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
</style>
