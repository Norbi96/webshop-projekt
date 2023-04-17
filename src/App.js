import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContentLayout from './Component/ContentLayout';
import Home from './Menu/Home';
import About from './Menu/About';
import Products from './Menu/Products';
import Contact from './Menu/Contact';
import Projects from './Menu/Projects';
import { todosContext } from './Menu/TodoList/TodosContext';
import ProductDetails from './Menu/ProductDetails/ProductDetails';
import DeleteProduct from './Menu/ProductDetails/DeleteProduct';
import { productContext } from './Menu/ProductDetails/ProductContext';
import EditProduct from './Menu/ProductDetails/EditProduct';
import { cartOpen } from './Component/Cart/CartOpen';
import { cartContext } from './Component/Cart/cartContext';
import Cart from './Component/Cart/Cart';
import { cartTotalContext } from './Component/Cart/CartTotalContext';
import { nameContext } from './Menu/ProductDetails/NameContext';
import { priceContext } from './Menu/ProductDetails/PriceContext';
import { amountContext } from './Menu/ProductDetails/AmountContext';
import { imgContext } from './Menu/ProductDetails/ImgContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ContentLayout />,
    errorElement: <div><h1>404 a keresett oldal nem talalhato</h1></div>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:id',
        element: <ProductDetails />
      },
      {
        path: '/delete-product/:id',
        element: <DeleteProduct />
      },
      {
        path: '/edit-product/:id',
        element: <EditProduct />
      },
      {
        path: '/cart/:id',
        element: <Cart />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ],
  }
])
function App() {


  const [todos, setTodos] = useState([])
  const [products, setProducts] = useState([
    { id: 1, name: "Teszt 1", price: 3000, quantity: 18, imgsrc: 'https://picsum.photos/250/200' },
    { id: 2, name: "Teszt 2", price: 4000, quantity: 18, imgsrc: 'https://picsum.photos/250/200' },
    { id: 3, name: "Teszt 3", price: 2000, quantity: 38, imgsrc: 'https://picsum.photos/250/200' },
    { id: 4, name: "Teszt 4", price: 1000, quantity: 88, imgsrc: 'https://picsum.photos/250/200' },
    { id: 5, name: "Teszt 5", price: 5000, quantity: 58, imgsrc: 'https://picsum.photos/250/200' },
    { id: 6, name: "Teszt 6", price: 5000, quantity: 68, imgsrc: 'https://picsum.photos/250/200' },
    { id: 7, name: "Teszt 7", price: 2000, quantity: 78, imgsrc: 'https://picsum.photos/250/200' },
    { id: 8, name: "Teszt 8", price: 9000, quantity: 88, imgsrc: 'https://picsum.photos/250/200' },
    { id: 9, name: "Teszt 9", price: 54000, quantity: 98, imgsrc: 'https://picsum.photos/250/200' },
    { id: 10, name: "Teszt 10", price: 30000, quantity: 108, imgsrc: 'https://picsum.photos/250/200' },
    { id: 11, name: "Teszt 11", price: 28000, quantity: 181, imgsrc: 'https://picsum.photos/250/200' },
    { id: 12, name: "Teszt 12", price: 4000, quantity: 182, imgsrc: 'https://picsum.photos/250/200' },
    { id: 13, name: "Teszt 13", price: 11000, quantity: 138, imgsrc: 'https://picsum.photos/250/200' },
    { id: 14, name: "Teszt 14", price: 543000, quantity: 184, imgsrc: 'https://picsum.photos/250/200' },
    { id: 15, name: "Teszt 15", price: 63000, quantity: 184, imgsrc: 'https://picsum.photos/250/200' },
    { id: 16, name: "Teszt 16", price: 3000, quantity: 18, imgsrc: 'https://picsum.photos/250/200' },
    { id: 17, name: "Teszt 17", price: 32000, quantity: 3186, imgsrc: 'https://picsum.photos/250/200' },
    { id: 18, name: "Teszt 18", price: 33000, quantity: 1385, imgsrc: 'https://picsum.photos/250/200' },
    { id: 19, name: "Teszt 19", price: 30000, quantity: 184, imgsrc: 'https://picsum.photos/250/200' },
    { id: 20, name: "Teszt 20", price: 31000, quantity: 138, imgsrc: 'https://picsum.photos/250/200' },
    { id: 21, name: "Teszt 21", price: 3000, quantity: 183, imgsrc: 'https://picsum.photos/250/200' },
    { id: 22, name: "Teszt 22", price: 23000, quantity: 124, imgsrc: 'https://picsum.photos/250/200' },
    { id: 23, name: "Teszt 23", price: 3000, quantity: 146, imgsrc: 'https://picsum.photos/250/200' },
    { id: 24, name: "Teszt 24", price: 33000, quantity: 312, imgsrc: 'https://picsum.photos/250/200' },
    { id: 25, name: "Teszt 25", price: 43000, quantity: 181, imgsrc: 'https://picsum.photos/250/200' },
    { id: 26, name: "Teszt 26", price: 53000, quantity: 1822, imgsrc: 'https://picsum.photos/250/200' },
    { id: 27, name: "Teszt 27", price: 3000, quantity: 183, imgsrc: 'https://picsum.photos/250/200' },
    { id: 28, name: "Teszt 28", price: 73000, quantity: 310, imgsrc: 'https://picsum.photos/250/200' }
  ]);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([])
  const [name, setName] = useState(null)
  const [price, setPrice] = useState(null)
  const [amount, setAmount] = useState(null)
  const [img, setImg] = useState(null)


  return (
    <imgContext.Provider value={{ img, setImg }}>
      <amountContext.Provider value={{ amount, setAmount }}>
        <priceContext.Provider value={{ price, setPrice }}>
          <nameContext.Provider value={{ name, setName }}>
            <cartTotalContext.Provider value={{ total, setTotal }}>
              <cartContext.Provider value={{ cart, setCart }}>
                <cartOpen.Provider value={{ isOpenCart, setIsOpenCart }}>
                  <productContext.Provider value={{ products, setProducts }}>
                    <todosContext.Provider value={{ todos, setTodos }}>
                      <RouterProvider router={router} />
                    </todosContext.Provider>
                  </productContext.Provider>
                </cartOpen.Provider>
              </cartContext.Provider>
            </cartTotalContext.Provider>
          </nameContext.Provider>
        </priceContext.Provider>
      </amountContext.Provider>
    </imgContext.Provider>
  );
}

export default App;
