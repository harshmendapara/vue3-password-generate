import { App } from "vue";
import PasswordGenerator from "./components/PasswordGenerator.vue";

export const install = (app: App): void => {
    app.component("PasswordGenerator", PasswordGenerator);
};
