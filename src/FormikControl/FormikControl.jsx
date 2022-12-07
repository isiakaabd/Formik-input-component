import SelectInput from "./SelectInput";
import TextArea from "./TextArea";
import Input from "./Input";
import PropTypes from "prop-types";
import TimePickers from "./TimePickers";
import DatePickers from "./DatePicker";
import FormRadio from "./FormRadio";
import FormCheckBox from "./FormCheckBox";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <SelectInput {...rest} />;
    case "radio":
      return <FormRadio {...rest} />;
    case "time":
      return <TimePickers {...rest} />;
    case "date":
      return <DatePickers {...rest} />;
    case "checkbox":
      return <FormCheckBox {...rest} />;
    default:
      return null;
  }
};
FormikControl.propTypes = {
  control: PropTypes.string,
};
export default FormikControl;
