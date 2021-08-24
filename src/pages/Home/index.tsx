import Icon from '@ailibs/feather-react-ts';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <h3>PampaCare</h3>
      <div className={styles.cardWrapper}>
        <Link to="/amostra/new">
          <button className={styles.cardItem}>
            <div>
              <Icon name="plus-circle" />
              <p>Adicionar amostra</p>
            </div>
          </button>
        </Link>
        <Link to="/amostra/new">
          <button className={styles.cardItem}>
            <div>
              <Icon name="file-plus" />
              <p>Enviar arquivo</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
