import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { setProducts } from "../Redux/Actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";
import { Link } from "react-router-dom";
function Products() {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await axios.get("https://fakestoreapi.com/products");
      console.log(result.data);
      dispatch(setProducts(result.data));
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <div class="spinner-grow text-danger" role="status"></div>
          <div class="spinner-grow text-warning" role="status"></div>
          <div class="spinner-grow text-info" role="status"></div>
        </div>
      ) : (
        <div className="products">
          <div class="container">
            <div class="row">
              {products.map((product) => {
                return (
                  <div
                    class="col-lg-2 offset-lg-1 col-sm-6 col-xs-12  text-center"
                    key={product.id}
                  >
                    <Link className="link" to={`/product/${product.id}`}>
                      <img src={product.image} alt={product.title} />
                      <h4> {product.title}</h4>
                      <h5>
                       
                        {product.category}
                      </h5>
                      <h6>
                        
                        {product.price} $
                      </h6>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
