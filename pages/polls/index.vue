<template>
  <div>
    <h1>{{ poll.title_az }}</h1>
    <table>
      <thead>
      <tr>
        <th>Answer</th>
        <th>Vote Count</th>
        <th>Select</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="poll in polls" :key="polls.id">
        <td>{{ polls.answer_az }}</td>
        <td>{{ polls.vote_count }}</td>
        <td><input type="checkbox" v-model="selectedAnswers" :value="polls.id"></td>
      </tr>
      </tbody>
    </table>
    <button @click="submitVotes">Submit Votes</button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "polls",
  data() {
    return {
      poll: {},
      selectedAnswers: []
    };
  },
  computed: {
    ...mapGetters({polls: "module/polls/getAllPolls"}),
  },
}
</script>

<style scoped>

</style>
