import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import PrimeVue from 'primevue/config';
import router from './routes';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import 'animate.css';
import Card from 'primevue/card';
import button from 'primevue/button';
import Menu from 'primevue/menu';
import Badge from 'primevue/badge';
import Avatar from 'primevue/avatar';

Amplify.configure(outputs);

const app = createApp(App);
const pinia = createPinia();

app.component('Card', Card);
app.component('Badge', Badge);
app.component('Button', button);
app.component('Menu', Menu);
app.component('Avatar', Avatar);

app.use(router).use(PrimeVue, { unstyled: false }).use(pinia).mount('#app');
