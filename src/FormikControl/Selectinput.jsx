import PropTypes from "prop-types";
import { Field, ErrorMessage, useField } from "formik";
import { FormLabel, Select, MenuItem, Grid } from "@mui/material";
import TextError from "./TextError";

const SelectInput = (props) => {
  const { name, label, options, ...rest } = props;
  const [field] = useField(name);

  return (
    <Grid container direction="column" gap={1}>
      <FormLabel>{label}</FormLabel>
      <Field {...field} {...rest} as={Select}>
        {options.map((option) => (
          <MenuItem key={option.key} {...rest} value={option.value}>
            {option.key}
          </MenuItem>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

SelectInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array.isRequired,
};

export default SelectInput;
