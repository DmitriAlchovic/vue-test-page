<template>
    <button class="nav-btn">
        <slot></slot>
    </button>
</template>
<script lang="ts">

export default {};

</script>
<style lang="scss">
    .nav-btn {
        cursor: pointer;
        border: none;
        background-color: #fff;
        text-transform: uppercase;
        font-size: 1.12rem;
        color: #71A3FF;
    }

    @media (max-width:990px){
        .nav-btn {
            padding: 2vw 0;
            border: #71A3FF solid 2px;
        }
    }
</style>
