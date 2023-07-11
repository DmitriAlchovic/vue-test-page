<template>
  <div class="container about-container">
    <div>
      <div class="about-title">{{ about.title }}</div>
      <div class="about-body">{{ about.body }}</div>
      <div class="btn-container">
        <primary-btn>Read more</primary-btn>
        <secondary-btn>Contact us</secondary-btn>
      </div>
    </div>
    <div class="frame-container">
      <iframe
      class="video-frame"
      src="https://www.youtube.com/embed/Upex8hM6wRs"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer;
                    autoplay;
                    clipboard-write;
                    encrypted-media;
                    gyroscope;
                    picture-in-picture;
                    web-share" allowfullscreen></iframe>
    </div>
  </div>
</template>
<script lang="ts">
import about from '../content/about';

export default {
  data() { return { about }; },
};
</script>
<style lang="scss">
@import '../variables.scss';

.about-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-image: url('../assets/background-abstract.png');
  background-size: cover;
  padding: 8.4vw;
  background-color: $c-white;
@media (max-width:1364px) {
    .about-container {
      display: none;
    }
  }
  .about-title {
    font-size: 1.75rem;
    font-weight: $f-w-bold;
  }

  .about-body {
    font-size: 1rem;
    color: #808080;
    max-width: 37.18rem;
    word-wrap: break-word;
  }

  .frame-container {
    position: relative;
    width: 532px;
    height: 301px;
  }

  .video-frame {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
