import { Form, Formik } from "formik";
import { Grid, Typography, Button, Paper } from "@mui/material";
import FormikControl from "./FormikControl/FormikControl";
import * as Yup from "yup";
import dayjs from "dayjs";
const App = () => {
  const validationSchema = Yup.object({
    FullName: Yup.string("Enter your Name").required("name is required"),
    country: Yup.string("Enter your Country").required("country is required"),
    gender: Yup.string("Select your Gender").required("Gender is required"),
    description: Yup.string("Enter your description").notRequired(),
    date: Yup.date("Enter date").required("Date is required"),
    radio: Yup.string().required("Sport is required"),
    email: Yup.string("Enter you Email").email().required("Email is required"),
    food: Yup.array()
      .min(1)
      .of(Yup.string().required("select at least one food"))
      .required("select atleast one food"),
  });
  const date = dayjs("2022-04-07");
  const time = dayjs("2022-08-18T21:11:54");
  return (
    <Grid item container sm={10} md={6} sx={{ margin: "auto" }}>
      <Paper sx={{ py: 4, px: 2, width: "100%" }}>
        <Typography variant="h5" textAlign="center">
          Sample Input Components
        </Typography>
        <Formik
          initialValues={{
            FullName: "",
            country: "",
            gender: "",
            description: "",
            date,
            radio: "",
            time,
            food: [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Form style={{ marginTop: "1rem", width: "100%" }}>
            <Grid container gap={2} direction="column">
              <Grid container gap={2} flexWrap={{ md: "nowrap", xs: "wrap" }}>
                <Grid item md={6} xs={12}>
                  <FormikControl
                    control="input"
                    label="Name"
                    id="name"
                    name="FullName"
                    placeholder="Enter your FullName"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormikControl
                    control="input"
                    label="Email"
                    id="email"
                    name="email"
                    placeholder="Enter your Email Address"
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                gap={2}
                flexWrap={{ md: "nowrap", xs: "wrap" }}
              >
                <Grid item md={6} xs={12}>
                  <FormikControl
                    control="select"
                    label="Gender"
                    id="gender"
                    placeholder="Select a gender"
                    options={[
                      { key: "Gender", value: "" },
                      { key: "Male", value: "Male" },
                      { key: "Female", value: "Female" },
                    ]}
                    name="gender"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormikControl
                    control="date"
                    label="Date"
                    id="date"
                    placeholder="Select a date"
                    name="date"
                  />
                </Grid>
              </Grid>
              <Grid item container gap={2}>
                <FormikControl
                  control="textarea"
                  label="Description"
                  id="description"
                  placeholder="Enter description"
                  name="description"
                />
              </Grid>

              <Grid item container>
                <FormikControl
                  control="radio"
                  label="Sport"
                  id="sport"
                  options={[
                    { key: "Football", value: "Football" },
                    { key: "Tennis", value: "Tennis" },
                    { key: "Hockey", value: "Hockey" },
                  ]}
                  name="radio"
                />
              </Grid>
              <Grid
                item
                container
                gap={2}
                flexWrap={{ md: "nowrap", xs: "wrap" }}
              >
                <Grid item md={6} xs={12}>
                  <FormikControl
                    control="time"
                    label="Time"
                    id="time"
                    placeholder="Select Time"
                    name="time"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormikControl
                    control="input"
                    label="Country"
                    id="country"
                    name="country"
                    placeholder="Enter your Country"
                  />
                </Grid>
              </Grid>
              <Grid item container gap={2} flexWrap="nowrap">
                <FormikControl
                  control="checkbox"
                  name="food"
                  value="Rice"
                  label="Rice"
                />
                <FormikControl
                  control="checkbox"
                  name="food"
                  label="Beans"
                  value="Beans"
                />
                <FormikControl
                  control="checkbox"
                  name="food"
                  value="Yam"
                  label="Yam"
                />
              </Grid>
            </Grid>

            <Button
              sx={{
                mt: 3,
                background: "blue",
                color: "#fff",
                padding: "1em 1.2em",
                "&:hover": {
                  color: "#fff",
                  background: "blue",
                },
              }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Formik>
      </Paper>
    </Grid>
  );
};
export default App;
