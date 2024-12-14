<script setup>
import { ref } from "vue";
import { FwbSelect } from "flowbite-vue";
import { FwbInput } from "flowbite-vue";

const selected = ref("");
const themes = ref([]);
const repoLink = ref("");
const figmaLink = ref("");
const driveLink = ref("");

// Add the api call here to initialize the themes
setTimeout(() => {
  themes.value = [
    { value: "1", name: "Theme 1" },
    { value: "2", name: "Theme 2" },
    { value: "3", name: "Theme 3" },
  ];
}, 4000);

// Submit the form data
const submit = () => {
  const formData = {
    selected: selected.value,
    repoLink: repoLink.value,
    figmaLink: figmaLink.value,
    driveLink: driveLink.value,
  };
  console.log("Form Data Submitted:", formData);
};
</script>
<template>
  <div>
    <h1 class="text-center text-3xl font-bold mb-8">Team Space</h1>

    <form class="max-w-xs mx-auto md:mx-0 grid gap-4">
      <fwb-select v-model="selected" :options="themes" label="Select a theme" />
      <fwb-input
        v-model="repoLink"
        placeholder="github.com/your-repo"
        label="repoitory link"
      /><fwb-input
        v-model="figmaLink"
        placeholder="figma.com/your-figma"
        label="figma link"
      /><fwb-input
        v-model="driveLink"
        placeholder="drive.google.com/your-drive"
        label="drive link"
      />
      <button
        @submit.prevent="submit"
        class="bg-blue-500 hover:bg-blue-400 text-white px-16 py-6 rounded-lg font-bold tracking-widest w-full basis-8"
      >
        Submit
      </button>
    </form>
  </div>
</template>
