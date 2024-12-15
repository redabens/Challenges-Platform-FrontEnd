<!-- This page to display the hackathon information and download the resources -->

<template>
  <div class="p-4 flex flex-col gap-44">
    <div class="flex flex-col md:flex-row gap-8">
      <div>
        <h1 class="text-3xl font-semibold mb-4">
          {{ hackathon.name }}
        </h1>
        <p class="text-gray-600">
          {{ hackathon.startDate }} to {{ hackathon.endDate }}
        </p>
        <p class="mb-8 text-gray-600">
          <b>Max number of participants: </b
          >{{ hackathon.maxNumberOfParticipants }}
        </p>
        <p>{{ hackathon.overview }}</p>
        <div class="flex gap-4 mt-8 justify-between items-center">
          <p class="text-xl font-semibold">Download Full description:</p>
          <a :href="hackathon.resources" target="_blank">
            <button
              class="download-button transform active:scale-95 bg-blue-500 hover:bg-blue-400 text-white px-16 py-6 rounded-lg font-bold tracking-widest w-full basis-8"
            >
              <div class="flex justify-center items-center relative">
                <div class="svg-container">
                  <!-- Download Icon -->
                  <svg
                    class="download-icon"
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="download-arrow"
                      d="M13 9L9 13M9 13L5 9M9 13V1"
                      stroke="#F2F2F2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                      stroke="#F2F2F2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="download-loader text-white hidden"></div>
                  <!-- Checked Icon -->
                  <svg
                    class="check-svg hidden"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div class="button-copy pl-2 leading-none uppercase">
                  DOWNLOAD
                </div>
              </div>
            </button>
          </a>
        </div>
      </div>
      <!-- I hardcoded the source of the image because I didn't know how to bind from the hackathon object -->
      <img class="h-48" :src="hackathon.img" />
    </div>
    <!-- This button will route to the team creation page -->
    <router-link
      class="flex"
      :to="{ name: 'CreateTeam', params: { hackathonId: hackathon.id } }"
    >
      <fwb-button class="block w-full" size="xl" color="green"
        >Join</fwb-button
      ></router-link
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import { FwbButton } from "flowbite-vue";
import { RouterLink } from "vue-router";

const hackathon = ref({
  id: 1,
  name: "",
  overview: "",
  img: "/shuffle-05.jpg",
  resources: "https://www.example.com/resources",
  startDate: "2022-01-01",
  endDate: "2022-01-02",
  maxNumberOfParticipants: 5,
});
// I hardcoded the hackathon object, you can add the api call here
hackathon.value = {
  id: 1,
  name: "Hackathon 1",
  overview:
    "Join us for an exciting hackathon where you can showcase your skills, collaborate with others, and create innovative solutions. Whether you're a seasoned developer or just starting out, this event is the perfect opportunity to learn, network, and have fun. Don't miss out on the chance to be part of something amazing!",
  img: "/shuffle-05.jpg",
  resources: "https://www.example.com/resources",
  startDate: "2022-01-01",
  endDate: "2022-01-02",
  maxNumberOfParticipants: 5,
};
</script>
