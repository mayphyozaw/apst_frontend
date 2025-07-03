import 'vant/lib/index.css';
import "./assets/css/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
// import { Tabbar, TabbarItem, Icon } from "vant";

import App from "./App.vue";
import router from "./router";
import { Icon} from '@iconify/vue';
const app = createApp(App);

app.use(createPinia());
app.component('Icon',Icon);
// app.use(Tabbar);
// app.use(TabbarItem);
// app.use(Icon);

app.use(router);

app.mount("#app");
