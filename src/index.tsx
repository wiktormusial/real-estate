import React from "react"
import ReactDOM from "react-dom"
import Router from "./Router"
import { store } from "./store/store"
import { Provider } from "react-redux"

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("app")
)

export {}
