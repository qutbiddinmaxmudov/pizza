import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Page404 from './pages/Page404'

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Home} exact />
            <Route component={Page404} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
