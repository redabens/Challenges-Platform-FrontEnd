<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import router from "../router";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <button
    data-drawer-target="logo-sidebar"
    data-drawer-toggle="logo-sidebar"
    aria-controls="logo-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div
      class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col justify-between"
    >
      <div>
        <router-link to="/dashboard" class="flex items-center ps-2.5 mb-5">
          <img
            src="../assets/logo.svg"
            class="h-6 me-3 sm:h-7"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >GDG Platform</span
          >
        </router-link>
        <ul class="space-y-2 font-medium">
          <li>
            <router-link
              to="/teamspace"
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                class="svg-icon w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                style="
                  width: 1em;
                  height: 1em;
                  vertical-align: middle;
                  fill: currentColor;
                  overflow: hidden;
                "
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M774.4 742.4c0-44.8-12.8-89.6-38.4-121.6C691.2 569.6 640 544 576 544c-38.4 0-76.8 0-115.2 0-44.8 0-83.2 12.8-121.6 38.4-44.8 32-70.4 76.8-76.8 128-6.4 57.6 0 121.6-6.4 185.6 6.4 0 19.2 6.4 25.6 6.4 76.8 19.2 147.2 38.4 224 38.4 44.8 0 96 0 140.8-6.4 38.4-6.4 76.8-19.2 115.2-32 6.4 0 6.4-6.4 6.4-12.8C774.4 838.4 774.4 787.2 774.4 742.4z"
                />
                <path
                  d="M358.4 531.2c12.8-6.4 19.2-6.4 32-12.8-38.4-38.4-57.6-76.8-57.6-128-44.8 0-89.6 0-134.4 0C172.8 390.4 147.2 396.8 128 403.2 57.6 428.8 0 499.2 0 576c0 51.2 0 102.4 0 160 0 6.4 0 6.4 6.4 12.8 51.2 12.8 102.4 25.6 153.6 32 19.2 0 44.8 6.4 64 6.4 0-12.8 0-25.6 0-38.4 0-19.2 0-38.4 6.4-57.6C249.6 614.4 294.4 563.2 358.4 531.2z"
                />
                <path
                  d="M1024 588.8c0-25.6-6.4-57.6-19.2-83.2-38.4-76.8-96-115.2-179.2-115.2-121.6 0 0 0-121.6 0 0 51.2-19.2 96-57.6 128 6.4 0 12.8 6.4 12.8 6.4 32 12.8 64 32 89.6 57.6 38.4 44.8 57.6 96 57.6 153.6 0 12.8 0 32 0 44.8 32-6.4 57.6-6.4 89.6-12.8 38.4-6.4 83.2-19.2 121.6-38.4 6.4 0 6.4-6.4 6.4-12.8C1024 684.8 1024 633.6 1024 588.8z"
                />
                <path
                  d="M518.4 537.6c83.2 0 153.6-70.4 147.2-153.6 0-83.2-70.4-147.2-147.2-147.2-83.2 0-153.6 64-153.6 147.2C371.2 467.2 435.2 537.6 518.4 537.6z"
                />
                <path
                  d="M704 371.2C723.2 377.6 742.4 384 768 384c83.2 0 153.6-70.4 147.2-153.6 0-83.2-70.4-147.2-147.2-147.2-83.2 0-153.6 64-153.6 147.2C665.6 256 697.6 307.2 704 371.2z"
                />
                <path
                  d="M256 384c25.6 0 57.6-6.4 76.8-19.2 6.4-51.2 32-96 70.4-121.6 0 0 0-6.4 0-6.4 0-83.2-70.4-147.2-147.2-147.2-83.2 0-153.6 64-153.6 147.2C102.4 313.6 172.8 384 256 384z"
                />
              </svg>
              <span class="ms-3">Team space</span>
            </router-link>
          </li>
        </ul>
      </div>

      <router-link
        to="/login"
        href="#"
        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <svg
          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
          />
        </svg>
        <span class="flex-1 ms-3 whitespace-nowrap">Log out</span>
      </router-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
