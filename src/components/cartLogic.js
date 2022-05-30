import React, { useState } from "react";

const cartLogic = (WrappedComponent, cartItems) => {
  function CartLogic(props) {
    const [cartItems, setCartItems] = useState([]);

    const handleAddProduct = (product) => {
      const ProductExist = cartItems.find((item) => item.id === product.id);
      if (ProductExist) {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
              : item
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
        // console.log(cartItems);
      }
    };

    const handleRemoveProduct = (product) => {
      const ProductExist = cartItems.find((item) => item.id === product.id);
      if (ProductExist.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
              : item
          )
        );
      }
    };

    const handleResetCart = () => {
      setCartItems([]);
    };

    return (
      <WrappedComponent
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleResetCart={handleResetCart}
        {...props}
      />
    );
  }

  return CartLogic;
};

export default cartLogic;
