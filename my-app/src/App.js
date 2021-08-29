import React from "react";
import Products from "./Products/Products";
import "./App.css";
import Header from "./Header/Header";
import { Route, BrowserRouter } from "react-router-dom";
import ProductDetails from "./ProductDetails/ProductDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Route exact path="/" component={Products} />
        <Route path="/product/:id" component={ProductDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
