import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SearchForm = () => {
  const initialValues = {
    username: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Please enter a GitHub username."),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form className="border p-4" onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter GitHub username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <Form.Text className="text-danger">
            {formik.errors.username}
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="text-center">
        <Button variant="success" type="submit">
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};
