const MS_SECOND = 1000;
const MS_MINUTE = 60 * MS_SECOND;
const MS_HOUR = 60 * MS_MINUTE;

export default {
    data() {
        return {
            counting: false,
            count: 0
            endTime: 0,
        };
    },
    props: {
        now: {
            type: Function,
            default: () => Date.now()
        }
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
        }
    },
    template: `
        <ul class="countdown">
            <li>{{ hours }} Hours</li>
            <li>{{ minutes }} Minutes</li>
            <li>{{ seconds }} Seconds</li>
        </ul>
    `,
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
        start() {
            if (this.counting) {
                return;
            }

            this.counting = true;
            this.step();
        },
        pause() {
            if (!this.counting) {
                return;
            }

            this.counting = false;
        },
        step() {
            if (!this.counting) {
                return;
            }
        }
    }
}

