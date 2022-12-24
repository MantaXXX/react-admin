import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const TextFieldLists = [
  { label: "First Name", tag: "firstName", gridColumn: "span 2" },
  { label: "Last Name", tag: "lastName", gridColumn: "span 2" },
  { label: "Email", tag: "email", gridColumn: "span 4" },
  { label: "Contact Number", tag: "contact", gridColumn: "span 4" },
  { label: "Address 1", tag: "address1", gridColumn: "span 4" },
  { label: "Address 2", tag: "address2", gridColumn: "span 4" },
]

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {/* values, errors, touched... arguments from Formik   */}
        {
          ({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                {
                  TextFieldLists.map(({ label, tag, gridColumn }) => (
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      key={tag}
                      label={label}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values[tag]}
                      name={tag}
                      error={touched[tag] && errors[tag]}
                      helperText={touched[tag] && errors[tag]}
                      sx={{ gridColumn }}
                    />
                  ))
                }
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Create New User
                </Button>
              </Box>
            </form>
          )}
      </Formik>
    </Box>
  );
};

export default Form