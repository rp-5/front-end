import React from 'react';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import styles from './Amostra.module.css'
import { TextField, Container, CssBaseline, Avatar, Typography, Grid, ThemeProvider, Checkbox, FormControlLabel, FormLabel, RadioGroup, Radio, FormHelperText, FormControl, InputLabel, Select, MenuItem, IconButton } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { theme } from '../../Theme';
import { Add } from '@material-ui/icons';
import { validationSchema } from './schema';
import { initialValues } from './formik';

export const NewAmostra = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [symptoms, setSymptom] = React.useState([""]);
  const [exams, setExam] = React.useState([""]);
  const [locations, setLocation] = React.useState([""]);

  const addSymptom = () => {
    setSymptom([...symptoms, ""]);
  };

  const addExam = () => {
    setExam([...exams, ""]);
  };

  const addLocation = () => {
    setLocation([...locations, ""]);
  };
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
                {/* Cachorro */}
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
                  <TextField
                    type="number"
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
                <Grid item xs={12} sm={6} lg={3}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="dogColor"
                    label="Cor"
                    name="dogColor"
                    value={formik.values.dogColor}
                    onChange={formik.handleChange}
                    error={formik.touched.dogColor && Boolean(formik.errors.dogColor)}
                    helperText={formik.touched.dogColor && formik.errors.dogColor}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl variant="outlined" fullWidth error={formik.touched.dogHair && Boolean(formik.errors.dogHair)}>
                    <InputLabel id="dogHairLabel">Tipo de Pelo *</InputLabel>
                    <Select
                      required
                      labelId="dogHairLabel"
                      id="dogHair"
                      name="dogHair"
                      value={formik.values.dogHair}
                      onChange={formik.handleChange}
                      label="Tipo de Pelo"
                    >
                      <MenuItem value={'Curto'}>Curto</MenuItem>
                      <MenuItem value={'Médio'}>Médio</MenuItem>
                      <MenuItem value={'Longo'}>Longo</MenuItem>
                    </Select>
                    <FormHelperText>{formik.touched.dogHair && formik.errors.dogHair}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl variant="outlined" fullWidth error={formik.touched.dogEnvironment && Boolean(formik.errors.dogEnvironment)}>
                    <InputLabel id="dogEnvironmentLabel">Ambiente da casa *</InputLabel>
                    <Select
                      required
                      labelId="dogEnvironmentLabel"
                      id="dogEnvironment"
                      name="dogEnvironment"
                      value={formik.values.dogEnvironment}
                      onChange={formik.handleChange}
                      label="Ambiente da casa *"
                    >
                      <MenuItem value={'Interno'}>Interno</MenuItem>
                      <MenuItem value={'Externo'}>Externo</MenuItem>
                    </Select>
                    <FormHelperText>{formik.touched.dogEnvironment && formik.errors.dogEnvironment}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset" error={formik.touched.dogHasContacts && Boolean(formik.errors.dogHasContacts)}>
                    <FormLabel component="legend">Possui contato com outros animais?</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          name="dogHasContacts"
                          id="dogHasContacts"
                          color="primary"
                        />
                      }
                      label="Sim"
                    />
                  </FormControl>
                </Grid>
                {/* Proprietário */}
                <Grid item xs={12} sm={12}>
                  <Typography component="h1" variant="h6">
                    Dados do Proprietário
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="ownerName"
                    label="Nome"
                    name="ownerName"
                    value={formik.values.ownerName}
                    onChange={formik.handleChange}
                    error={formik.touched.ownerName && Boolean(formik.errors.ownerName)}
                    helperText={formik.touched.ownerName && formik.errors.ownerName}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="ownerPhone"
                    label="Telefone"
                    name="ownerPhone"
                    value={formik.values.ownerPhone}
                    onChange={formik.handleChange}
                    error={formik.touched.ownerPhone && Boolean(formik.errors.ownerPhone)}
                    helperText={formik.touched.ownerPhone && formik.errors.ownerPhone}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography component="h1" variant="h6">
                    Endereço do Proprietário
                    <IconButton color="secondary" aria-label="add an alarm" onClick={addLocation}>
                      <Add />
                    </IconButton>
                  </Typography>
                </Grid>
                {locations.map((jump, index) => (
                  <>
                    <Grid item xs={12} sm={6} lg={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="locationNeighborhood"
                        label="Bairro"
                        name="locationNeighborhood"
                        value={formik.values.locationNeighborhood}
                        onChange={formik.handleChange}
                        error={formik.touched.locationNeighborhood && Boolean(formik.errors.locationNeighborhood)}
                        helperText={formik.touched.locationNeighborhood && formik.errors.locationNeighborhood}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="locationStreet"
                        label="Rua"
                        name="locationStreet"
                        value={formik.values.locationStreet}
                        onChange={formik.handleChange}
                        error={formik.touched.locationStreet && Boolean(formik.errors.locationStreet)}
                        helperText={formik.touched.locationStreet && formik.errors.locationStreet}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="locationComplement"
                        label="Complemento"
                        name="locationComplement"
                        value={formik.values.locationComplement}
                        onChange={formik.handleChange}
                        error={formik.touched.locationComplement && Boolean(formik.errors.locationComplement)}
                        helperText={formik.touched.locationComplement && formik.errors.locationComplement}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <FormControl variant="outlined" fullWidth error={formik.touched.locationArea && Boolean(formik.errors.locationArea)}>
                        <InputLabel id="locationAreaLabel">Área *</InputLabel>
                        <Select
                          required
                          labelId="locationAreaLabel"
                          id="locationArea"
                          name="locationArea"
                          value={formik.values.locationArea}
                          onChange={formik.handleChange}
                          label="Área"
                        >
                          <MenuItem value={'Urbana'}>Urbana</MenuItem>
                          <MenuItem value={'Rural'}>Rural</MenuItem>
                        </Select>
                        <FormHelperText>{formik.touched.locationArea && formik.errors.locationArea}</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        required
                        id="locationLatitude"
                        label="Latitude"
                        name="locationLatitude"
                        value={formik.values.locationLatitude}
                        onChange={formik.handleChange}
                        error={formik.touched.locationLatitude && Boolean(formik.errors.locationLatitude)}
                        helperText={formik.touched.locationLatitude && formik.errors.locationLatitude}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        required
                        id="locationLongitude"
                        label="Longitude"
                        name="locationLongitude"
                        value={formik.values.locationLongitude}
                        onChange={formik.handleChange}
                        error={formik.touched.locationLongitude && Boolean(formik.errors.locationLongitude)}
                        helperText={formik.touched.locationLongitude && formik.errors.locationLongitude}
                      />
                    </Grid>
                  </>
                ))}
                {/* Amostra */}
                <Grid item xs={12} sm={12}>
                  <Typography component="h1" variant="h6">
                    Dados da amostra
                  </Typography>
                </Grid>
                {/* <Grid item xs={12} sm={6} lg={3}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="sampleN"
                    label="Valor N"
                    name="sampleN"
                    value={formik.values.sampleN}
                    onChange={formik.handleChange}
                    error={formik.touched.sampleN && Boolean(formik.errors.sampleN)}
                    helperText={formik.touched.sampleN && formik.errors.sampleN}
                  />
                </Grid> */}
                <Grid item xs={12} sm={6} lg={3}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    required
                    id="sampleNumber"
                    label="Número da amostra"
                    name="sampleNumber"
                    value={formik.values.sampleNumber}
                    onChange={formik.handleChange}
                    error={formik.touched.sampleNumber && Boolean(formik.errors.sampleNumber)}
                    helperText={formik.touched.sampleNumber && formik.errors.sampleNumber}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    required
                    InputLabelProps={{ shrink: true }}
                    type="date"
                    id="sampleDate"
                    label="Data de amostragem"
                    name="sampleDate"
                    value={formik.values.sampleDate}
                    onChange={formik.handleChange}
                    error={formik.touched.sampleDate && Boolean(formik.errors.sampleDate)}
                    helperText={formik.touched.sampleDate && formik.errors.sampleDate}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset" error={formik.touched.sampleIsDead && Boolean(formik.errors.sampleIsDead)}>
                    <FormLabel component="legend">O cão morreu?</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          name="sampleIsDead"
                          id="sampleIsDead"
                          color="primary"
                        />
                      }
                      label="Sim"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <FormControl component="fieldset" error={formik.touched.sampleLVC && Boolean(formik.errors.sampleLVC)}>
                    <FormLabel component="legend">O cão está com LVC?</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={formik.handleChange}
                          name="sampleLVC"
                          id="sampleLVC"
                          color="primary"
                        />
                      }
                      label="Sim"
                    />
                  </FormControl>
                </Grid>
                {/* Sintomas */}
                <Grid item xs={12} sm={12}>
                  <Typography component="h1" variant="h6">
                    Dados de Sintomas
                    <IconButton color="secondary" aria-label="add an alarm" onClick={addSymptom}>
                      <Add />
                    </IconButton>
                  </Typography>
                </Grid>
                {symptoms.map((jump, index) => (
                  <>
                    <Grid item xs={12} sm={6} lg={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="sintName"
                        label="Sintoma"
                        name="sintName"
                        value={formik.values.sintName}
                        onChange={formik.handleChange}
                        error={formik.touched.sintName && Boolean(formik.errors.sintName)}
                        helperText={formik.touched.sintName && formik.errors.sintName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <FormControl variant="outlined" fullWidth error={formik.touched.sintIntensity && Boolean(formik.errors.sintIntensity)}>
                        <InputLabel id="sintIntensityLabel">Intensidade</InputLabel>
                        <Select
                          required
                          labelId="sintIntensityLabel"
                          id="sintIntensity"
                          name="sintIntensity"
                          value={formik.values.sintIntensity}
                          onChange={formik.handleChange}
                          label="Intensidade"
                        >
                          <MenuItem value={'N/A'}>Não se aplica</MenuItem>
                          <MenuItem value={'1'}>1</MenuItem>
                          <MenuItem value={'2'}>2</MenuItem>
                          <MenuItem value={'3'}>3</MenuItem>
                          <MenuItem value={'5'}>5</MenuItem>
                          <MenuItem value={'6'}>6</MenuItem>
                        </Select>
                        <FormHelperText>{formik.touched.sintIntensity && formik.errors.sintIntensity}</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid container sm={12} lg={12}></Grid>
                  </>
                ))}
                {/* Exames */}
                <Grid item xs={12} sm={12}>
                  <Typography component="h1" variant="h6">
                    Dados de Exames
                    <IconButton color="secondary" aria-label="add an alarm" onClick={addExam}>
                      <Add />
                    </IconButton>
                  </Typography>
                </Grid>
                {exams.map((jump, index) => (
                  <>
                    <Grid item xs={12} sm={6} lg={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="exameName"
                        label="Exame"
                        name="exameName"
                        value={formik.values.exameName}
                        onChange={formik.handleChange}
                        error={formik.touched.exameName && Boolean(formik.errors.exameName)}
                        helperText={formik.touched.exameName && formik.errors.exameName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        required
                        InputLabelProps={{ shrink: true }}
                        type="date"
                        id="exameDate"
                        label="Data do exame"
                        name="exameDate"
                        value={formik.values.exameDate}
                        onChange={formik.handleChange}
                        error={formik.touched.exameDate && Boolean(formik.errors.exameDate)}
                        helperText={formik.touched.exameDate && formik.errors.exameDate}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="exameResult"
                        label="Resultado"
                        name="exameResult"
                        value={formik.values.exameResult}
                        onChange={formik.handleChange}
                        error={formik.touched.exameResult && Boolean(formik.errors.exameResult)}
                        helperText={formik.touched.exameResult && formik.errors.exameResult}
                      />
                    </Grid>
                    <Grid container sm={12} lg={12}></Grid>
                  </>
                ))}
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