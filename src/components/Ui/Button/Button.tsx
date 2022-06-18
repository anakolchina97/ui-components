import React, { DOMAttributes } from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  typeButton?: ButtonType;
  onClick?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  children,
  isDisabled,
  typeButton,
  onClick,
  ...props
}) => {
  return (
    <button
      className={classnames(styles.button, className, { [styles.button__disabled]: isDisabled })}
      disabled={isDisabled}
      type={typeButton}
      onClick={onClick}
      {...props}>
      <span>{children}</span>
    </button>
  );
};
