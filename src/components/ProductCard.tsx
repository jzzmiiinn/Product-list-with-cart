import type { Product } from "../types/product";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { cart, dispatch } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <article className="group">
      <div className="relative">
        <picture>
          <source media="(max-width: 767px)" srcSet={product.image.mobile} />
          <source media="(max-width: 1023px)" srcSet={product.image.tablet} />
          <img
            src={product.image.desktop}
            alt={product.name}
            className={`w-full rounded-xl object-cover ${
              cartItem
                ? "border-2 border-red-700"
                : "border-2 border-transparent"
            }`}
          />
        </picture>

        {cartItem ? (
          <div className="absolute bottom-0 left-1/2 flex w-[170px] -translate-x-1/2 translate-y-1/2 items-center justify-between rounded-full border border-red-700 bg-red-700 px-3 py-3 text-sm font-semibold text-white">
            <button
              type="button"
              aria-label={`Decrease ${product.name} quantity`}
              onClick={() =>
                dispatch({
                  type: "DECREASE_QUANTITY",
                  payload: product.id,
                })
              }
              className="flex h-5 w-5 items-center justify-center rounded-full border border-white hover:bg-white hover:text-red-700"
            >
              −
            </button>

            <span>{cartItem.quantity}</span>

            <button
              type="button"
              aria-label={`Increase ${product.name} quantity`}
              onClick={() =>
                dispatch({
                  type: "INCREASE_QUANTITY",
                  payload: product.id,
                })
              }
              className="flex h-5 w-5 items-center justify-center rounded-full border border-white hover:bg-white hover:text-red-700"
            >
              +
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                payload: product,
              })
            }
            className="absolute bottom-0 left-1/2 flex w-[170px] -translate-x-1/2 translate-y-1/2 items-center justify-center gap-2 rounded-full border border-rose-400 bg-white px-4 py-3 text-sm font-semibold text-rose-900 transition hover:border-red-700 hover:text-red-700"
          >
            <img src="/icon-add-to-cart.svg" alt="" className="h-5 w-5" />
            Add to Cart
          </button>
        )}
      </div>

      <div className="mt-8">
        <p className="text-sm text-rose-500">{product.category}</p>
        <h2 className="mt-1 font-semibold text-rose-900">{product.name}</h2>
        <p className="mt-1 font-semibold text-red-700">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}
