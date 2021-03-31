import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import AppIcon from "./components/AppIcon";
import VueMq from "vue3-mq";

const app = createApp(App);

app.component("AppIcon", AppIcon);
app.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity,
  },
});

app.use(store).use(router).mount("#app");
