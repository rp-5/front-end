import Icon from '@ailibs/feather-react-ts';
import React from 'react';
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.cardWrapper}>
      <button className={styles.cardItem}>
        <div>
          <Icon name="file-plus" />
          <p>Adicionar amostra</p>
        </div>
      </button>
    </div>
  );
}
