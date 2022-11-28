import React from 'react';

import logo from '../../assets/svg/logo.svg';

import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logotipo do feed" />
    </header>
  );
}
