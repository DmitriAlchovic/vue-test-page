<template>
  <div class="form-container">
  <div class="category-title">Contact Us</div>
    <form class="contact-form">
      <label for="first-name">First Name*
        <input class="contact-input" placeholder="Enter Your First Name" id="first-name" />
      </label>
      <label for="last-name">Last Name*
        <input class="contact-input" placeholder="Enter Your Last Name" id="last-name" />
      </label>
      <label for="company">Company*
        <input class="contact-input" placeholder="Enter Your Company" id="company" />
      </label>
      <label for="email">Email*
        <input class="contact-input" placeholder="Enter Your Email" id="email" />
      </label>
      <label for="job-title">Job Title*
        <input class="contact-input" placeholder="Enter Your Job Title" id="job-title" />
      </label>
      <label for="country">Country
        <input class="contact-input" placeholder="Enter Your Country" id="country" />
      </label>
      <label for="state">State*
        <input class="contact-input" placeholder="Enter Your State" id="state" />
      </label>
      <label for="zip-code">Zip code*
        <input class="contact-input" placeholder="Enter Your Zip Code" id="zip-code" />
      </label>
    </form>
  <div class="centered">
    <primary-btn>Submit</primary-btn>
  </div>
  </div>
</template>
<script lang="ts">

export default {};

</script>
<style lang="scss">
.form-container {
  padding: 3.7rem 0;
  background-color: #fff;

  .contact-form {
    display: flex;
    flex-wrap: wrap;
    margin: 0 9.7vw;
    align-items: center;
    justify-content: center;
    position: relative;

    .contact-input {
      border-radius: 10px;
      background: #F8F8F8;
      height: 2.5rem;
      margin: 0 0.4rem;
      border:none;
    }
  }
}
</style>
