import type { CartItem as CartItemType } from "../types/product";
import { useCart } from "../context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { dispatch } = useCart();

  return (
    <li className="flex items-center gap-3 py-4">
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold text-rose-900">{item.name}</h3>

        <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
          <span className="font-semibold text-red-700">{item.quantity}x</span>

          <span className="text-rose-500">@ ${item.price.toFixed(2)}</span>

          <span className="font-semibold text-rose-900">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>

      <button
        type="button"
        aria-label={`Remove ${item.name} from cart`}
        onClick={() =>
          dispatch({
            type: "REMOVE_PRODUCT",
            payload: item.id,
          })
        }
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-rose-300 text-rose-500 hover:border-rose-900 hover:text-rose-900"
      >
        ×
      </button>
    </li>
  );
}
