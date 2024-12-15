<!-- src/components/Sidebar.vue -->
<template>
  <div class="welcome-bar flex items-center gap-2">
  <img src="../../assets/logo.svg" alt="Logo" class="h-8 w-8" />
  <span>Welcome, Admin</span>
</div>
  <div class="sidebar">
    <ul style="padding: 20%;">
      <li style="margin-bottom: 40px;"><router-link to="/manage-challenges">Manage Challenges</router-link></li>
      <li style="margin-bottom: 40px;"><router-link to="/manage-teams">Manage teams</router-link></li>
      <li style="margin-bottom: 40px;"><router-link to="/manage-submissions">Manage Submissions</router-link></li>
      <li style="margin-bottom: 40px;"><router-link to="/logout">LogOut</router-link></li>
      <!-- Add more links as needed -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif; /* Change this to your imported font */
}

.sidebar {
  width: 200px;
  height: 100vh;
  background-color: #333;
  color: white;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin: 60px 0;
}

.sidebar a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}
.welcome-bar {
    background-color: aliceblue;
    color: black;
    padding: 20px;
    position: absolute;
    width: 100%;
}
</style>
