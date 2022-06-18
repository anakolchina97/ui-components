import Layout from 'components/Layout';
import React from 'react';
import styles from './App.module.scss';

type Props = {};

export const App: React.FC = (props: Props) => {
  return (
    <div className={styles.app}>
      <Layout>
        <h1>React TypeScript UI Library</h1>
      </Layout>
    </div>
  );
};
