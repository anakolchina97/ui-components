import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'routes';

type Props = {};

export const MenuPanel: React.FC = (props: Props) => {
  return (
    <div>
      <NavLink to={ROUTES.HOME}>Home</NavLink>
      <NavLink to={ROUTES.BUTTON}>Button</NavLink>
    </div>
  );
};
