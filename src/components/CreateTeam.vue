<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-white rounded-md p-8 w-full max-w-md">
      <fwb-heading tag="h1" class="text-base font-bold text-center">Create Team</fwb-heading>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <fwb-input v-model="teamName" placeholder="Enter your team name" label="Team Name" required/>
        <fwb-input type="email" v-model="emailInput" placeholder="Enter a team member's email" label="Add Member" @keyup.enter="addEmail"/>
        <ul class="list-disc pl-5 text-gray-500">
          <li v-for="(email, index) in emails" :key="index">{{ email }}</li>
        </ul>
        <fwb-button class="mt-4 w-full" size="lg" color="default">Create Team</fwb-button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FwbHeading, FwbInput, FwbButton } from 'flowbite-vue';

const teamName = ref('');
const emailInput = ref('');
const emails = ref([]);

const addEmail = () => {
  if (emailInput.value.trim() !== '') {
    emails.value.push(emailInput.value.trim());
    emailInput.value = ''; // Clear input after adding
  }
};

const handleSubmit = () => {
  const formData = {
    teamName: teamName.value,
    emails: emails.value,
  };
  console.log(formData);
};
</script>
