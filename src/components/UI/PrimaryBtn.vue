<template>
    <button class='primary-btn'>
        <slot></slot>
    </button>
</template>
<script lang="ts">
export default { name: 'primary-btn' };
</script>
<style lang="scss">
.primary-btn {
    border: none;
    cursor: pointer;
    height: 2.5rem;
    width: 12.5rem;
    border-radius: 0.6rem;
    background: #71A3FF;
    color: #fff;
    font-size: 1rem;
    margin: 5px 0;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        transform: scale(0.95);
        border: solid 0.2rem rgba(0, 0, 0, 0.40);
    }
}
</style>
