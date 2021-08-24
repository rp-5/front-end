import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './Amostra.module.css'
import { Container, CssBaseline, Avatar, Typography, Grid, ThemeProvider, Checkbox, FormControlLabel, FormLabel, RadioGroup, Radio, FormHelperText, FormControl } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { theme } from '../../Theme';

const validationSchema = yup.object({
  dogName: yup.string().required('Nome do cão é obrigatório.'),
  dogRace: yup.string().required('Raça do cão é obrigatório.'),
  dogGender: yup.string().required('Gênero do cão é obrigatório.'),
  dogAge: yup.string().required('Idade do cão é obrigatório.'),
});

export const NewAmostra = () => {
  const formik = useFormik({
    initialValues: {
      dogName: '',
      dogRace: '',
      dogGender: '',
      dogAge: '',
      dogIsVaccinated: '',
      dogUsesCollar: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.wrapper}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <div className={styles.paper}>
            <Avatar className={styles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Nova amostra
            </Typography>
            <form onSubmit={formik.handleSubmit} className={styles.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography component="h1" variant="h6">
                    Dados do Cão
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="dogName"
                    variant="outlined"
                    required
                    fullWidth
                    id="dogName"
                    label="Nome"
                    autoFocus
                    value={formik.values.dogName}
                    onChange={formik.handleChange}
                    error={formik.touched.dogName && Boolean(formik.errors.dogName)}
                    helperText={formik.touched.dogName && formik.errors.dogName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="dogRace"
                    label="Raça"
                    name="dogRace"
                    value={formik.values.dogRace}
                    onChange={formik.handleChange}
                    error={formik.touched.dogRace && Boolean(formik.errors.dogRace)}
                    helperText={formik.touched.dogRace && formik.errors.dogRace}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset" error={formik.touched.dogGender && Boolean(formik.errors.dogGender)}>
                    <FormLabel component="legend">Gênero</FormLabel>
                    <RadioGroup row aria-label="gender" name="dogGender" value={formik.values.dogGender}
                      onChange={formik.handleChange}>
                      <FormControlLabel value="female" control={<Radio />} label="Fêmea" />
                      <FormControlLabel value="male" control={<Radio />} label="Macho" />
                    </RadioGroup>
                    <FormHelperText>{formik.touched.dogGender && formik.errors.dogGender}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="dogAge"
                    label="Idade"
                    name="dogAge"
                    value={formik.values.dogAge}
                    onChange={formik.handleChange}
                    error={formik.touched.dogAge && Boolean(formik.errors.dogAge)}
                    helperText={formik.touched.dogAge && formik.errors.dogAge}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset" error={formik.touched.dogIsVaccinated && Boolean(formik.errors.dogIsVaccinated)}>
                    <FormLabel component="legend">É vacinado?</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          name="dogIsVaccinated"
                          id="dogIsVaccinated"
                          color="primary"
                        />
                      }
                      label="Sim"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset" error={formik.touched.dogUsesCollar && Boolean(formik.errors.dogUsesCollar)}>
                    <FormLabel component="legend">Usa coleira para mosquito palha?</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          name="dogUsesCollar"
                          id="dogUsesCollar"
                          color="primary"
                        />
                      }
                      label="Sim"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.submit}
              >
                Enviar
              </Button>
            </form>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
};
