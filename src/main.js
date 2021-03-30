import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import AppIcon from "./components/AppIcon";

const app = createApp(App);

app.component("AppIcon", AppIcon);

app.use(store).use(router).mount("#app");
