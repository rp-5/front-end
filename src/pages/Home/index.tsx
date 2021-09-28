import Icon from '@ailibs/feather-react-ts';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';

export default function Home() {
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()
    if (e.target.files) {
      const file = e.target.files[0]
      if (file.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        toast('O formato correto arquivo deve ser .xlsx!', { type: 'error' })
        return
      }
      formData.append('file', file, file.name)

      const api = axios.create({
        baseURL: "http://localhost:8081/spreadsheet"
      })

      try {
        const response = api.post('/upload/new', formData, {
          headers: { 'Content-Type': 'multipart/form-data;' }
        })
        toast.promise(
          response,
          {
            pending: 'Processando...',
            success: 'Arquivo processado!',
            error: 'Falha ao processar. Cheque o console para mais detalhes.'
          }
        )
      } catch (error) {
        toast('Oops! Algo deu bem errado. Cheque o console para mais detalhes.', { type: 'error' })
      }
    }

  }

  return (
    <div className={styles.pageWrapper}>
      <ToastContainer />
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
        <label className={styles.cardItem}>
          <div className={styles.hidden}>
            <input type="file" onChange={handleUpload} />
          </div>
          <div>
            <Icon name="file-plus" />
            <p>Enviar arquivo</p>
          </div>
        </label>
      </div>
    </div>
  );
}
