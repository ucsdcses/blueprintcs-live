const MS_SECOND = 1000;
const MS_MINUTE = 60 * MS_SECOND;
const MS_HOUR = 60 * MS_MINUTE;
const MS_DAY = 24 * MS_HOUR;

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
    /**
     * Remaining days.
     * @returns {number}
     */
    days() {
      return Math.floor(this.count / MS_DAY);
    },

    /**
     * Remaining hours.
     * @returns {number}
     */
    hours() {
      return Math.floor((this.count % MS_DAY) / MS_HOUR);
    },

    /**
     * Remaining minutes.
     * @returns {number}
     */
    minutes() {
      return Math.floor((this.count % MS_HOUR) / MS_MINUTE);
    },

    /**
     * Remaining seconds.
     * @returns {number}
     */
    seconds() {
      return Math.floor((this.count % MS_MINUTE) / MS_SECOND);
    },
  },

  render(createElement) {
    return createElement('ul', this.$scopedSlots.default ? [
      this.$scopedSlots.default({
        days: this.days,
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds,
      }),
    ] : this.$slots.default);
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
     * Start to countdown.
     * @public
     * @emits Countdown#countdownstart
     */
    start() {
      if (this.counting) {
        return;
      }

      /**
       * Countdown start event.
       * @event Countdown#countdownstart
       */
      this.$emit('countdownstart');

      this.counting = true;
      this.step();
    },

    /**
     * Pause countdown.
     * @public
     * @emits Countdown#countdownpause
     */
    pause() {
      if (!this.counting) {
        return;
      }

      /**
       * Countdown pause event.
       * @event Countdown#countdownpause
       */
      this.$emit('countdownpause');

      this.counting = false;
    },

    /**
     * Step to countdown.
     * @private
     * @emits Countdown#countdownprogress
     */
    step() {
      if (!this.counting) {
        return;
      }

      /**
       * Countdown progress event.
       * @event Countdown#countdownprogress
       */
      this.$emit('countdownprogress', {
        days: this.days,
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds,
      });

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
     * @emits Countdown#countdownend
     */
    stop() {
      this.counting = false;
      this.timeout = undefined;

      /**
       * Countdown end event.
       * @event Countdown#countdownend
       */
      this.$emit('countdownend');
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
