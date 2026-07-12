# Shopping Cart Demo - React + Zustand

## Overview

This project is a simple shopping cart application built with **React**, **TypeScript**, **Bootstrap**, **Axios**, and **Zustand**.

The purpose of this project is to demonstrate how **Zustand** can be used to manage shared state in a React application using a realistic shopping cart example.

The application integrates with an existing REST API to retrieve products and create customer orders.  The api repository can be found [here](https://github.com/kuvpatel/database-schema-to-poco)

---

## Why Zustand?

A shopping basket is a good example of shared application state because several unrelated components need access to the same data.

For example:

- Product cards add products to the basket.
- The header displays the total number of items.
- The shopping basket displays the selected products.
- The checkout process submits the basket to the API.
- Toast notifications react when products are added.

Using Zustand allows these components to share state without prop drilling or complex state management code.

---

## Technologies

- React
- TypeScript
- Vite
- Bootstrap
- Bootstrap Icons
- Axios
- Zustand

---

## Features

The application currently includes:

- Display products from the API
- Add products to the shopping basket
- Update product quantities
- Remove products from the basket
- Clear the basket
- Display basket totals
- Persist the basket after a page refresh
- Validate quantity input
- Toast notification when items are added
- Checkout using the Order API

---

## Zustand Features Demonstrated

This project demonstrates several common Zustand patterns:

- Global state management
- Store actions
- Derived state using selectors
- Persist middleware
- Cross-component state updates
- Temporary UI state (toast notifications)

---

## Project Structure

```
src
│
├── api
├── components
├── models
├── store
└── App.tsx
```

---

## Future Improvements

Possible future enhancements include:

- Customer selection before checkout
- Product category filtering
- Product search
- Order confirmation page
- Improved error handling
- Loading indicators
- Responsive UI improvements

---

## Purpose

This project is intended as a learning example to demonstrate where **Zustand** fits within a modern React application.

Rather than focusing on a complex e-commerce solution, the application keeps the business logic simple so the benefits of Zustand can be clearly understood.