<template>
  <div transition="expand">
    <div class="interval"></div>
    <div
      class="entry"
      data-time="{{ formatedStartTime }}"
      data-duration="{{ duration }}"
    >
      <div
        class="dot"
        :style="{ transform: 'scale(' + diameter + ')' }"
        :class="{ isActive: isActive }"
      >
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: [
    'startTime',
    'endTime',
  ],

  computed: {
    // Total duration of entry
    duration() {
      if (!this.isActive) {
        return '';
      }
      return moment(this.endTime - this.startTime).format('m:ss');
    },

    // Total duration of entry
    formatedStartTime() {
      if (!this.isActive) {
        return '';
      }
      return moment(this.startTime).format('H:mm');
    },

    // is this entry non empty?
    isActive() {
      if (this.startTime === -1) {
        return false;
      }
      return true;
    },

    // Diameter of dot
    diameter() {
      if (!this.isActive) {
        return 0.3;
      }

      let pulse = 0;

      if (moment(this.endTime - this.startTime).format('s') % 2 === 0) {
        pulse = 0.15;
      }

      return 1 + pulse;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../variables";

// animations
.expand-transition {
  transition: all .3s ease;
  height: $rhythmBase * 10;

  .entry {
    transition: all .3s ease;
    opacity: 1;
  }
}

.expand-enter, .expand-leave {
  height: 0;

  .entry {
    opacity: 0;
  }
}

// interval between entries
.interval {
  height: $rhythmBase * 8;
  position: relative;
}

// dot with timespan
.entry {
  position: relative;
  font-family: $serif;
  letter-spacing: 1px;
  color: $greyDark;

  &:before, &:after {
    position: absolute;
    width: $rhythmBase * 8;
    top: 50%;
  }

  // This is the start time left to the dot
  &:before {
    content: attr(data-time);
    transform: translate(#{$rhythmBase * -11}, -58%);
    text-align: right;
  }

  // This is the duration right to the dot
  &:after {
    content: attr(data-duration);
    text-align: left;
    transform: translate(#{$rhythmBase * 5}, -58%);
  }
}

.dot {
  width: $dotSize * 4;
  height: $dotSize * 4;
  border-radius: 50%;
  background: $pink;
  transition: transform 0.2s ease-in-out;
}

</style>
