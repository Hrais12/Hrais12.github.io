import "./App.css";
import React from "react";
import { useState } from "react";

// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Main from "./pages/Main";
import Categories from "./pages/Categories";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
export default function App() {
  const [selectedItems, setSelectedItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState([]);
  const [show, setShow] = useState(true);

  const addItem = (item) => {
    const itemIndex = selectedItems.findIndex(
      (existingItem) => existingItem.id === item.id
    );
    if (itemIndex !== -1) {
      setSelectedItem([...selectedItems]);

      let updateQuantity = [...quantity];
      updateQuantity[itemIndex] += 1;

      setQuantity(updateQuantity);
    } else {
      setSelectedItem([...selectedItems, item]);
      setQuantity([...quantity, 1]);
    }

    setTotal(totalPrice(item));
    setCount(count + 1);
  };

  const removeItem = (index) => {
    let updatedItems = [...selectedItems];
    let deletedItem = updatedItems.splice(index, 1);
    let updatedQuantity = [...quantity];
    // console.log(updatedQuantity[1]);

    if (updatedQuantity[index] > 1) {
      updatedQuantity[index] -= 1;
      setQuantity(updatedQuantity);
      // console.log(updatedQuantity[index]);
    } else {
      let updatedItems = [...selectedItems];
      updatedItems.splice(index, 1);
      setSelectedItem(updatedItems);
      updatedQuantity.splice(index, 1);
      setQuantity(updatedQuantity);
    }

    let deletedItemPrice = deletedItem[0].price;
    let updatedTotal = Math.round((total - deletedItemPrice) * 100) / 100;
    // console.log(deletedItem);
    setTotal(updatedTotal);
    setCount(count - 1);
  };

  const totalPrice = (item) => {
    let currentTotal = 0;
    selectedItems.forEach((item, index) => {
      currentTotal += Number(item.price) * quantity[index];
    });
    return Math.round((currentTotal += Number(item.price)) * 100) / 100;
  };

  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
    <div className="App">
      <Nav count={count} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:id" element={<Products addAction={addItem} />} />
        <Route
          path="/cart"
          element={
            <Cart
              selectedItems={selectedItems}
              total={total}
              count={count}
              remove={removeItem}
              quantity={quantity}
              action={addItem}
            />
          }
        />
      </Routes>
    </div>
  );
}
