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

  function handleSubmit(values) {}
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
                  className="block text-sm font-medium leading-6 text-text"
                >
                  Company
                </label>
                <div className="mt-">
                  <Field
                    className="block w-full bg-transparent rounded-md  py-1.5 px-2 text-text shadow-sm ring-1 ring-inset ring-secondary  focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    name="company"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="company"
                    component="span"
                    className=" text-fail font-main text-sm font-light"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium mt-6 leading-6 text-text"
                >
                  Initial Stock Price
                </label>
                <div className="mt-2">
                  <Field
                    className="block w-full bg-transparent rounded-md border-0 py-1.5 px-2 text-text shadow-sm ring-1 ring-inset ring-secondary focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    name="price"
                    type="text"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="price"
                    component="span"
                    className=" text-fail font-main text-sm font-light "
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium mt-6 leading-6 text-text"
                >
                  Number Of Shares
                </label>
                <div className="mt-2">
                  <Field
                    className="block w-full bg-transparent rounded-md border-0 py-1.5 px-2 text-text shadow-sm ring-1 ring-inset ring-secondary  focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                    name="shares"
                    type="text"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="shares"
                    component="span"                        
                    className=" text-fail font-main text-sm font-light "
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className={`${
                !validationSchema.isValidSync(values)
                  ? "bg-blue-300 "
                  : "hover:bg-opacity-90"
              } mx-auto w-full font-main uppercase flex justify-center items-center mt-32 rounded-md bg-Blue px-3 py-2 text-md font-semibold text-text shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text`}
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
