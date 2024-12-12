<script setup>
// import { ref, onMounted } from "vue";
import HackathonCard from "../../components/HackathonCard.vue";

// This is a dummy data for now. You can replace this with a real API call.
const hackathons = [
  {
    id: 1,
    name: "Hackathon 1",
    description:
      "lorem imposadf kj lkjlkj  faldskjf;al asdkjf;lkajd f;dasjf;kdsaj ffadkjf ",
    status: true,
  },
  {
    id: 2,
    name: "Hackathon 2",
    description:
      "lorem imposadf kj lkjlkj  faldskjf;al asdkjf;lkajd f;dasjf;kdsaj ffadkjf ",
    status: false,
  },
  {
    id: 3,
    name: "Hackathon 3",
    description:
      "lorem imposadf kj lkjlkj  faldskjf;al asdkjf;lkajd f;dasjf;kdsaj ffadkjf ",
    status: true,
  },
  {
    id: 4,
    name: "Hackathon 4",
    description:
      "lorem imposadf kj lkjlkj  faldskjf;al asdkjf;lkajd f;dasjf;kdsaj ffadkjf ",
    status: false,
  },
];

// const challenges = ref([]);

// onMounted(async () => {
//   const response = await fetch("https://your-backend-api.com/challenges");
//   challenges.value = await response.json();
// });
</script>
<template>
  <div class="p-4 sm:ml-64">
    <div>
      <ul v-if="hackathons">
        <li v-for="hackathon in hackathons" :key="hackathon.id">
          <HackathonCard
            :name="hackathon.name"
            :status="hackathon.status"
            :description="hackathon.description"
            :id="hackathon.id"
          />
        </li>
      </ul>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hackathons",
  components: {
    HackathonCard,
  },
};
</script>
