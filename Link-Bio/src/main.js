import { createApp, defineAsyncComponent } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/Router";
import "bootstrap/dist/css/bootstrap.min.css"; // นำเข้า CSS ของ Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);

app.component(
  "ssvv",
  defineAsyncComponent(() => import("./components/svg/one.vue"))
);
app.component(
  "btn_macosx",
  defineAsyncComponent(() => import("./components/btn_macosx.vue"))
);
app.component(
  "NavBar1",
  defineAsyncComponent(() => import("./components/NavBar_I.vue"))
);
app.component(
  "WAVV",
  defineAsyncComponent(() => import("./components/WavBar.vue"))
);
app.component(
  "sss",
  defineAsyncComponent(() => import("./components/s.vue"))
);


app.use(router);
app.mount("#app");
