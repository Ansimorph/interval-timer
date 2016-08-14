<template>
  <a class="stopwatch" @click="toggleCountdown" href="#">
    {{ isRunning ? 'Stop' : 'Start' }}
  </a>
</template>

<script>
import { addEntry, setStartTime, setEndTime } from '../vuex/actions';

const isRunning = false;
let duration;
let interval;

export default {
  data() {
    return {
      isRunning,
      duration,
      interval,
    };
  },

  vuex: {
    actions: {
      addEntry,
      setEndTime,
      setStartTime,
    },
  },

  methods: {
    toggleCountdown() {
      if (this.isRunning) {
        this.stopCountdown();
      } else {
        this.startCountdown();
      }
    },

    startCountdown() {
      this.isRunning = true;
      clearInterval(this.interval);
      // initialize first entry
      this.addEntry(Date.now(), Date.now(), -1);
      // Start updating duration for first entry
      this.duration = setInterval(() => {
        this.setEndTime(0, Date.now());
      }, 1000);
    },

    stopCountdown() {
      this.isRunning = false;
      clearInterval(this.duration);
      this.setEndTime(0, Date.now());
    },
  },

};
</script>

<style lang="scss" scoped>
@import "../variables";

.stopwatch {
  margin: 0 auto;
  color: $egg;
  background-color: $pink;
  text-align: center;
  font-family: $serif;
  font-size: $veryBigFont;
  letter-spacing: 3px;
  display: block;
  text-decoration: none;
  border-radius: 50%;
  width: $rhythmBase * 23;
  height: $rhythmBase * 23;
  line-height: $rhythmBase * 23;
}

</style>
