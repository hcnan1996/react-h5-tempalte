import React from "react";
import routes from "./routes/index.js";
import store from "./store/index";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { GlobalStyle } from "./assets/style/style";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
