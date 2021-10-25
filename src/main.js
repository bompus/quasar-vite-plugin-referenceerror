import { createApp } from 'vue';
import { Quasar } from 'quasar';

import App from './Broken1.vue';
// import App from './Broken2.vue';
// import App from './Working1.vue';
// import App from './Working2.vue';

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app');
