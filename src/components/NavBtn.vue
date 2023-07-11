<template>
  <button :class="active ? 'nav-btn-active' : 'nav-btn'">
    <slot></slot>
  </button>
</template>
<script lang="ts">

export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
};

</script>
<style lang="scss">
@import '../variables.scss';

@mixin nav-btn {
  cursor: pointer;
  border: none;
  background-color: $c-white;
  text-transform: uppercase;
  font-size: 1.12rem;
}
.nav-btn{
  @include nav-btn;
}
.nav-btn-active{
  @include nav-btn;
  color: $c-light-blue;
}

@media (max-width:990px) {
  .nav-btn {
    padding: 2vw 0;
    border: $c-light-blue solid 2px;
  }
  .nav-btn-active {
    color: $c-black;
    padding: 2vw 0;
    border: $c-light-blue solid 2px;
  }
}
</style>
