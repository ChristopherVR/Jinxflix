import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loading from './Loading';
import 'styled-components/macro';
import Login from './Login';

const Home = lazy(() => import('./Home'));

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
