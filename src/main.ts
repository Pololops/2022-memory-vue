import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/styles/_reset.css";
import "./assets/styles/_vars.scss";
import "./assets/styles/global.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#root");
