import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"
import "semantic-ui-css/semantic.min.css"
import { Routes } from "components/helpers/Routes"
import { GlobalStyles } from "components/helpers/GlobalStyles"
import { HeaderMenu } from "components/organisms/HeaderMenu"
import { HashRouter as Router } from "react-router-dom"
import { configureStore } from "ducks/store"
import { Provider as ReduxProvider } from "react-redux"
import { ThemeProvider } from "@material-ui/styles"
import { muiTheme } from "components/styles/materialUi"

const reduxStore = configureStore((window as any).REDUX_INITIAL_DATA)

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
serviceWorker.unregister()
