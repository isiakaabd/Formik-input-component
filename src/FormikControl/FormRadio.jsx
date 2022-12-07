import { Radio, FormLabel, FormControlLabel, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { ErrorMessage, useField } from "formik";
import TextError from "./TextError";

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel control={<Radio />} label={label} {...field} />;
};
const FormRadio = ({ label, name, options, ...rest }) => {
  return (
    <Grid container direction="column" gap={2}>
      <FormLabel>{label}</FormLabel>
      <Grid item container justifyContent="space-between">
        {options.map((option, index) => (
          <Grid item key={index}>
            <MyRadio
              type="radio"
              name={name}
              label={option.key}
              value={option.value}
              as={MyRadio}
              {...rest}
            />
          </Grid>
        ))}
      </Grid>
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};
FormRadio.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
export default FormRadio;
