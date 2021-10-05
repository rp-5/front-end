import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import { Button } from '@material-ui/core';
import { Add, AttachFile } from '@material-ui/icons';

export default function Home() {
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let formData = new FormData()
    if (e.target.files) {
      let file = e.target.files[0]
      e.target.value = ''
      if (file.type !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        toast('O formato correto do arquivo deve ser .xlsx!', { type: 'error' })
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
        await toast.promise(
          response,
          {
            pending: 'Processando...',
            success: 'Arquivo processado!',
            error: 'Falha ao processar. Cheque o console para mais detalhes.'
          }
        )
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className={styles.pageWrapper}>
      <ToastContainer />
      <h3>PampaCare</h3>
      <div className={styles.cardWrapper}>
        <Link to="/amostra/new">
          <Button variant="contained" component="span" startIcon={<Add />}>
            Nova amostra
          </Button>
        </Link>
        <label htmlFor="upload">
          <div className={styles.hidden}>
            <input id="upload" type="file" onChange={handleUpload} />
          </div>
          <Button variant="contained" component="span" startIcon={<AttachFile />}>
            Enviar arquivo
          </Button>
        </label>
      </div>
    </div>
  );
}
