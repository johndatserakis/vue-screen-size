import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// This is an example of loading it the global way.
// import { VueScreenSizeMixin } from '../src/index.js';
// app.mixin(VueScreenSizeMixin);

app.mount('#app');
