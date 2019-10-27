import { ThemeProvider } from "@material-ui/styles"
import React from "react"
import ReactDOM from "react-dom"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"
import { GlobalStyles } from "src/components/helpers/GlobalStyles"
import { Routes } from "src/components/helpers/Routes"
import { HeaderMenu } from "src/components/organisms/HeaderMenu"
import { muiTheme } from "src/components/styles/materialUi"
import { configureStore } from "src/ducks/store"
import { register } from "./serviceWorker"

const reduxStore = configureStore(window.__REDUX_INITIAL_STATE__)

const App: React.FC = () => {
  return (
    <ReduxProvider store={reduxStore}>
      <Router>
        <ThemeProvider theme={muiTheme}>
          <GlobalStyles />
          <HeaderMenu />
          <Routes />
        </ThemeProvider>
      </Router>
    </ReduxProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
register()
