import React, { lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';

const Home = lazy(() => import('./Home'));

function Loading() {
  return <h1>Loading</h1>;
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
