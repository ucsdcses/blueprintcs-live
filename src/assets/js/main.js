import Vue from 'vue';
import countdown from './components/countdown';

new Vue({
    el: '#nav',
    components: {
        'countdown': countdown
    },
    data() {
        let now = new Date();
        let endTime = new Date('5/13/2018 22:00 GMT-0700');

        return {
            counting: false,
            time: endTime - now
        };
    },
    methods: {
        countdown() {
            this.counting = true;
        },
        countdownEnd() {
            this.counting = false;
        }
    }
});
