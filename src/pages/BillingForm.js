import { Form, Formik } from "formik";
import React from "react";
import CustomDropdown from "../components/Input/CustomDropdown";
import * as Yup from "yup";
import Button from "../components/Button/Button";

const BillingForm = () => {
  const validationSchem = [
    Yup.object().shape({
      cardtype: Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required("Card type is required"),
      }),
    }),
  ];

  const CardType = [
    { value: 1, label: "Verve" },
    { value: 2, label: "Visa" },
  ];

  const cardInitialValues = {
    CardType: { value: "", label: "" },
  };

  return (
    <div>
      <Formik initialValues={cardInitialValues} enableReinitialize={true}>
        {({ values, isSubmitting, errors }) => (
          <Form>
            <div>
              <div className="col-md-12">
                <CustomDropdown
                  label="CardType"
                  id="cardtype"
                  name="cardtype"
                  options={CardType}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Button
        style={{ width: "auto" }}
        btnStyle="primary"
        btnSize="btn-md"
        type="submit"
      >
        {" "}
        Save{" "}
      </Button>
    </div>
  );
};

export default BillingForm;
