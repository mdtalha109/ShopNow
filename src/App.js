import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import About from './About';
const App =() => {
  return (
   <>
   
      <Header/>
      <main className='my-4 main-container'> 
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen/>}> </Route>
            <Route exact path="/product/:id" element={<ProductScreen/>}> </Route>
            <Route exact path="/login" element={<HomeScreen/>}> </Route>
            <Route exact path="/cart" element={<HomeScreen/>}> </Route>
         
          </Routes>
        </Container>  
      </main>
      <Footer/> 
   </>
  );
}

export default App;


