<template>
  <div id="app">
    <stopwatch></stopwatch>
    <div class="timeline">
      <template v-for="entry in entries">
        <entry
          :start-time="entry.startTime"
          :end-time="entry.endTime"
        >
        </entry>
      </template>
    </div>
  </div>
</template>

<script>
import Stopwatch from './components/Stopwatch';
import Entry from './components/Entry';
import store from './vuex/store';
import { getEntries } from './vuex/getters';

export default {
  components: {
    Stopwatch,
    Entry,
  },

  vuex: {
    getters: {
      entries: getEntries,
    },
  },

  store,
};
</script>

<style lang="scss">
@import "./variables";
   
// Micro Reset
*, *:before, *:after {
  box-sizing: border-box;
}

// Utility Classes
.hidden {
  display: none;
}

// Container styles

body {
  background: $egg;
  padding: $rhythmBase * 2;
}

#app {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
}

.timeline {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: $rhythmBase / 4;
    background-color: $greyLight;
    left: 50%;
    height: calc(100% - #{$rhythmBase});
    transform: translateX(-50%);
  }
}
</style>
