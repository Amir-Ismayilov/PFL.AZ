<template>
  <div>
    <!--        <p>{{ poll.title_az }}</p>-->
    <!--        <table>-->
    <!--          <thead>-->
    <!--          <tr>-->
    <!--            <th>Answer</th>-->
    <!--            <th>Vote Count</th>-->
    <!--            <th>Select</th>-->
    <!--          </tr>-->
    <!--          </thead>-->
    <!--          <tbody>-->
    <!--          <tr v-for="poll in polls" :key="polls.id">-->
    <!--            <td>{{ polls.answer_az }}</td>-->
    <!--            <td>{{ polls.vote_count }}</td>-->
    <!--            <td><input type="checkbox" v-model="selectedAnswers" :value="polls.id"></td>-->
    <!--          </tr>-->
    <!--          </tbody>-->
    <!--        </table>-->
    <!--        <button @click="submitVotes">Submit Votes</button>-->
    <!--    <h1>This is Polls section</h1>-->
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Polls",
  data() {
    return {};
  }
}
</script>

<style scoped>

</style>
