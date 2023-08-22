<template>
<!--  <div>-->
<!--    <h1>{{ poll.title_az }}</h1> &lt;!&ndash; Название опроса &ndash;&gt;-->
<!--    <table>-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th>Answer</th>-->
<!--        <th>Vote Count</th>-->
<!--        <th>Select</th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--      <tr v-for="answer in poll.answers" :key="answer.id">-->
<!--        <td>{{ answer.answer_az }}</td>-->
<!--        <td>{{ answer.vote_count }}</td>-->
<!--        <td><input type="checkbox" v-model="selectedAnswers" :value="answer.id"></td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->
<!--    <button @click="submitVotes">Submit Votes</button>-->
<!--  </div>-->
</template>

<script>
export default {
  name: "polls",
  // data() {
  //   return {
  //     poll: {},
  //     selectedAnswers: []
  //   };
  // },
  methods: {

    // async asyncData({ $axios }) {
    //   let response = await $axios.get('http://192.168.0.191:8000/api/polls');
    //   return {
    //     poll: response.data.data
    //   };
    // },


    async submitVotes() {
      try {
        let response = await this.$axios.post('http://192.168.0.191:8000/api/votes', {
          answers: this.selectedAnswers
        });
        if(response.data.message === 200) {
          // Обновите голоса или выполните другие действия
        }
      } catch(error) {
        console.error("Error submitting votes:", error);
      }
    }
  }
}
</script>

<style scoped>

</style>
