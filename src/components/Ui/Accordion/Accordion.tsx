import React, { useState } from 'react';
import classNames from 'classnames';
import { SlideDown } from 'react-slidedown';

import 'react-slidedown/lib/slidedown.css';
import styles from './Accordion.module.scss';

export interface IAccordionProps {
  className?: string;
  title?: string;
  isActive?: boolean;
  children?: React.ReactNode;
}

export const Accordion: React.FC<IAccordionProps> = ({
  className,
  title = '',
  isActive = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(isActive);
  const handleToggleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      className={classNames(styles.Accordion, className, {
        [styles.Accordion__active]: isOpen,
      })}>
      <div className={styles.AccordionHeader} onClick={handleToggleClick}>
        <div className={styles.AccordionHeaderTitle}>{title}</div>
      </div>
      <SlideDown className={styles.AccordionContentSlideDown}>
        {isOpen && <div className={styles.AccordionContent}>{children}</div>}
      </SlideDown>
    </div>
  );
};
