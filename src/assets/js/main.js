import Vue from 'vue';
import site_data from './data';

import countdown from './components/countdown.vue';
import navbar from './components/navbar.vue';
import navSection from './components/navSection.vue';
import navLink from './components/navLink.vue';
import box from './components/box.vue';
import schedule from './components/schedule.vue';
import prizes from './components/prizes.vue';
import shirts from './components/shirts.vue';

const nav = new Vue({
    el: '#nav',
    components: {
        'countdown': countdown,
        'navbar': navbar,
        'navSection': navSection,
        'navLink': navLink,
    },
    data() {
        let now = new Date();

        return {
        	countdown: {
            	counting: false,
            	time: site_data.eventEndTime - now
            },
            navLink: {
            	links: site_data.navLinks
            }
        };
    }
});

const main = new Vue({
    el: '#main',
    components: {
        'box': box,
        'schedule': schedule,
        'prizes': prizes,
        'shirts': shirts
    },
    data() {
        return {
            schedule: site_data.schedule,
            prizes: site_data.prizes,
            shirts: site_data.shirts
        };
    }
});
