import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, CustomRouteProps } from '../routes';
import { WELCOME_ROUTE } from '../utils/consts';

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }: CustomRouteProps) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={WELCOME_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
