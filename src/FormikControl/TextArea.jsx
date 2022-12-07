import { Field, ErrorMessage, useField } from "formik";
import TextError from "./TextError";
import PropTypes from "prop-types";
import { FormLabel, Grid, TextField } from "@mui/material";

const EmptyTextarea = (props) => {
  const { minRows, ...rest } = props;
  return <TextField {...rest} multiline minRows={minRows ? minRows : 5} />;
};
EmptyTextarea.propTypes = {
  name: PropTypes.string,
  minRows: PropTypes.number,
};
const TextArea = ({ label, name, ...rest }) => {
  const [field] = useField(name);
  return (
    <Grid container direction="column" gap={2}>
      <FormLabel component="legend">{label}</FormLabel>
      <Field {...field} as={EmptyTextarea} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </Grid>
  );
};
TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default TextArea;
