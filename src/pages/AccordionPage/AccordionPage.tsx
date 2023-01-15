import { Accordion, AccordionGroup } from 'components';
import React from 'react';

type Props = {};

export const AccordionPage: React.FC = (props: Props) => {
  return (
    <AccordionGroup title="Группа аккордеонов">
      <Accordion title="Заголовок 1" isActive>
        Контекст первого аккордеона №1
      </Accordion>
      <Accordion title="Заголовок 2">Контекст первого аккордеона №2</Accordion>
    </AccordionGroup>
  );
};
