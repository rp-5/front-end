import React, { useEffect, useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import styles from './Amostra.module.css'
import { TextField, Container, CssBaseline, Avatar, Typography, Grid, ThemeProvider, Checkbox, FormControlLabel, FormLabel, RadioGroup, Radio, FormHelperText, FormControl, InputLabel, Select, MenuItem, IconButton } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { theme } from '../../Theme';
import { Add, ArrowBack, Remove } from '@material-ui/icons';
import { validationSchema } from './schema';
import { initialValues } from './formik';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export const NewAmostra = () => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const api = axios.create({
        baseURL: "https://crud-service-develop.herokuapp.com/crudService"
      })

      try {
        const response = api.post('/salvar/geral', JSON.stringify(values), {
          headers: { 'Content-Type': 'application/json;' }
        })
        await toast.promise(
          response,
          {
            pending: 'Processando...',
            success: 'Dados enviados!',
            error: 'Falha ao enviar. Cheque o console para mais detalhes.'
          }
        )
      } catch (error) {
        console.log(error)
      }
      // alert(JSON.stringify(values, null, 2))
    },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude)
      setLong(pos.coords.longitude)
      formik.setFieldValue('proprietario.localizacoes[0].latitude', pos.coords.latitude)
      formik.setFieldValue('proprietario.localizacoes[0].longitude', pos.coords.longitude)
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div className={styles.wrapper}>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg">
          <Link to="/">
            <Button color="primary" variant="outlined" startIcon={<ArrowBack />}>
              Voltar
            </Button>
          </Link>
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
                    error={formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].nome}
                    //@ts-expect-error
                    helperText={formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].nome}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="proprietario.caes[0].raca" variant="outlined" required fullWidth label="Raça"
                    value={formik.values.proprietario?.caes[0].raca}
                    onChange={formik.handleChange}
                    //@ts-expect-error
                    error={formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].raca}
                    //@ts-expect-error
                    helperText={formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].raca}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <TextField type="number" variant="outlined" required fullWidth label="Idade" name="proprietario.caes[0].idade"
                    value={formik.values.proprietario?.caes[0].idade}
                    onChange={formik.handleChange}
                    //@ts-expect-error
                    error={formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].idade}
                    //@ts-expect-error
                    helperText={formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].idade}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset"
                    //@ts-expect-error
                    error={formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].sexo}
                  >
                    <FormLabel component="legend">Gênero</FormLabel>
                    <RadioGroup row aria-label="gender" name="proprietario.caes[0].sexo" value={formik.values.proprietario?.caes[0].sexo}
                      onChange={formik.handleChange}>
                      <FormControlLabel value="F" control={<Radio />} label="Fêmea" />
                      <FormControlLabel value="M" control={<Radio />} label="Macho" />
                    </RadioGroup>
                    <FormHelperText>{
                      //@ts-expect-error
                      formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].sexo
                    }</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">É vacinado?</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          name="proprietario.caes[0].vacina"
                          color="primary"
                        />
                      }
                      label="Sim"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Usa coleira para mosquito palha?</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          name="proprietario.caes[0].usaColeira"
                          color="primary"
                        />
                      }
                      label="Sim"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <TextField variant="outlined" required fullWidth label="Cor" name="proprietario.caes[0].cor"
                    value={formik.values.proprietario?.caes[0].cor}
                    onChange={formik.handleChange}
                    //@ts-expect-error
                    error={formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].cor}
                    //@ts-expect-error
                    helperText={formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].cor}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl variant="outlined" fullWidth
                    // @ts-expect-error
                    error={formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].pelo}
                  >
                    <InputLabel id="proprietario.caes[0].peloLabel">Tipo de Pelo *</InputLabel>
                    <Select
                      required
                      labelId="proprietario.caes[0].peloLabel"
                      name="proprietario.caes[0].pelo"
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
                      formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].pelo
                    }</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl variant="outlined" fullWidth
                    // @ts-expect-error
                    error={formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].ambiente}
                  >
                    <InputLabel id="proprietario.caes[0].ambienteLabel">Ambiente da casa *</InputLabel>
                    <Select
                      required
                      labelId="proprietario.caes[0].ambienteLabel"
                      name="proprietario.caes[0].ambiente"
                      value={formik.values.proprietario?.caes[0].ambiente}
                      onChange={formik.handleChange}
                      label="Ambiente da casa *"
                    >
                      <MenuItem value={'Interno'}>Interno</MenuItem>
                      <MenuItem value={'Externo'}>Externo</MenuItem>
                    </Select>
                    <FormHelperText>{
                      // @ts-expect-error
                      formik.touched.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0] && formik.errors.proprietario?.caes?.[0].ambiente
                    }</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Possui contato com outros animais?</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          name="proprietario.caes[0].temContato"
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
                  <FieldArray name="proprietario.localizacoes" render={({ push, pop }) => (
                    <>
                      <Grid item xs={12} sm={12}>
                        <Typography component="h1" variant="h6">
                          Endereço do Proprietário
                          &nbsp;&nbsp;
                          <IconButton color="secondary" onClick={() => push({ latitude: lat, longitude: long, area: 'Urbana' })}>
                            <Add />
                          </IconButton>
                          &nbsp;&nbsp;
                          <IconButton color="secondary" onClick={() => pop()}>
                            <Remove />
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
                              error={formik.touched.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index].bairro}
                              // @ts-expect-error
                              helperText={formik.touched.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes[index].bairro}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} lg={6}>
                            <TextField variant="outlined" required fullWidth label="Rua"
                              name={`proprietario.localizacoes.${index}.endereco`}
                              value={formik.values.proprietario.localizacoes[index].endereco}
                              onChange={formik.handleChange}
                              // @ts-expect-error
                              error={formik.touched.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes[index].endereco}
                              // @ts-expect-error
                              helperText={formik.touched.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes[index].endereco}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <TextField variant="outlined" fullWidth label="Complemento"
                              name={`proprietario.localizacoes.${index}.complemento`}
                              value={formik.values.proprietario.localizacoes[index].complemento}
                              onChange={formik.handleChange}
                              // @ts-expect-error
                              error={formik.touched.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes[index].complemento}
                              // @ts-expect-error
                              helperText={formik.touched.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes[index].complemento}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <FormControl variant="outlined" fullWidth
                              // @ts-expect-error
                              error={formik.touched.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index].area}
                            >
                              <InputLabel id={`areaLabel${index}`}>Área *</InputLabel>
                              <Select
                                required
                                labelId={`areaLabel${index}`}
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
                                formik.touched.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index].area
                              }</FormHelperText>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <TextField variant="outlined" fullWidth label="Latitude"
                              name={`proprietario.localizacoes.${index}.latitude`}
                              value={formik.values.proprietario.localizacoes[index].latitude}
                              onChange={formik.handleChange}
                              // @ts-expect-error
                              error={formik.touched.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes[index].latitude}
                              // @ts-expect-error
                              helperText={formik.touched.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes[index].latitude}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <TextField variant="outlined" fullWidth label="Longitude"
                              name={`proprietario.localizacoes.${index}.longitude`}
                              value={formik.values.proprietario.localizacoes[index].longitude}
                              onChange={formik.handleChange}
                              // @ts-expect-error
                              error={formik.touched.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes[index].longitude}
                              // @ts-expect-error
                              helperText={formik.touched.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes?.[index] && formik.errors.proprietario?.localizacoes[index].longitude}
                            />
                          </Grid>
                        </React.Fragment>
                      ))}
                    </>
                  )} />
                </FormikProvider>
                <Grid item xs={12} sm={12}>
                  <Typography component="h1" variant="h6">
                    Dados da amostra
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <TextField variant="outlined" fullWidth label="Número da amostra"
                    name='amostra.numero'
                    value={formik.values.amostra?.numero}
                    onChange={formik.handleChange}
                    error={formik.touched.amostra?.numero && Boolean(formik.errors.amostra?.numero)}
                    helperText={formik.touched.amostra?.numero && formik.errors.amostra?.numero}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker autoOk variant="inline" format="dd/MM/yyyy" disableFuture fullWidth name="amostra.data" label="Data de amostragem"
                      // @ts-expect-error
                      error={formik.touched.amostra?.data && formik.errors.amostra?.data}
                      helperText={formik.touched.amostra?.data && formik.errors.amostra?.data}
                      inputVariant="outlined"
                      value={formik.values.amostra?.data === '' ? null : formik.values.amostra?.data}
                      onChange={(value) => {
                        console.log(formik.values.amostra?.data)
                        formik.handleChange(value?.toISOString())
                        formik.setFieldValue('amostra.data', value)
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset" error={formik.touched.amostra?.morreu && Boolean(formik.errors.amostra?.morreu)}>
                    <FormLabel component="legend">O cão morreu?</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          name="amostra.morreu"
                          color="primary"
                        />
                      }
                      label="Sim"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset" error={formik.touched.amostra?.lvc && Boolean(formik.errors.amostra?.lvc)}>
                    <FormLabel component="legend">O cão está com LVC?</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          name="amostra.lvc"
                          color="primary"
                        />
                      }
                      label="Sim"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <TextField variant="outlined" fullWidth label="Ação a ser tomada"
                    name='acao.nome'
                    value={formik.values.acao?.nome}
                    onChange={formik.handleChange}
                    error={formik.touched.acao?.nome && Boolean(formik.errors.acao?.nome)}
                    helperText={formik.touched.acao?.nome && formik.errors.acao?.nome}
                  />
                </Grid>
                <FormikProvider value={formik}>
                  <FieldArray name="sintomas" render={({ push, pop }) => (
                    <>
                      <Grid item xs={12} sm={12}>
                        <Typography component="h1" variant="h6">
                          Dados de Sintomas
                          &nbsp;&nbsp;
                          <IconButton color="secondary" onClick={() => push({ intensidade: 0 })}>
                            <Add />
                          </IconButton>
                          &nbsp;&nbsp;
                          <IconButton color="secondary" onClick={() => pop()}>
                            <Remove />
                          </IconButton>
                        </Typography>
                      </Grid>
                      {formik.values.sintomas.map((jump, index) => (
                        <React.Fragment key={index}>
                          <Grid item xs={12} sm={6} lg={6}>
                            <TextField variant="outlined" required fullWidth label="Nome" name={`sintomas.${index}.nome`}
                              value={formik.values.sintomas[index].nome}
                              onChange={formik.handleChange}
                              // @ts-expect-error
                              error={formik.touched.sintomas?.[index] && formik.errors.sintomas?.[index] && formik.errors.sintomas?.[index].nome}
                              // @ts-expect-error
                              helperText={formik.touched.sintomas?.[index] && formik.errors.sintomas?.[index] && formik.errors.sintomas?.[index].nome}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <FormControl variant="outlined" fullWidth
                              // @ts-expect-error
                              error={formik.touched.sintomas?.[index] && formik.errors.sintomas?.[index] && formik.errors.sintomas?.[index].intensidade}>
                              <InputLabel id={`intensidade${index}`}>Intensidade</InputLabel>
                              <Select
                                required
                                labelId={`intensidade${index}`}
                                name={`sintomas[${index}].intensidade`}
                                value={formik.values.sintomas[index].intensidade}
                                onChange={formik.handleChange}
                                label="Intensidade"
                              >
                                <MenuItem value={0}>Não se aplica</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                              </Select>
                              <FormHelperText>{
                                // @ts-expect-error
                                formik.touched.sintomas?.[index] && formik.errors.sintomas?.[index] && formik.errors.sintomas?.[index].intensidade
                              }</FormHelperText>
                            </FormControl>
                          </Grid>
                        </React.Fragment>
                      ))}
                    </>
                  )} />
                </FormikProvider>
                <FormikProvider value={formik}>
                  <FieldArray name="exames" render={({ push, pop }) => (
                    <>
                      <Grid item xs={12} sm={12}>
                        <Typography component="h1" variant="h6">
                          Dados de Exames
                          &nbsp;&nbsp;
                          <IconButton color="secondary" onClick={() => push({})}>
                            <Add />
                          </IconButton>
                          &nbsp;&nbsp;
                          <IconButton color="secondary" onClick={() => pop()}>
                            <Remove />
                          </IconButton>
                        </Typography>
                      </Grid>
                      {formik.values.exames.map((jump, index) => (
                        <React.Fragment key={index}>
                          <Grid item xs={12} sm={6} lg={6}>
                            <TextField variant="outlined" required fullWidth label="Nome" name={`exames.${index}.nome`}
                              value={formik.values.exames[index].nome}
                              onChange={formik.handleChange}
                              // @ts-expect-error
                              error={formik.touched.exames?.[index] && formik.errors.exames?.[index] && formik.errors.exames?.[index].nome}
                              // @ts-expect-error
                              helperText={formik.touched.exames?.[index] && formik.errors.exames?.[index] && formik.errors.exames?.[index].nome}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <DatePicker autoOk fullWidth variant="inline" format="dd/MM/yyyy" disableFuture name={`exames[${index}].data`} label="Data do exame"
                                // @ts-expect-error
                                error={formik.touched.exames?.[index] && formik.errors.exames?.[index] && formik.errors.exames?.[index].data}
                                // @ts-expect-error
                                helperText={formik.touched.exames?.[index] && formik.errors.exames?.[index] && formik.errors.exames?.[index].data}
                                inputVariant="outlined"
                                value={formik.values.exames[index].data ?? null}
                                onChange={(value) => {
                                  formik.handleChange(value?.toISOString())
                                  formik.setFieldValue(`exames[${index}].data`, value)
                                }}
                              />
                            </MuiPickersUtilsProvider>
                          </Grid>
                          <Grid item xs={12} sm={6} lg={3}>
                            <TextField variant="outlined" required fullWidth label="Resultado" name={`exames.${index}.resultado`}
                              value={formik.values.exames[index].resultado}
                              onChange={formik.handleChange}
                              // @ts-expect-error
                              error={formik.touched.exames?.[index] && formik.errors.exames?.[index] && formik.errors.exames?.[index].resultado}
                              // @ts-expect-error
                              helperText={formik.touched.exames?.[index] && formik.errors.exames?.[index] && formik.errors.exames?.[index].resultado}
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