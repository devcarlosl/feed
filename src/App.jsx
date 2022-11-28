import React from 'react';

import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './app.module.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Carlos Lopes"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan nascetur egestas pretium primis quisque porttitor curabitur nisl malesuada dolor. Erat interdum magnis adipiscing hac vestibulum faucibus quam sociis porttitor nunc. Varius torquent felis feugiat erat sit rutrum sed maecenas taciti quis. Justo auctor dui habitant maecenas fringilla ligula eget conubia mus velit."
          />
          <Post
            author="Renato Lopes"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan nascetur egestas pretium primis quisque porttitor curabitur nisl malesuada dolor. Erat interdum magnis adipiscing hac vestibulum faucibus quam sociis porttitor nunc. Varius torquent felis feugiat erat sit rutrum sed maecenas taciti quis. Justo auctor dui habitant maecenas fringilla ligula eget conubia mus velit."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
