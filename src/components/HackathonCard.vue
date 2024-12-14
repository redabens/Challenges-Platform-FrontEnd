<!-- This component can be used on all the participant and admin seciton, just modify on the routing of the button-->
<script setup>
import { FwbBadge, FwbButton } from "flowbite-vue";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

// Define props
defineProps({
  name: String,
  status: Boolean,
  description: String,
  hackathon: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex flex-col md:flex-row gap-4 items-center border-2 rounded-lg mb-2 overflow-hidden hover:shadow-lg transition-shadow duration-150"
  >
    <img
      class="max-h-full md:max-h-36"
      src="../assets/shuffle-05.jpg"
      alt="Hackathon thumbnail"
    />
    <div
      class="flex flex-col md:flex-row gap-4 md:gap-0 justify-between p-4 w-full items-center"
    >
      <div class="max-w-[80%]">
        <h2 class="text-xl font-bold mb-2">{{ name }}</h2>
        <p class="text-sm text-gray-700 mb-2">
          {{ description }}
        </p>
        <FwbBadge :type="status ? 'green' : 'red'" class="w-fit">
          {{ status ? "Registered" : "Not Registered" }}
        </FwbBadge>
      </div>
      <div>
        <RouterLink
          :to="
            hackathon
              ? {
                  name: 'Hackathon',
                  params: { hackathonId: hackathon.id },
                }
              : null
          "
        >
          <FwbButton color="default" size="md">More Details</FwbButton>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
