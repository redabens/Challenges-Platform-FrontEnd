<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white rounded-md p-8 w-full max-w-md">
      <fwb-heading tag="h1" class="text-base font-bold text-center">Create Account</fwb-heading>
      <form  class="space-y-4">
        <fwb-input type="text" v-model="name" placeholder="Enter your user name" label="User name" required /> 
        <fwb-input type="email" v-model="email" placeholder="Enter your email" label="Email" required /> 
        <fwb-input type="date" v-model="birthdate" label="Birthdate" required /> 
        <fwb-input type="password" v-model="password" placeholder="*********" label="Password" required />
        <fwb-button class="mt-4 w-full" size="lg" color="default">Create Account</fwb-button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FwbHeading, FwbInput, FwbButton } from 'flowbite-vue';

const name = ref('');
const email = ref('');
const birthdate = ref('');
const password = ref('');

const handleSubmit = () => {
  const formData = {
    name: name.value,
    email: email.value,
    password: password.value,
    birthdate: birthdate.value,
  };
  console.log(formData);
};
</script>
