import "./assets/main.css";
import "./api/api.js";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";
const app = createApp(App);
// Register the package
app.use(VueAwesomePaginate);

app.use(createPinia());
app.use(router);

app.mount("#app");
