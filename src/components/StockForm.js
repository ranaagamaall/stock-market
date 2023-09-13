import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function StockForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    company: Yup.string()
      .required("company name is required"),
    price: Yup.string()
      .min(8, "password must be at least 8 characters")
      .required("price is required"),
    shares: Yup.string()
      .required("number of shares is required")
  });

  const formFieldClasses = "block w-full bg-transparent rounded-md  py-1.5 px-2 text-text shadow-sm ring-1 ring-inset ring-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
  const labelClasses = "block text-sm font-medium leading-6 text-text mt-6"
  const errorClasses = "text-sm font-light text-fail font-main"

  function handleSubmit(values) { }
  return (
    <div className="text-text">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(v) => handleSubmit(v)}
      >
        {({ values }) => (
          <Form>
            <div>
              <div className="sm:col-span-3 ">
                <label
                  htmlFor="company"
                  className={labelClasses}
                >
                  Company
                </label>
                <div className="mt-">
                  <Field
                    className={formFieldClasses}
                    name="company"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="company"
                    component="span"
                    className={errorClasses}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className={labelClasses}
                >
                  Initial Stock Price
                </label>
                <div className="mt-2">
                  <Field
                    className={formFieldClasses}
                    name="price"
                    type="text"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="price"
                    component="span"
                    className={errorClasses}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className={labelClasses}
                >
                  Number Of Shares
                </label>
                <div className="mt-2">
                  <Field
                    className={formFieldClasses}
                    name="shares"
                    type="text"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="shares"
                    component="span"
                    className={errorClasses}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className={`${!validationSchema.isValidSync(values)
                ? "bg-opacity-50 disabled"
                : "hover:bg-opacity-90"
                } bg-accent mx-auto w-full font-main uppercase flex justify-center items-center mt-32 rounded-md bg-Blue px-3 py-2 text-md font-semibold text-text shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text`}
              disabled={!validationSchema.isValidSync(values)}
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default StockForm;
