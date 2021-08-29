import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { productDetails } from "../Redux/Actions";
import "./ProductDetails.css";

import { removeProductDetails } from "./../Redux/Actions";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);

  const [loading, Setloading] = useState(false);

  useEffect(() => {
    (async () => {
      Setloading(true);
      const result = await axios.get(`https://fakestoreapi.com/products/${id}`);

      console.log(result.data);
      dispatch(productDetails(result.data));
      Setloading(false);
    })();
    return () => {
      dispatch(removeProductDetails());
    };
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
        <div className="parent">
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-5">
                <img src={details.image} alt={details.title} />
              </div>
              <div class="col-lg-7">
                <h1> {details.title}</h1>

                <hr />
                <h2>
                  <span>Category : </span>
                  {details.category}
                </h2>
                <hr />
                <p>
                  <span> Discription : </span>
                  {details.description}
                </p>
                <hr />
                <h6>
                  <span>Price : </span>
                  <span className="active-price">{details.price} $</span>
                </h6>
                <hr />
                <div className="button">
                  <button>ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
