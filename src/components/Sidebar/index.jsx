import React from 'react';
import { PencilLine } from 'phosphor-react';

import styles from './sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/devcarlosl.png"
        />
        <strong className={styles.name}>Carlos Lopes</strong>
        <span className={styles.profession}>Desenvolvedor Web</span>
      </div>

      <div className={styles.footer}>
        <a className={styles.anchor} href="#" >
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </div>
    </aside>
  );
}
