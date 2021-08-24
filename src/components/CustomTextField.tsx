import { TextField, TextFieldProps } from "@material-ui/core"
import { useFormik } from "formik"
import { initialValues } from "../pages/Amostra/formik";
import { validationSchema } from "../pages/Amostra/schema";

type CustomTextFieldProps = TextFieldProps & {
  name: string
  label: string
}

export const CustomTextField = ({ name, label }: CustomTextFieldProps) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      id={name}
      label={label}
      name={name}
      value={formik.values[`${name}`]}
      onChange={formik.handleChange}
      error={formik.touched[`${name}`] && Boolean(formik.errors[`${name}`])}
      helperText={formik.touched[`${name}`] && formik.errors[`${name}`]}
    />
  )
}