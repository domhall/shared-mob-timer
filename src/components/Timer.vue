<template>
  <div class="timer">
    <h1>{{ time.format('mm:ss') }}</h1>
    <h1>{{ endTime.format('mm:ss') }}</h1>
    <h1>{{ timeLeft }}</h1>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Timer',
  data() {
    return {
      time: '',
      endTime: '',
      timeLeft: '',
    };
  },
  mounted() {
    this.endTime = moment().add(5, 'm');
    setInterval(() => {
      this.time = moment();
      // this.timeLeft = moment(moment.duration(this.endTime - moment())).format('mm:ss');
      this.timeLeft = moment().to(this.endTime);
    }, 10);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
