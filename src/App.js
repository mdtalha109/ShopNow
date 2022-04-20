import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";


import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './Pages/HomePage';
import ProductScreen from './Pages/ProductDetailsPage';
import CartScreen from './Pages/CartPage';
import LoginScreen from './Pages/LoginPage/LoginPage.js';
import ProfileScreen from './Pages/ProfilePage/ProfilePage';
import ShippingScreen from './Pages/ShippingPage/ShippingPage';
import SignupPage from './Pages/SignupPage/SignupPage.js'
import PaymentPage from './Pages/PaymentPage/PaymentPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import { Skeleton } from '@mui/material';
import SeachPage from './Pages/SeachPage';
import UserListPage from './Pages/Admin/UserListPage/UserListPage';
import Sidebar from './Pages/Admin/Sidebar/Sidebar';
import ProductListPage from './Pages/Admin/ProductListPage/ProductListPage';
import OrderPage from './Pages/Admin/OrderPage/OrderPage';
const App =() => {
  return (  
   <>
   <Header/>
      <main class="main-container" > 
          <Routes>
            <Route exact path="/" element={<HomeScreen/>}> </Route>
            <Route exact path="/login" element={<LoginScreen/>}> </Route>
            <Route exact path="/product/:id" element={<ProductScreen/>}> </Route>
            <Route exact path="/product/category/:category" element={<ProductPage/>}> </Route>
            <Route path="/search" element={<SeachPage/>}> </Route>
            <Route exact path="/cart/:id" element={<CartScreen/>}> </Route>
            <Route exact path="/cart" element={<CartScreen/>}> </Route>
            
            <Route exact path="/shipping" element={<ShippingScreen/>}> </Route>
            <Route exact path="/payment" element={<PaymentPage/>}> </Route>
            <Route exact path="/signup" element={<SignupPage/>}> </Route>
            <Route exact path="/profile" element={<ProfileScreen/>}> </Route>
            <Route exact path="/userList" element={<UserListPage/>}> </Route>
            <Route exact path="/admin/userlist" element={<UserListPage/>}> </Route>
            <Route exact path="/admin/productlist" element={<ProductListPage/>}> </Route>
            <Route exact path="/admin/orderlist" element={<OrderPage/>}> </Route>
            /admin/orderlist
            <Route exact path='*' element={<HomeScreen/>}> </Route>  
          </Routes>
      </main>
      <Footer/>   
     
   </>
  );
}

export default App;


