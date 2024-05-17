import React from "react";

import { Link } from "react-router-dom";

export default function Categories(props) {
  const data = [
    {
      id: 1,
      category: "Breakfast Recipes",
      thumbnail:
        "https://s3.us-west-004.backblazeb2.com/encurate/static/keto/1/Breakfast_Recipes-Breakfast.png",
    },
    {
      id: 2,
      category: "Appetizer and Snacks Recipes",
      thumbnail:
        "https://s3.us-west-004.backblazeb2.com/encurate/static/keto/1/Appetizer_and_Snacks_Recipes-Appetizer_and_Snacks.png",
    },
    {
      id: 3,
      category: "Beef Recipes",
      thumbnail:
        "https://s3.us-west-004.backblazeb2.com/encurate/static/keto/1/Beef_Recipes-Beef.png",
    },
    {
      id: 5,
      category: "Poultry Recipes",
      thumbnail:
        "https://s3.us-west-004.backblazeb2.com/encurate/static/keto/1/Poultry_Recipes-Poultry.png",
    },
    {
      id: 6,
      category: "Fish and Seafood Recipes",
      thumbnail:
        "https://s3.us-west-004.backblazeb2.com/encurate/static/keto/1/Fish_and_Seafood_Recipes-Fish_and_Seafood_.png",
    },
    {
      id: 7,
      category: "Soups and Stews Recipes",
      thumbnail:
        "https://s3.us-west-004.backblazeb2.com/encurate/static/keto/1/Soups_and_Stews_Recipes-Soups_and_Stews.png",
    },
    {
      id: 8,
      category: "Desserts Recipes",
      thumbnail:
        "https://s3.us-west-004.backblazeb2.com/encurate/static/keto/1/Desserts_Recipes-Desserts.png",
    },
    {
      id: 9,
      category: "Vegan and Vegetarian Recipes",
      thumbnail:
        "https://s3.us-west-004.backblazeb2.com/encurate/static/keto/1/Vegan_and_Vegetarian_Recipes-Vegan_and_Vegetarian.png",
    },
    {
      id: 10,
      category: "Keto Kitchen Staples And Dips Recipes",
      thumbnail:
        "https://s3.us-west-004.backblazeb2.com/encurate/static/keto/1/Keto_Kitchen_Staples_And_Dips_Recipes-Keto_Kitchen_Staples_And_Dips_.png",
    },
    {
      id: 11,
      category: "Drinks And Smoothies",
      thumbnail:
        "https://s3.us-west-004.backblazeb2.com/encurate/static/keto/1/Drinks_And_Smoothies-Drinks_And_Smoothies.png",
    },
  ];

  return (
    <>
      <div className="list">
        <h2>Categories</h2>
        <hr></hr>
        <div className="result1">
          {data.map((item) => {
            const { id, category, thumbnail } = item;

            return (
              <div className="result">
                <Link key={id} to={`/product/${id}`}>
                  <img src={thumbnail}></img>
                  <h2>{category}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
