
  <template>
      <div class="flex items-center gap-4">
            <p class="text-4xl font-bold text-gray-900 mb-4" style="margin: 30px;">Manage Challenges</p>
      </div>
    
      
    <div v-for="challenge in challenges" :key="challenge.id"     class="flex flex-col md:flex-row gap-4 items-center border-2 rounded-lg mb-2 overflow-hidden hover:shadow-lg transition-shadow duration-150"
    style="padding: 10px;"
    >
    <img
      class="max-h-full md:max-h-36"
      src="../../assets/shuffle-05.jpg"
      alt="Hackathon thumbnail"
    />
      <div class="button-group">
        <div class="challenge-style">{{ challenge.name }}</div>
        <button class="button" style="margin-left: 40px;background-color:#00c8b8;" @click="viewChallenge(challenge.name)">View Challenges</button>
        <button class="button" style="margin-left: 10px;background-color:#006ae2;" @click="hideChallenge(challenge.id)">Hide</button>
        <button class="button" style="margin-left: 10px;background-color:#d60000;" @click="deleteChallenge(challenge.id)">
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </div>

    <button
      class="absolute bottom-8 right-8 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
      @click="addChallenge()"
    >
      <span class="text-2xl font-bold"> + add a hackathon </span>
    </button>

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
        this.$router.push({ name: 'admin/ChallengeDetails', params: { id: challengeId } });
    },
    hideChallenge(challengeId) {
      console.log(`Hiding challenge with ID: ${challengeId}`);
    },
    deleteChallenge(challengeId) {
      console.log(`Deleting challenge with ID: ${challengeId}`);
      this.challenges = this.challenges.filter(challenge => challenge.id !== challengeId); // Remove from list
    },
    addChallenge() {
        this.$router.push({ name: 'AddChallenge'});
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
  