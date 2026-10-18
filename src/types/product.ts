export interface Product {
  id: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export type CartAction =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "INCREASE_QUANTITY"; payload: number }
  | {
      type: "DECREASE_QUANTITY";
      payload: number;
    }
  | { type: "REMOVE_PRODUCT"; payload: number }
  | { type: "CLEAR_CART" };
