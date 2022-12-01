import React from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './comment.module.css';

export function Comment () {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/devcarlosl.png" />
      <div className={styles['comment-info']}>
        <div className={styles.info}>
          <strong>Carlos Lopes</strong>
          <time>Cerca de 2h</time>
          <button className={styles['trash-icon']}>
            <Trash size={24} />
          </button>
          <p>Muito bom, Parabéns!</p>
        </div>
        <div className={styles.actions}>
          <ThumbsUp size={20} />
          <span>Aplaudir • 12</span>
        </div>
      </div>
    </div>
  );
}
