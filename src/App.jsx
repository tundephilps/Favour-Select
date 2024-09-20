import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
  NavLink,
  Router,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Filter from "./components/layout/Filter";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyOrders from "./pages/MyOrders";
import ShoppingCart from "./pages/ShoppingCart";
import Footer from "./components/layout/Footer";
import ResetPassword from "./pages/ResetPassword";
import Favourites from "./pages/Favourites";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";
import Categories from "./pages/Categories";

function App() {
  return (
    <>
      <Navbar />
      <Filter />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/MyOrders" element={<MyOrders />} />

        <Route path="/ProductDetails" element={<ProductDetails />} />

        <Route path="/Categories" element={<Categories />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />

        <Route path="/Checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
