import React from 'react';

import styles from './post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/devcarlosl.png" />
          <div>
            <strong>Carlos lopes</strong>
            <span>Desenvolvedor Web</span>
          </div>
        </div>
        <span>Publicado há 1h</span>
      </header>
    </article>
  );
}
