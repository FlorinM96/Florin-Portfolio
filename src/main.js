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
    mobile: 450,
    tablet: 1250,
    desktop: Infinity,
  },
});

app.use(store).use(router).mount("#app");
