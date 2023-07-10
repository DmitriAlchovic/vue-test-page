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
.banner-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 44vw;
    background-image: url("../assets/banner.png");
    background-size:cover;
    width: 100vw;
    .banner-title{
        font-size: 4.8vw;
        color: #fff;
        font-weight: 700;
    }
    .banner-body{
        font-size: 2.5vw;
        color: #fff;
    }
}
</style>
