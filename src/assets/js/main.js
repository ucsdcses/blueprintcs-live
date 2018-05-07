import Vue from 'vue';
import site_data from './data';

import countdown from './components/countdown.vue';
import navbar from './components/navbar.vue';
import navSection from './components/navSection.vue';
import navLink from './components/navLink.vue';
import mainSection from './components/mainSection.vue';
import schedule from './components/schedule.vue';

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
        'mainSection': mainSection,
        'schedule': schedule
    },
    data() {
        return {
            schedule: {
                items: site_data.schedule
            }
        };
    }
});
