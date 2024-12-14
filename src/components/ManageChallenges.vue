<template>
    <h1>Manage Challenges</h1>
    <div v-for="challenge in challenges" :key="challenge.id" class="challenge-card">
      <div class="button-group">
        <div class="challenge-style">{{ challenge.name }}</div>
        <button class="button" style="margin-left: 40px;background-color:#00ca86;" @click="viewChallenge(challenge.id)">View Challenges</button>
        <button class="button" style="margin-left: 10px;background-color:#006ae2;" @click="hideChallenge(challenge.id)">Hide</button>
        <button class="button" style="margin-left: 10px;background-color:#d60000;" @click="deleteChallenge(challenge.id)">
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </div>
  </template>
  
    
  <script>
export default {
  name: "ManageChallenges",
  data() {
    return {
      challenges: [
        { id: 1, name: "Hackathon 1" },
        { id: 2, name: "Hackathon 2" },
        { id: 3, name: "Hackathon 3" },
      ],
    };
  },
  methods: {
    viewChallenge(challengeId) {
        this.$router.push({ name: 'ChallengeDetails', params: { id: challengeId } });
    },
    hideChallenge(challengeId) {
      console.log(`Hiding challenge with ID: ${challengeId}`);
    },
    deleteChallenge(challengeId) {
      console.log(`Deleting challenge with ID: ${challengeId}`);
      this.challenges = this.challenges.filter(challenge => challenge.id !== challengeId); // Remove from list
    },
  },
};
</script>
    
  <style>
  * {
    font-family: 'Roboto', sans-serif; /* Change this to your imported font */
  }
  
  .challenge-card {
    background-color: aliceblue;
    padding: 20px;
    border-radius: 20px;
    border: solid 1px;
    border-color: #4d4d4d;
    margin-bottom: 10PX;
  }
  
  .button-group {
    display: flex; /* Use flexbox to align items side by side */
    align-items: center; /* Vertically align items in the center */
  }
  
  .challenge-style {
    font-size: 25px;
    margin-right: 80px; /* Add some space between the text and the buttons */
  }
  .button{
    color: white;border: none;border-radius: 6px;padding: 8px;font-weight: bold;
  }
  </style>
  