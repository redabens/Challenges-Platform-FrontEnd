<template>
    <div class=" mx-auto p-6 bg-white shadow-lg rounded-lg mt-8" style="width: 1000px;">
      <h2 class="text-2xl font-semibold mb-4">Add New Hackathon</h2>
      
      <form @submit.prevent="addChallenge">
        <!-- Challenge Name -->
        <div class="mb-4">
          <label for="name" class="block text-lg font-medium text-gray-700 mb-2">Challenge Name</label>
          <input
            type="text"
            id="name"
            v-model="newChallenge.name"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter challenge name"
            required
          />
        </div>
  
        <!-- Challenge Description -->
        <div class="mb-4">
          <label for="description" class="block text-lg font-medium text-gray-700 mb-2">Description</label>
          <textarea
            id="description"
            v-model="newChallenge.description"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter challenge description"
            required
          ></textarea>
        </div>

        <!-- Link to downloadable pdf -->
        <div class="mb-4">
          <label for="documentation" class="block text-lg font-medium text-gray-700 mb-2">Documentation link</label>
          <textarea
            id="documentation"
            v-model="newChallenge.documentation"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Enter challenge documentation"
            required
          ></textarea>
        </div>
  
        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add Challenge
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newChallenge: {
          name: '',
          description: '',
          status: true, // Default status is Active
        },
      };
    },
    methods: {
      addChallenge() {
        // Handle adding the new challenge
        console.log('New Challenge:', this.newChallenge);
        
        // You can emit the challenge data to the parent or add it to a store
        this.$emit('add-challenge', { ...this.newChallenge });
  
        this.newChallenge.name = '';
        this.newChallenge.description = '';
        this.newChallenge.status = true;
      },
    },
  };
  </script>