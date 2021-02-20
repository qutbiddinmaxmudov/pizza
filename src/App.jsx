import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setPizzas } from "./redux/actions/pizzas";

import "./index.scss";

import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3001/pizzas")
      .then(({ data }) => dispatch(setPizzas(data)));
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
