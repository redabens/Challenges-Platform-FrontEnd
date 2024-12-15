<script setup>
import { ref } from "vue";
import { FwbButton } from "flowbite-vue";
</script>
<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <img
      src="../assets/icons/logo.svg"
      alt="GDG Challanges"
      class="w-32 mb-8"
    />
    <h1 class="text-3xl font-bold mb-4">Hello to GDG Challanges platform</h1>
    <p class="text-xl text-gray-700 mb-8">
      Here you can create and join Hackathons
    </p>
    <router-link to="/login">
      <fwb-button color="default">Sign in</fwb-button>
    </router-link>
  </div>
</template>
