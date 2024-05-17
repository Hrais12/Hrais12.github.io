import React from "react";

function Cart({ selectedItems, total, count, remove, quantity, action }) {
  return (
    <div className="selectedItems">
      <h1>Selected Items</h1>

      <div className="screen">
        {selectedItems.map((item, index) => (
          <div key={index} className="item">
            <li className="itemInfo">
              <img src={item.image} alt={item.name} />
              <div className="info">
                <span className="name">
                  <b>{item.name} </b> <br></br>
                  <br></br>
                  <button onClick={() => action(item)} className="plus">
                    +
                  </button>
                  <b>Quantity: {quantity[index]}</b>
                  <button onClick={() => action(item, -1)} className="minus">
                    -
                  </button>
                </span>
                <span className="price">
                  <b>$ {item.price}</b>
                  <br></br>
                  <button onClick={() => remove(index)}>Remove</button>
                </span>
              </div>
            </li>
          </div>
        ))}
        <div className="checkout">
          <b>
            ${total} Subtotal {count} Items
          </b>
          <button className="checkoutBtn">Check out</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
