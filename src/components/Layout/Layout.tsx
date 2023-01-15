import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";

interface ILayoutProps {
  children?: ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
