import PropTypes from "prop-types";
import { Field, ErrorMessage, useField } from "formik";
import { FormLabel, Select, MenuItem, Grid } from "@mui/material";
import TextError from "./TextError";
const Selects = (props) => {
  const { name, options, ...rest } = props;
  return (
    <Select name={name} displayEmpty {...rest}>
      {options.map((option) => (
        <MenuItem key={option.key} value={option.value}>
          {option.key}
        </MenuItem>
      ))}
    </Select>
  );
};
const SelectInput = (props) => {
  const { name, label, ...rest } = props;
  const [field] = useField(name);

  return (
    <Grid container direction="column" gap={2}>
      <FormLabel>{label}</FormLabel>
      <Field
        type="select"
        name={name}
        as={Selects}
        displayEmpty={true}
        {...field}
        {...rest}
      />
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
