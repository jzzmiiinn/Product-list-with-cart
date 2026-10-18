# Product List with Cart

A responsive product list and shopping cart built as a [Frontend Mentor](https://www.frontendmentor.io/) challenge using React, TypeScript, and Tailwind CSS.

The project lets users browse desserts, add products to their cart, manage quantities, and confirm their orders.

## Features

- Browse a list of dessert products with responsive images.
- Add products to the cart.
- Increase and decrease item quantities.
- Remove individual products from the cart.
- View cart quantities and order totals.
- Display an empty-cart state.
- Confirm an order and view an order confirmation modal.
- Start a new order after confirmation.
- Responsive layout for mobile, tablet, and desktop screens.

## Built With

- React
- TypeScript
- Tailwind CSS
- Context API
- `useReducer`
- Vite

## What I Learned

While building this project, I practiced:

- Managing complex state with `useReducer`.
- Sharing state across components with Context API.
- Defining TypeScript interfaces and action types.
- Using array methods such as `map()`, `find()`, `filter()`, and `reduce()`.
- Building reusable React components.
- Calculating cart quantities, item subtotals, and order totals.
- Creating responsive layouts with Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jzzmiiinn/Product-list-with-cart
   ```

2. Navigate to the project directory:

   ```bash
   cd Product-list-with-cart
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

## Project Structure

```text
src/
├── components/
│   ├── Cart.tsx
│   ├── CartItem.tsx
│   ├── OrderConfirmation.tsx
│   ├── ProductCard.tsx
│   └── ProductList.tsx
├── context/
│   └── CartContext.tsx
├── data/
│   └── products.ts
├── reducers/
│   └── cartReducer.ts
├── types/
│   └── product.ts
├── App.tsx
├── main.tsx
└── index.css
```

*The structure may vary depending on your final implementation.*

## State Management

The cart uses React's Context API and `useReducer` to share and manage state.

Supported actions include:

- `ADD_PRODUCT`
- `INCREASE_QUANTITY`
- `DECREASE_QUANTITY`
- `REMOVE_PRODUCT`
- `CLEAR_CART`

This approach keeps cart update logic in one place and allows components to access shared state without passing cart props through every component.

## Challenge

This project is based on the Product List with Cart challenge from Frontend Mentor.

Challenge: https://www.frontendmentor.io/

## Author

**Yasmin Ali**

- GitHub: https://github.com/jzzmiiinn

## License

This project was created for learning and practice as part of a Frontend Mentor challenge.
