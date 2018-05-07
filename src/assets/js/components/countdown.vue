<template>
  <ul>
    <li><span class="count">{{ hours }}</span><br/>Hours</li>
    <li><span class="count">{{ minutes }}</span><br/>Minutes</li>
    <li><span class="count">{{ seconds }}</span><br/>Seconds</li>
  </ul>
</template>

<script>
const MS_SECOND = 1000;
const MS_MINUTE = 60 * MS_SECOND;
const MS_HOUR = 60 * MS_MINUTE;

export default {
  data() {
    return {
      /**
       * Total number of time (in milliseconds) for the countdown.
       * @type {number}
       */
      count: 0,

      /**
       * Define if the time is countdowning.
       * @type {boolean}
       */
      counting: false,

      /**
       * The absolute end time.
       * @type {number}
       */
      endTime: 0,
    };
  },

  props: {
    /**
     * Generate the current time of a specific time zone.
     */
    now: {
      type: Function,
      default: () => Date.now(),
    },

    /**
     * Total number of time (in milliseconds) for the countdown.
     */
    time: {
      type: Number,
      default: 0,
      required: true,
      validator: value => value >= 0,
    },
  },

  computed: {
    hours() {
      return Math.floor(this.count / MS_HOUR);
    },

    minutes() {
      return Math.floor((this.count % MS_HOUR) / MS_MINUTE);
    },

    seconds() {
      return Math.floor((this.count % MS_MINUTE) / MS_SECOND);
    },
  },

  created() {
    this.init();
  },

  mounted() {
    window.addEventListener('focus', (this.onFocus = this.update.bind(this)));
  },

  beforeDestroy() {
    window.removeEventListener('focus', this.onFocus);
    clearTimeout(this.timeout);
  },

  watch: {
    time() {
      this.init();
    },
  },

  methods: {
    /**
     * Initialize count.
     */
    init() {
      const { time } = this;

      if (time > 0) {
        this.count = time;
        this.endTime = this.now() + time;

        this.$nextTick(() => {
          this.start();
        });
      }
    },

    /**
     * Start countdown.
     * @public
     */
    start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.step();
    },

    /**
     * Step to countdown.
     * @private
     */
    step() {
      if (!this.counting) {
        return;
      }

      if (this.count > 0) {

        this.timeout = setTimeout(() => {
          this.count -= MS_SECOND;
          this.step();
        }, MS_SECOND);

      } else {
        this.count = 0;
        this.stop();
      }
    },

    /**
     * Stop the countdown.
     * @public
     */
    stop() {
      this.counting = false;
      this.timeout = undefined;
    },

    /**
     * Update the count.
     * @private
     */
    update() {
      if (this.counting) {
        this.count = Math.max(0, this.endTime - this.now());
      }
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '../../sass/global'

  ul
    display: flex
    justify-content: space-around
    margin: 0
    padding: 1rem 0
    list-style: none
    text-align: center
    background: $darkblue

  li
    line-height: 2em

  .count
    font-size: 1.5em
</style>
