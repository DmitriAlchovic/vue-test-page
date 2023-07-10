<template>
  <div class="container about-container">
    <div>
      <div class="about-title">About Us</div>
      <div class="about-body">Lorem Ipsum is simply dummy text of the printing
        and typesetting industry.
        Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries,
        but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularized in
        the 1960s with the release of
        Letraset.</div>
      <div class="btn-container">
        <primary-btn>Read more</primary-btn>
        <secondary-btn>Contact us</secondary-btn>
      </div>
    </div>
    <div class="frame-container">
      <iframe class="video-frame" src="https://www.youtube.com/embed/Upex8hM6wRs" title="YouTube video player"
        frameborder="0" allow="accelerometer;
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
export default {};
</script>
<style lang="scss">

.about-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-image: url('../assets/background-abstract.png');
  background-size: cover;
  padding: 8.4vw;
  background-color: #fff;
@media (max-width:1364px) {
    .about-container {
      display: none;
    }
  }
  .about-title {
    font-size: 1.75rem;
    font-weight: 700;
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
