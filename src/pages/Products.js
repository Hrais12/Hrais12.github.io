import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Products({ addAction }) {
  const apiKey = process.env.REACT_APP_API_KEY;

  const getRandomPrice = () => Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  console.log(getRandomPrice());

  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState();

  const url = `https://keto-diet.p.rapidapi.com/?category=${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d6369e91b2msh63e55bd5df24d19p161c07jsn73f0db26f57d",
      "X-RapidAPI-Host": "keto-diet.p.rapidapi.com",
    },
  };

  const fetchProduct = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const productsWithPrices = result.map((product) => ({
        ...product,
        price: getRandomPrice(),
      }));

      console.log(productsWithPrices);
      setProduct(productsWithPrices);
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
        {product.map((item, index) => (
          <div key={index} className="productResult">
            <div className="productImg">
              <img src={item.image} alt={item.recipe}></img>
            </div>
            <div className="productInfo1">
              <h3 className="title">{item.recipe}</h3>
              <h3> ${item.price}</h3>
              <button onClick={() => addAction(item)}>Add to cart</button>
            </div>
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
