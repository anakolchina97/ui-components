import Layout from 'components/Layout';
import { Routes, Route } from 'react-router-dom';
import { AccordionPage, ButtonPage, Components } from 'pages';
import { ROUTES } from 'routes';
import MenuPanel from 'components/MenuPanel';

import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.appWrap}>
      <MenuPanel />
      <Layout>
        <h1 className={styles.h1}>Ui React Library</h1>
        <Routes>
          <Route path={ROUTES.COMPONENTS} element={<Components />} />
          <Route path={ROUTES.BUTTON} element={<ButtonPage />} />
          <Route path={ROUTES.ACCORDION} element={<AccordionPage />} />
        </Routes>
      </Layout>
    </div>
  );
};
