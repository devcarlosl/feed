import React from 'react';
import { Comment } from '../Comment';

import styles from './post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles['post-header']}>
        <div className={styles.author}>
          <img className={styles['author-avatar']} src="https://github.com/devcarlosl.png" />
          <div className={styles['author-info']}>
            <strong>Carlos lopes</strong>
            <span>Desenvolvedor Web</span>
          </div>
        </div>
        <time title='28 de Novembro às 23:41h' dateTime='2022-11-28 23:41:00' className={styles['post-published-ago']}>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉<a href='#'>{' '}jane.design/doctorcare</a></p>

        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>

      <form className={styles['comment-form']}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />

        <div className={styles['container-button']}>
          <button type='submit'>
            Publicar
          </button>
        </div>
      </form>
      <Comment />
      <Comment />
      <Comment />
    </article>
  );
}
