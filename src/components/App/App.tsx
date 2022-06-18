import Layout from 'components/Layout';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ButtonPage, HomePage } from 'pages';
import { ROUTES } from 'routes';
// import styles from './App.module.scss';
import MenuPanel from 'components/MenuPanel';
import Button from 'components/Ui/Button';

export const App = () => {
  return (
    <>
      <MenuPanel />
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
        </Routes>
      </Layout>
    </>
  );
};
