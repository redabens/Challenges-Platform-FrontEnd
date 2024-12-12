<script setup>
import { FwbBadge } from "flowbite-vue";
import { FwbButton } from "flowbite-vue";
</script>
<template>
  <div
    class="flex md:flex-row flex-col gap-4 items-center border-2 rounded-lg mb-2 overflow-hidden hover:shadow-lg transition-shadow duration-150"
  >
    <img class="max-h-full md:max-h-36" src="../assets/shuffle-05.jpg" alt="" />
    <div
      class="flex flex-col md:flex-row gap-4 md:gap-0 justify-between p-4 w-full items-center"
    >
      <div class="max-w-[80%]">
        <h2 class="text-xl font-bold mb-2">{{ name }}</h2>
        <p class="text-sm text-gray-700 mb-2">
          {{ description }}
        </p>
        <fwb-badge :type="status ? 'green' : 'red'" class="w-fit">{{
          status ? "registered" : "not registered"
        }}</fwb-badge>
      </div>
      <div>
        <router-link
          :to="
            hackathon
              ? { name: 'HackathonDetails', params: { id: hackathon.id } }
              : '#'
          "
        >
          <fwb-button color="default" size="md"
            >More details</fwb-button
          ></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HackathonCard",
  props: {
    name: String,
    status: Boolean,
    description: String,
    hackathon: {
      id: Number,
      required: true,
    },
  },
};
</script>
