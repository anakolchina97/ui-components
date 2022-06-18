import { Button } from 'components';
import HomePage from 'pages/HomePage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'routes';

type Props = {};

export const ButtonPage: React.FC = (props: Props) => {
  return <Button>Sent</Button>;
};
