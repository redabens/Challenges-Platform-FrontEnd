<template>

  <h1 class="text-4xl font-bold text-gray-900 mb-4" style="margin: 30px;">{{ challengeId }} details of challenges</h1>
  
      <div v-for="challenge in challenges" :key="challenge.id"     class="flex flex-col md:flex-row gap-4 items-center border-2 rounded-lg mb-2 overflow-hidden hover:shadow-lg transition-shadow duration-150 w-full p-4"
      style="padding: 10px;"
      >
      <img
        class="max-h-full md:max-h-36"
        src="../../assets/logo.svg"
        alt="Hackathon thumbnail"
      />
        <div class="button-group">
          <div class="p-4">
            <div class="challenge-style">{{ challenge.name }}</div>
            <ul>
              <li >Start Date : 01/12/2024</li>
              <li >End Date : 15/12/2024</li>
              <li >Description</li>
            </ul>
          </div>
          <button class="button" style="margin-left: 200px; background-color: #00c8b8;" @click="deleteChallenge(challenge.id)">
            <i class="fa fa-pen"></i>Edit
          </button>

          <button class="button" style="margin-left: 10px;background-color:#d60000;" @click="deleteChallenge(challenge.id)">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
  </template>


<script>
export default {
  name: "ChallengeDetails",
  data() {
    return {
      challengeId: this.$route.params.id, // Accessing the id from the route
      challenges: [
        { id: 1, name: "Challenge 1" },
        { id: 2, name: "Challenge 2" },
        { id: 3, name: "Challenge 3" },
      ],
    };
  },
  mounted() {
    // You can fetch data or perform actions based on the id here
    console.log(`Challenge ID: ${this.challengeId}`);
  },
};
</script>