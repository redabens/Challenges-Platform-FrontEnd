<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white rounded-md p-8 w-full max-w-md">
      <fwb-heading tag="h1" class="text-base font-bold text-center"
        >Sign in to platform</fwb-heading
      >
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
        <fwb-button type="submit" class="mt-4 w-full" size="lg" color="default">
          Sign in
        </fwb-button>
      </form>
      <fwp-p>You don't have an account?</fwp-p>
      <router-link
        to="/signup"
        class="text-blue-500 hover:text-blue-700 font-bold"
      >
        Create account
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { FwbHeading, FwbInput, FwbButton } from "flowbite-vue";

const email = ref("");
const password = ref("");

const router = useRouter();

const handleSubmit = () => {
  if (!email.value || !password.value) {
    alert("Both email and password are required.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);

  // Assuming the login is successful, route to the dashboard
  router.push("/hackathons");
};
</script>
