import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import App from "./src/App";
import configureStore from "./src/store/configureStore";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
