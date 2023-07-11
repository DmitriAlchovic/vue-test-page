<template>
    <div class="container banner-container">
        <div class="banner-title">Welcome to Test Page</div>
        <div class="banner-body">Front-end developer</div>
    </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang="scss">
@import '../variables.scss';

.banner-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 44vw;
    background-image: url("../assets/banner.png");
    background-size:cover;
    width: 100vw;
    padding-top: 5rem;
    .banner-title{
        font-size: 4.8vw;
        color: $c-white;
        font-weight: $f-w-bold;
    }
    .banner-body{
        font-size: 2.5vw;
        color: $c-white;
    }
}
</style>
