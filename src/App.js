import React, { Suspense } from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import HomeScreen from './Pages/HomePage/HomePage';


import { ToastContainer } from 'react-toastify';
import { Layout } from './components/Layout/Layout';
import { AdminLayout } from './components/Layout/AdminLayout';
const ProductScreen = React.lazy(()=> import('./Pages/ProductDetailsPage/ProductDetailsPage.js'))
const UserOrderDetails = React.lazy(() => import('./Pages/UserOrderDetails/UserOrderDetails'));
const PaymentPage = React.lazy(() => import('./Pages/PaymentPage/PaymentPage'));
const ProductPage = React.lazy(() => import('./Pages/ProductPage/ProductPage'));
const SeachPage = React.lazy(() => import('./Pages/SeachPage'));
const UserListPage = React.lazy(() => import('./Pages/Admin/UserListPage/UserListPage'));
const ProductListPage = React.lazy(() => import('./Pages/Admin/ProductListPage/ProductListPage'));
const OrderPage = React.lazy(() => import('./Pages/Admin/Orders/OrderPage'));
const OrderDetail = React.lazy(() => import('./Pages/Admin/Orders/OrderDetail/OrderDetail'));
const CartScreen = React.lazy(() => import('./Pages/CartPage/CartPage'));
const LoginScreen = React.lazy(() => import('./Pages/LoginPage/LoginPage.js'));
const ProfileScreen = React.lazy(() => import('./Pages/ProfilePage/ProfilePage'));
const ShippingScreen = React.lazy(() => import('./Pages/ShippingPage/ShippingPage'));
const SignupPage = React.lazy(() => import('./Pages/SignupPage/SignupPage.js'));


const App =() => {
  return (  
   <>
  
      <main class="main-container" > 
          <Routes>
            <Route path='/*' element={<Layout/>}>
              <Route exact path="" element={<HomeScreen/>}> </Route>
              <Route exact path="login" element={<Suspense fallback={<div>Loading...</div>}><LoginScreen/></Suspense>}> </Route>
              <Route exact path="product/:id" element={<Suspense fallback={<div>Loading...</div>}><ProductScreen/></Suspense>}> </Route>
              <Route exact path="product/category/:category" element={<Suspense fallback={<div>Loading...</div>}><ProductPage/></Suspense>}> </Route>
              <Route path="search" element={<SeachPage/>}> </Route>
              <Route exact path="cart/:id" element={<Suspense fallback={<div>Loading...</div>}><CartScreen/></Suspense>}> </Route>
              <Route exact path="cart" element={<Suspense fallback={<div>Loading...</div>}><CartScreen/></Suspense>}> </Route>
              
              <Route exact path="shipping" element={<Suspense fallback={<div>Loading...</div>}><ShippingScreen/></Suspense>}> </Route>
              <Route exact path="payment" element={ <Suspense fallback={<div>Loading...</div>}><PaymentPage/></Suspense>}> </Route>
              <Route exact path="order/:order_id" element={<Suspense fallback={<div>Loading...</div>}><UserOrderDetails /></Suspense>}> </Route>
              <Route exact path="signup" element={<SignupPage/>}> </Route>
              <Route exact path="profile" element={<Suspense fallback={<div>Loading...</div>}><ProfileScreen/></Suspense>}> </Route>
            </Route>
            <Route path='/admin/*' element={<AdminLayout/>}>
              <Route exact path="users" element={<Suspense fallback={<div>Loading...</div>}><UserListPage/></Suspense>}/>
              <Route exact path="products" element={<Suspense fallback={<div>Loading...</div>}><ProductListPage/></Suspense>}/>
              <Route exact path="orders" element={<Suspense fallback={<div>Loading...</div>}><OrderPage/></Suspense>}/>
              <Route exact path="order/:order_id" element={<Suspense fallback={<div>Loading...</div>}><OrderDetail/></Suspense>}/>
            </Route>

            <Route exact path='*' element={<HomeScreen/>}> </Route>  
           
          </Routes>
      </main>

      <ToastContainer/>
        
     
   </>
  );
}

export default App;


