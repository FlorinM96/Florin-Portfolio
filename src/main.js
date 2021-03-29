import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import AppIcon from "./components/AppIcon";

import { svgSpriteDirectivePlugin } from "vue-svg-sprite";
const app = createApp(App);

app.use(
  svgSpriteDirectivePlugin,
  {
    url: "",
  } /* options */
);

app.component("AppIcon", AppIcon);

app.use(store).use(router).mount("#app");
