import React from 'react'
import styles from './App.module.scss'

type Props = {}

export const App: React.FC = (props: Props) => {
  return (
    <div className={styles.app}>App</div>
  )
}