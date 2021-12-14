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
const App =() => {
  return (
   <>
      <Header/>
      <main className='my-4 main-container'> 
        <Container>
          <HomeScreen/>
        </Container>  
      </main>
      <Footer/> 
   </>
  );
}

export default App;


