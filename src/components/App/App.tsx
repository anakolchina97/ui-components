import Layout from 'components/Layout';
import React, { MouseEvent } from 'react';
import { Button } from 'ui-kit';
import styles from './App.module.scss';

type Props = {};

export const App: React.FC = (props: Props) => {
  const handleButtonClick = (event: MouseEvent) => {
    console.log('[button click event]', event);
  };
  return (
    <div className={styles.app}>
      <Layout>
        <h1>React TypeScript UI Library</h1>
        <hr />
        <h2>Button</h2>
        <Button onClick={handleButtonClick}>Кнопка</Button>
      </Layout>
    </div>
  );
};
