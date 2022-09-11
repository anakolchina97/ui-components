import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'routes';

import styles from './MenuPanel.module.scss';

type Props = {};

export const MenuPanel: React.FC = (props: Props) => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.a} to={ROUTES.COMPONENTS}>
        Components
      </NavLink>
      <NavLink className={styles.a} to={ROUTES.BUTTON}>
        Button
      </NavLink>
    </nav>
  );
};
