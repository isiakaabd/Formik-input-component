import { Field, ErrorMessage, useFormikContext, useField } from "formik";
import TextError from "./TextError";
import { TextField, FormLabel, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Times = ({ name, ...rest }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        {...rest}
        onChange={(val) => setFieldValue(name, val)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

Times.propTypes = {
  name: PropTypes.string,
};

const TimePickers = (props) => {
  const { name, label, ...rest } = props;
  const [field] = useField(name);
  return (
    <Grid container direction="column" gap={1}>
      <FormLabel>{label}</FormLabel>
      <Field as={Times} {...field} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};

TimePickers.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default TimePickers;
