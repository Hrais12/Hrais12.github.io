import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Products() {
  const apiKey = process.env.REACT_APP_API_KEY;

  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState();

  const url = `https://keto-diet.p.rapidapi.com/?category=${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "keto-diet.p.rapidapi.com",
    },
  };
  const fetchProduct = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setProduct(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  const renderProduct = () => {
    return (
      <div className="products">
        {product.map((hit, index) => (
          <div key={index} className="productResult">
            <div className="productImg">
              <img src={hit.image} alt={hit.recipe}></img>
            </div>
            <div className="title">{hit.recipe}</div>
            <h3>{hit.product_price}</h3>

            <a href="">
              <button>Check it out</button>
            </a>
          </div>
        ))}
      </div>
    );
  };

  const renderLoading = () => {
    return <h1>Loading...</h1>;
  };

  return product ? renderProduct() : renderLoading();
}

export default Products;
