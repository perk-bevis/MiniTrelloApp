import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { privateRouter, publicRouter } from './routes/routes';
import DashboardLayout from './module/layout/DashboardLayout'; 
function App() {
  return (
    <Routes>
      {privateRouter.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      <Route element={<DashboardLayout />}>
        {publicRouter.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;