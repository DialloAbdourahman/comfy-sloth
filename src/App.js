import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Home,
  Products,
  SingleProduct,
  Error,
  About,
  Checkout,
  Cart,
} from './pages';
import styled from 'styled-components';

function App() {
  const { user, isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route
          path='/checkout'
          element={user ? <Checkout /> : <Navigate replace to='/' />}
        />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default App;
