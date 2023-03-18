import React from "react";
import styles from "./Tabs.module.scss";
import cn from "classnames";

export interface ITab {
  id: string | number;
  label?: string | number;
}

export interface ITabs {
  className?: string;
  selectedId: string | number;
  tabs: ITab[];
  onClick?: (id: string | number) => void;
}

export const Tabs: React.FC<ITabs> = ({
  className,
  selectedId,
  tabs,
  onClick,
}) => {
  return (
    <div className={cn(styles.tabs, className)}>
      <header className={cn(styles.tabs__header)}>
        {tabs &&
          tabs.map(({ id, label }) => (
            <div
              className={cn(styles.tabs__tab, styles.tab, {
                [styles._active]: id === selectedId,
              })}
              key={id}
              onClick={() => onClick?.(id)}
            >
              <div
                className={cn(styles.tab__label, {
                  [styles._active]: id === selectedId,
                })}
              >
                {label}
              </div>
            </div>
          ))}
      </header>
      <div className={cn(styles.tabs__content)}>
        <div>{selectedId === tabs[0].id && <>1</>}</div>
        <div>{selectedId === tabs[1].id && <>2</>}</div>
      </div>
    </div>
  );
};
