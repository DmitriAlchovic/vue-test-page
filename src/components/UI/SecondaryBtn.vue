<template>
  <button class='secondary-btn'>
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default { name: 'secondary-btn' };
</script>
<style lang="scss">
@import '../../variables.scss';

.secondary-btn {
  background-color: $c-white;
  border: none;
  cursor: pointer;
  height: 2.5rem;
  width: 12.5rem;
  border-radius: 0.6rem;
  color: $c-black;
  font-size: 1rem;
  border: 1px solid $c-light-blue;
  margin: 5px 0;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
    border: solid 0.2rem $c-light-blue;
  }
}
</style>
