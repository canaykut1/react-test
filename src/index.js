import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
// import * as actions from './redux/actions'
import { Provider } from "react-redux";
//test comment
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={(<div>Loading...</div>)}>
      <App />
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

// store.dispatch(actions.todo_add("Buy a chair") )
// store.dispatch(actions.todo_add("Buy food") )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
