import { Accordion } from './Accordion';
import { AccordionGroup } from './AccordionGroup/AccordionGroup';
import styles from './Accordion.module.scss';

export default { title: 'Accordion', component: Accordion };

export const Default = () => (
  <AccordionGroup>
    <Accordion title="Заголовок">Контент</Accordion>
  </AccordionGroup>
);
