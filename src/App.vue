
<template>
  <div id="app">
    <Sidebar />
    <div class="content">
    <router-view />
    </div>
  </div>
</template>

<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</link>

<script>
import './style.css';
import Sidebar from './components/admin/sidebar.vue';

export default {
  name: "App",
  components: {
    Sidebar
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: flex-start;
}

.content {
  margin-top: 40px;
  margin-left: 10px;
  padding: 20px;
}
</style>
