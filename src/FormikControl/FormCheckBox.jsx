import { FormControlLabel, Grid, Checkbox } from "@mui/material";
import PropTypes from "prop-types";
import { ErrorMessage, useField, Field } from "formik";
import TextError from "./TextError";

const MyCheckBox = ({ label, ...props }) => {
  return (
    <FormControlLabel
      control={<Checkbox color="success" size="large" {...props} />}
      labelPlacement="start"
      label={label}
    />
  );
};

const FormCheckBox = ({ name, ...rest }) => {
  const [field] = useField(name);
  return (
    <Grid item container>
      <Field type="checkbox" {...field} as={MyCheckBox} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};
FormCheckBox.propTypes = {
  name: PropTypes.string,
};
export default FormCheckBox;
