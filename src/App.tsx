import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './Loading';
import Login from './Login';

const Home = lazy(() => import('./Home'));

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
