import { Field, ErrorMessage, useFormikContext, useField } from "formik";
import TextError from "./TextError";
import { TextField, FormLabel, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Dates = ({ name, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...rest}
        onChange={(val) => setFieldValue(name, val)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

Dates.propTypes = {
  name: PropTypes.string,
};

const DatePickers = (props) => {
  const { name, label, ...rest } = props;
  const [field] = useField(name);
  return (
    <Grid container direction="column" gap={1}>
      <FormLabel>{label}</FormLabel>
      <Field as={Dates} {...field} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

DatePickers.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default DatePickers;
