import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar.component";
import LandingPage from "./pages/LandingPage.component";
import Products from "./components/Products.component";
import ProductDetail from "./components/ProductDetail.component";
import NotFound from "./pages/NotFound.component";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
