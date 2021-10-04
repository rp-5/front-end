import React, { useEffect, useState } from 'react';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import styles from './Amostra.module.css'
import { TextField, Container, CssBaseline, Avatar, Typography, Grid, ThemeProvider, Checkbox, FormControlLabel, FormLabel, RadioGroup, Radio, FormHelperText, FormControl, InputLabel, Select, MenuItem, IconButton } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { theme } from '../../Theme';
import { Add } from '@material-ui/icons';
import { validationSchema } from './schema';
import { initialValues } from './formik';

export const NewAmostra = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude)
      setLong(pos.coords.longitude)
      formik.setFieldValue('proprietario.localizacoes[0].latitude', pos.coords.latitude)
      formik.setFieldValue('proprietario.localizacoes[0].longitude', pos.coords.longitude)
    })
  }, [])

  const formik = useFormik({
    initialValues: initialValues,
    // initialTouched: initialValues,
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
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
                  <TextField name="proprietario.caes[0].nome" variant="outlined" required fullWidth label="Nome"
                    value={formik.values.proprietario?.caes[0].nome}
                    onChange={formik.handleChange}
                    //@ts-expect-error
                    error={formik.touched.proprietario?.caes[0] && Boolean(formik.errors.proprietario?.caes[0]?.nome)}
                    //@ts-expect-error
                    helperText={formik.touched.proprietario?.caes[0].nome && formik.errors.proprietario?.caes[0]?.nome}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="proprietario.caes[0].raca" variant="outlined" required fullWidth label="Raça"
                    value={formik.values.proprietario?.caes[0].raca}
                    onChange={formik.handleChange}
                    //@ts-expect-error
                    error={formik.touched.proprietario?.caes[0].raca && Boolean(formik.errors.proprietario?.caes[0].raca)}
                    //@ts-expect-error
                    helperText={formik.touched.proprietario?.caes[0].raca && formik.errors.proprietario?.caes[0].raca}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <TextField type="number" variant="outlined" required fullWidth label="Idade" name="proprietario?.caes[0].idade"
                    value={formik.values.proprietario?.caes[0].idade}
                    onChange={formik.handleChange}
                    //@ts-expect-error
                    error={formik.touched.proprietario?.caes[0].idade && Boolean(formik.errors.proprietario?.caes[0].idade)}
                    //@ts-expect-error
                    helperText={formik.touched.proprietario?.caes[0].idade && formik.errors.proprietario?.caes[0].idade}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset"
                    //@ts-expect-error
                    error={formik.touched.proprietario?.caes[0].sexo && Boolean(formik.errors.proprietario?.caes[0].sexo)}
                  >
                    <FormLabel component="legend">Gênero</FormLabel>
                    <RadioGroup row aria-label="gender" name="proprietario?.caes[0].sexo" value={formik.values.proprietario?.caes[0].sexo}
                      onChange={formik.handleChange}>
                      <FormControlLabel value="F" control={<Radio />} label="Fêmea" />
                      <FormControlLabel value="M" control={<Radio />} label="Macho" />
                    </RadioGroup>
                    <FormHelperText>{
                      //@ts-expect-error
                      formik.touched.proprietario?.caes[0].sexo && formik.errors.proprietario?.caes[0].sexo
                    }</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset"
                    //@ts-expect-error
                    error={formik.touched.proprietario?.caes[0].vacina && Boolean(formik.errors.proprietario?.caes[0].vacina)}
                  >
                    <FormLabel component="legend">É vacinado?</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          name="proprietario?.caes[0].vacina"
                          color="primary"
                        />
                      }
                      label="Sim"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset"
                    //@ts-expect-error
                    error={formik.touched.proprietario?.caes[0].usaColeira && Boolean(formik.errors.proprietario?.caes[0].usaColeira)}
                  >
                    <FormLabel component="legend">Usa coleira para mosquito palha?</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          name="proprietario?.caes[0].usaColeira"
                          color="primary"
                        />
                      }
                      label="Sim"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <TextField variant="outlined" required fullWidth label="Cor" name="proprietario?.caes[0].cor"
                    value={formik.values.proprietario?.caes[0].cor}
                    onChange={formik.handleChange}
                    //@ts-expect-error
                    error={formik.touched.proprietario?.caes[0].cor && Boolean(formik.errors.proprietario?.caes[0].cor)}
                    //@ts-expect-error
                    helperText={formik.touched.proprietario?.caes[0].cor && formik.errors.proprietario?.caes[0].cor}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl variant="outlined" fullWidth
                    // @ts-expect-error
                    error={formik.touched.proprietario?.caes[0].pelo && Boolean(formik.errors.proprietario?.caes[0].pelo)}
                  >
                    <InputLabel id="proprietario?.caes[0].peloLabel">Tipo de Pelo *</InputLabel>
                    <Select
                      required
                      labelId="proprietario?.caes[0].peloLabel"
                      name="proprietario?.caes[0].pelo"
                      value={formik.values.proprietario?.caes[0].pelo}
                      onChange={formik.handleChange}
                      label="Tipo de Pelo"
                    >
                      <MenuItem value={'Curto'}>Curto</MenuItem>
                      <MenuItem value={'Médio'}>Médio</MenuItem>
                      <MenuItem value={'Longo'}>Longo</MenuItem>
                    </Select>
                    <FormHelperText>{
                      // @ts-expect-error
                      formik.touched.proprietario?.caes[0].pelo && formik.errors.proprietario?.caes[0].pelo
                    }</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl variant="outlined" fullWidth
                    // @ts-expect-error
                    error={formik.touched.proprietario?.caes[0].ambiente && Boolean(formik.errors.proprietario?.caes[0].ambiente)}
                  >
                    <InputLabel id="proprietario?.caes[0].ambienteLabel">Ambiente da casa *</InputLabel>
                    <Select
                      required
                      labelId="proprietario?.caes[0].ambienteLabel"
                      name="proprietario?.caes[0].ambiente"
                      value={formik.values.proprietario?.caes[0].ambiente}
                      onChange={formik.handleChange}
                      label="Ambiente da casa *"
                    >
                      <MenuItem value={'Interno'}>Interno</MenuItem>
                      <MenuItem value={'Externo'}>Externo</MenuItem>
                    </Select>
                    <FormHelperText>{
                      // @ts-expect-error
                      formik.touched.proprietario?.caes[0].ambiente && formik.errors.proprietario?.caes[0].ambiente
                    }</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset"
                    // @ts-expect-error
                    error={formik.touched.proprietario?.caes[0].temContato && Boolean(formik.errors.proprietario?.caes[0].temContato)}
                  >
                    <FormLabel component="legend">Possui contato com outros animais?</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          name="proprietario?.caes[0].temContato"
                          color="primary"
                        />
                      }
                      label="Sim"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography component="h1" variant="h6">
                    Dados do Proprietário
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <TextField variant="outlined" required fullWidth label="Nome" name="proprietario.nome"
                    value={formik.values.proprietario.nome}
                    onChange={formik.handleChange}
                    error={formik.touched.proprietario?.nome && Boolean(formik.errors.proprietario?.nome)}
                    helperText={formik.touched.proprietario?.nome && formik.errors.proprietario?.nome}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <TextField variant="outlined" required fullWidth label="Telefone" name="proprietario.telefone"
                    value={formik.values.proprietario.telefone}
                    onChange={formik.handleChange}
                    error={formik.touched.proprietario?.telefone && Boolean(formik.errors.proprietario?.telefone)}
                    helperText={formik.touched.proprietario?.telefone && formik.errors.proprietario?.telefone}
                  />
                </Grid>
                <FormikProvider value={formik}>
                  <FieldArray name="proprietario.localizacoes" render={({ push, remove }) => (
                    <>
                      <Grid item xs={12} sm={12}>
                        <Typography component="h1" variant="h6">
                          Endereço do Proprietário
                          <IconButton color="secondary" onClick={() => push({ latitude: lat, longitude: long })}>
                            <Add />
                          </IconButton>
                        </Typography>
                      </Grid>
                      {formik.values.proprietario.localizacoes.map((jump, index) => (
                        <React.Fragment key={index}>
                          <Grid item xs={12} sm={6} lg={6}>
                            <TextField variant="outlined" required fullWidth label="Bairro"
                              name={`proprietario.localizacoes.${index}.bairro`}
                              value={formik.values.proprietario.localizacoes[index].bairro}
                              onChange={formik.handleChange}
                              // @ts-expect-error
                              error={formik.touched.proprietario?.localizacoes[index].bairro && Boolean(formik.errors.proprietario?.localizacoes[index].bairro)}
                              // @ts-expect-error
                              helperText={formik.touched.proprietario?.localizacoes[index].bairro && formik.errors.proprietario?.localizacoes[index].bairro}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} lg={6}>
                            <TextField variant="outlined" required fullWidth label="Rua"
                              name={`proprietario.localizacoes.${index}.endereco`}
                              value={formik.values.proprietario.localizacoes[index].endereco}
                              onChange={formik.handleChange}
                              // @ts-expect-error
                              error={formik.touched.proprietario?.localizacoes[index].endereco && Boolean(formik.errors.proprietario?.localizacoes[index].endereco)}
                              // @ts-expect-error
                              helperText={formik.touched.proprietario?.localizacoes[index].endereco && formik.errors.proprietario?.localizacoes[index].endereco}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <TextField variant="outlined" fullWidth label="Complemento"
                              name={`proprietario.localizacoes.${index}.complemento`}
                              value={formik.values.proprietario.localizacoes[index].complemento}
                              onChange={formik.handleChange}
                              // @ts-expect-error
                              error={formik.touched.proprietario?.localizacoes[index].complemento && Boolean(formik.errors.proprietario?.localizacoes[index].complemento)}
                              // @ts-expect-error
                              helperText={formik.touched.proprietario?.localizacoes[index].complemento && formik.errors.proprietario?.localizacoes[index].complemento}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <FormControl variant="outlined" fullWidth
                              // @ts-expect-error
                              error={formik.touched.proprietario?.localizacoes[index].area && Boolean(formik.errors.proprietario?.localizacoes[index].area)}
                            >
                              <InputLabel id="proprietario?.localizacoes[index].areaLabel">Área *</InputLabel>
                              <Select
                                required
                                labelId="proprietario?.localizacoes[index].areaLabel"
                                name={`proprietario.localizacoes.${index}.area`}
                                value={formik.values.proprietario?.localizacoes[index].area}
                                onChange={formik.handleChange}
                                label="Área"
                              >
                                <MenuItem value={'Urbana'}>Urbana</MenuItem>
                                <MenuItem value={'Rural'}>Rural</MenuItem>
                              </Select>
                              <FormHelperText>{
                                // @ts-expect-error
                                formik.touched.proprietario?.localizacoes[index].area && formik.errors.proprietario?.localizacoes[index].area
                              }</FormHelperText>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <TextField variant="outlined" fullWidth label="Latitude"
                              name={`proprietario.localizacoes.${index}.latitude`}
                              value={formik.values.proprietario.localizacoes[index].latitude}
                              onChange={formik.handleChange}
                              // @ts-expect-error
                              error={formik.touched.proprietario?.localizacoes[index].latitude && Boolean(formik.errors.proprietario?.localizacoes[index].latitude)}
                              // @ts-expect-error
                              helperText={formik.touched.proprietario?.localizacoes[index].latitude && formik.errors.proprietario?.localizacoes[index].latitude}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <TextField variant="outlined" fullWidth label="Longitude"
                              name={`proprietario.localizacoes.${index}.longitude`}
                              value={formik.values.proprietario.localizacoes[index].longitude}
                              onChange={formik.handleChange}
                              // @ts-expect-error
                              error={formik.touched.proprietario?.localizacoes[index].longitude && Boolean(formik.errors.proprietario?.localizacoes[index].longitude)}
                              // @ts-expect-error
                              helperText={formik.touched.proprietario?.localizacoes[index].longitude && formik.errors.proprietario?.localizacoes[index].longitude}
                            />
                          </Grid>
                        </React.Fragment>
                      ))}
                    </>
                  )} />
                </FormikProvider>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={styles.submit}
                >
                  Enviar
                </Button>
              </Grid>
            </form>
          </div>
        </Container>
      </ThemeProvider >
    </div >
  );
};