import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { DetailsPages } from "./pages/details/DetailsPages"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:id' component={DetailsPages} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App
