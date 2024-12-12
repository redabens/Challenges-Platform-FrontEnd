<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white rounded-md p-8 w-full max-w-md">
      <fwb-heading tag="h1" class="text-base font-bold text-center">Sign in to platform</fwb-heading>
      <form @submit.prevent="handleSubmit">
        <fwb-input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          label="Email"
        /> 
        <fwb-input
          type="password"
          v-model="password"
          placeholder="*********"
          label="Password"
        />
        <fwb-button class="mt-4 w-full" size="lg" color="default">Sign in</fwb-button>
      </form>
      <fwp-p>You don't have an account?</fwp-p>
      <router-link to="/sign-up" class="text-blue-500 hover:text-blue-700 font-bold">
        Create account
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FwbHeading, FwbInput, FwbButton, FwbA, FwbP } from 'flowbite-vue';

const email = ref('');
const password = ref('');

const handleSubmit = () => {
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);

};

</script>
