import { ErrorMessage, Field, useField } from "formik";
import PropTypes from "prop-types";
import { FormLabel, Grid, TextField } from "@mui/material";
import TextError from "./TextError";
const Input = (props) => {
  const { name, label, ...rest } = props;
  const [field] = useField(name);

  return (
    <Grid container direction="column">
      <FormLabel component="legend">{label}</FormLabel>
      <Field {...field} {...rest} as={TextField} />
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
