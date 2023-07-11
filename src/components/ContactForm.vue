<template>
  <div class="form-container">
  <div class="category-title">Contact Us</div>
    <form class="contact-form" @submit.prevent="handleSubmit">
      <label for="first-name">First Name*
        <input
        class="contact-input"
        type="text"
        name="firstName"
        maxlength="40"
        :value="form.firstName"
        @input="handlerChange"
        required
        pattern="^[A-Za-z]+$"
        title="Use only alphabetic characters"
        placeholder="Enter Your First Name"
        id="first-name"
        />
      </label>
      <label for="last-name">Last Name*
        <input
        class="contact-input"
        name="lastName"
        maxlength="40"
        :value="form.lastName"
        type="text"
        required
        placeholder="Enter Your Last Name"
        id="last-name" />
      </label>
      <label for="company">Company*
        <input
        class="contact-input"
        name="company"
        maxlength="40"
        :value="form.company"
        type="text"
        required
        pattern="^[A-Za-z]+$"
        title="Use only alphabetic characters"
        placeholder="Enter Your Company"
        id="company" />
      </label>
      <label for="email">Email*
        <input
        class="contact-input"
        type="email"
        name="email"
        maxlength="40"
        :value="form.email"
        required
        placeholder="Enter Your Email"
        id="email" />
      </label>
      <label for="job-title">Job Title*
        <input class="contact-input"
        required
        pattern="^[A-Za-z]+$"
        title="Use only alphabetic characters"
        name="jobTitle"
        maxlength="40"
        :value="form.jobTitle"
        type="text"
        placeholder="Enter Your Job Title"
        id="job-title" />
      </label>
      <label for="country">Country
        <input
        class="contact-input"
        name="country"
        maxlength="40"
        pattern="^[A-Za-z]+$"
        title="Use only alphabetic characters"
        :value="form.country"
        placeholder="Enter Your Country"
        id="country" />
      </label>
      <label for="state">State*
        <input
        class="contact-input"
        name="state"
        maxlength="40"
        :value="form.state"
        required
        pattern="^[A-Za-z]+$"
        title="Use only alphabetic characters"
        placeholder="Enter Your State"
        id="state" />
      </label>
      <label for="zip-code">Zip code*
        <input
        class="contact-input"
        name="zipCode"
        maxlength="40"
        :value="form.zipCode"
        required
        pattern="^[0-9]{5}(?:-[0-9]{4})?$"
        title="Zip code format example: 12345 and 12345-6789"
        placeholder="Enter Your Zip Code"
        id="zip-code" />
      </label>
      <div>
      <div class="message-success">{{ toastMessage.text }}</div>
      <input type="submit" class="primary-btn" name="submit" id="submit">
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

const formDefault = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  jobTitle: '',
  country: '',
  state: '',
  zipCode: '',
};

export default defineComponent({
  setup() {
    const toast = ref(null);
    return { toast };
  },
  data() {
    return {
      toastMessage: { text: '', isShown: false, isFailed: false },
      form: formDefault,
    };
  },
  methods: {
    handleSubmit() {
      try {
        this.showMessage('Success!', false);
        this.form = formDefault;
      } catch (error) {
        if (error instanceof Error) {
          this.showMessage(error.message, true);
        }
      }
    },
    showMessage(text: string, error: boolean) {
      this.toastMessage = { text, isShown: true, isFailed: error };
      setTimeout(() => {
        this.toastMessage = { ...this.toastMessage, isShown: false, text: '' };
      }, 3000);
    },
    handlerChange(event:Event) {
      const element = event.target as HTMLInputElement;
      this.form = { ...this.form, [element.name]: element.value };
    },
  },
});

</script>
<style lang="scss">
@import '../variables.scss';

.form-container {
  padding: 3.7rem 8vw;
  background-color: $c-white;

  .contact-form {
    display: flex;
    flex-wrap: wrap;
    margin: 0 9.7vw;
    align-items: center;
    justify-content: center;
    position: relative;

    .contact-input {
      border-radius: 10px;
      background: $c-bg-secondary;
      height: 2.5rem;
      margin: 0 0.4rem;
      border:none;
    }
  }
  .message-success {
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $c-light-green;
  }
}
</style>
