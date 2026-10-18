import { useState } from "react";
import { Products } from "./data/products";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import { OrderConfirmation } from "./components/OrderConfirmation";
import { useCart } from "./context/CartContext";

function App() {
  const { cart, dispatch } = useCart();
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const startNewOrder = () => {
    dispatch({ type: "CLEAR_CART" });
    setIsOrderConfirmed(false);
  };

  return (
    <main className="min-h-screen bg-rose-50 px-4 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_380px]">
        <ProductList products={Products} />
        <Cart onConfirmOrder={() => setIsOrderConfirmed(true)} />{" "}
      </div>

      {isOrderConfirmed && (
        <OrderConfirmation cart={cart} onStartNewOrder={startNewOrder} />
      )}
    </main>
  );
}

export default App;
