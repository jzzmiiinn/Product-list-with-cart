import type { CartItem } from "../types/product";

interface OrderConfirmationProps {
  cart: CartItem[];
  onStartNewOrder: () => void;
}

export function OrderConfirmation({
  cart,
  onStartNewOrder,
}: OrderConfirmationProps) {
  const orderTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center sm:p-6">
      <div className="w-full max-w-xl rounded-t-2xl bg-white p-6 sm:rounded-2xl sm:p-8">
        <img
          src="/icon-order-confirmed.svg"
          alt=""
          className="mb-6 h-12 w-12"
        />

        <h2 className="text-3xl font-bold text-rose-950">Order Confirmed</h2>

        <p className="mt-2 text-rose-500">We hope you enjoy your food!</p>

        <div className="mt-6 rounded-lg bg-rose-50 p-4">
          <ul className="divide-y divide-rose-200">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-4 py-4">
                <img
                  src={item.image.thumbnail}
                  alt={item.name}
                  className="h-12 w-12 rounded-md object-cover"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-rose-950">
                    {item.name}
                  </p>

                  <p className="mt-1 text-sm">
                    <span className="font-semibold text-red-700">
                      {item.quantity}x
                    </span>{" "}
                    <span className="text-rose-500">
                      @ ${item.price.toFixed(2)}
                    </span>
                  </p>
                </div>

                <p className="font-semibold text-rose-950">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-rose-700">Order Total</span>

            <span className="text-2xl font-bold text-rose-950">
              ${orderTotal.toFixed(2)}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onStartNewOrder}
          className="mt-6 w-full rounded-full bg-red-700 py-3 font-semibold text-white transition hover:bg-red-800"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
