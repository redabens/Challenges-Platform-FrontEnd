<script setup>
import Sidebar from "./Sidebar.vue";
</script>
<template>
  <div class="layout">
    <Sidebar />
    <div class="content" @close="">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  components: {
    Sidebar,
  },
};
</script>
