<script setup>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
</script>
<template>
  <div class="layout">
    <Sidebar />
    <Header />
    <div class="p-4 sm:ml-64">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  components: {
    Sidebar,
    Header,
  },
};
</script>
