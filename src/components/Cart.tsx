import { useCart } from "../context/CartContext";
import { CartItem } from "./CartItem";

interface CartProps {
  onConfirmOrder?: () => void;
}

export function Cart({ onConfirmOrder }: CartProps) {
  const { cart, dispatch } = useCart();

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const orderTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <aside className="h-fit rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-red-700">
        Your Cart ({totalQuantity})
      </h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center py-8 text-center">
          <img
            src="/illustration-empty-cart.svg"
            alt=""
            className="mb-4 w-32"
          />
          <p className="text-sm font-medium text-rose-500">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <>
          <ul className="mt-6 divide-y divide-rose-100">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between border-t border-rose-100 pt-6">
            <span className="text-sm text-rose-700">Order Total</span>
            <span className="text-2xl font-bold text-rose-950">
              ${orderTotal.toFixed(2)}
            </span>
          </div>

          <div className="mt-6 rounded-lg bg-rose-50 p-3 text-center text-sm text-rose-900">
            <p>
              <strong>Carbon-neutral</strong> delivery
            </p>
          </div>

          <button
            type="button"
            onClick={onConfirmOrder}
            className="mt-6 w-full rounded-full bg-red-700 py-3 font-semibold text-white transition hover:bg-red-800"
          >
            Confirm Order
          </button>

          <button
            type="button"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
            className="mt-3 w-full rounded-full border border-rose-300 py-2 text-sm font-semibold text-rose-900 hover:bg-rose-50"
          >
            Clear Cart
          </button>
        </>
      )}
    </aside>
  );
}
