<script setup></script>
<template>
  <header class="p-4 pb-0 flex justify-end">
    <!-- The user image will route the user profile page epending on his Id -->
    <router-link :to="userId"
      ><img src="../assets/icons/user-icon.svg" alt="" class="w-12"
    /></router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    // get the user id from the store
    userId() {
      return `/user/${this.$store.state.user.id}`;
    },
  },
};
</script>
