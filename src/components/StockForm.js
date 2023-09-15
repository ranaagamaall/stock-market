import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Dialog from "./Dailog"
import React, {useRef} from "react";

function StockForm() {
  const ref = useRef(null);

  const initialValues = {
    company: "",
    price: "",
    shares: ""
  };

  const validationSchema = Yup.object().shape({
    company: Yup.string().required("company name is required"),
    price: Yup.number()
      .positive("price must be positive")
      .required("price is required"),
    shares: Yup.number()
      .positive("price must be positive")
      .required("number of shares is required"),
  });

  const formFieldClasses =
    "block w-full bg-transparent rounded-md  py-1.5 px-2 text-text shadow-sm ring-1 ring-inset ring-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6";
  const labelClasses = "block text-sm font-medium leading-6 text-text mt-6";
  const errorClasses = "text-sm font-light text-fail font-main";

  function handleSubmit(values) {
    ref.current.showModal();
  }

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
                <label htmlFor="company" className={labelClasses}>
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
                <label htmlFor="last-name" className={labelClasses}>
                  Initial Stock Price
                </label>
                <div className="mt-2">
                  <Field
                    className={formFieldClasses}
                    name="price"
                    type="number"
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
                <label htmlFor="last-name" className={labelClasses}>
                  Number Of Shares
                </label>
                <div className="mt-2">
                  <Field
                    className={formFieldClasses}
                    name="shares"
                    type="number"
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
              className={`${
                !validationSchema.isValidSync(values)
                  ? "bg-opacity-50 disabled"
                  : "hover:bg-opacity-80"
              } bg-light mx-auto w-full font-main uppercase flex justify-center items-center mt-32 rounded-md bg-Blue px-3 py-2 text-md font-semibold text-text shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text`}
              disabled={!validationSchema.isValidSync(values)}
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
      <Dialog ref={ref} name="Company Successfuly created" className=" w-1/2 fixed inset-0"/>
    </div>
  );
}

export default StockForm;
