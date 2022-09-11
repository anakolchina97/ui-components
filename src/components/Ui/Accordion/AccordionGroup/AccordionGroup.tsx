import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styles from './AccordionGroup.module.scss';

export interface IAccordionGroupProps {
  className?: string;
  title?: string;
  children?: ReactNode;
}

export const AccordionGroup: React.FC<IAccordionGroupProps> = ({
  title = '',
  children,
  className,
}) => {
  return (
    <div className={classNames([styles.AccordionGroup], className)}>
      {title && <div className={styles.AccordionGroupTitle}>{title}</div>}
      {children}
    </div>
  );
};
