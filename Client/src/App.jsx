import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/footer/Footer";
import "./App.scss"

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/> 
      </div>
    );
  }; 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/", // Update this path to the appropriate URL
          element: <Home />,
        },
        {
          path: "/products/:id", // Update this path to the appropriate URL
          element: <Products />,
        },
        {
          path: "/product/:id", // Use a different path for Product details
          element: <Product />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products/:id" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </RouterProvider>
  );
}

export default App;