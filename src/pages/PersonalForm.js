import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../components/Input/CustomInput";
import Button from "../components/Button/Button";
import CustomDropdown from "../components/Input/CustomDropdown";

const PersonalForm = (props) => {
    const validationSchem = [
        Yup.object().shape({
          state: Yup.object().shape({
            label: Yup.string().required(),
            value: Yup.string().required("State is required"),
          })
        }),
      ];
    
    
 
    
  const State = [
    { value: 1, label: "Lagos" },
    { value: 2, label: "Abuja" },
  ];
  return (
    <>
      <div>
        <Formik  
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            acceptedTerms: false,
            jobType: "",
            State: { value: "", label: "" },
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(30, "Must be 30 characters or less")
              .required("Required"),
            email: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            addressone: Yup.string()
              .email("Invalid email addresss`")
              .required("Required"),
            addresstwo: Yup.string()
              .required("Required")
              .oneOf([true], "You must accept the terms and conditions."),
              localgovernment: Yup.string()
              .required("Required")
              .oneOf([true], "You must accept the terms and conditions."),
              state: Yup.boolean()
              .required("Required")
              .oneOf([true], "You must accept the terms and conditions."),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await new Promise((r) => setTimeout(r, 500));
            setSubmitting(false);
          }}
        >
          <Form>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <CustomInput
                    label="Name"
                    id="firstName"
                    name="name"
                    type="text"
                    placeholder="name"
                    icon={"ic"}
                  />
                </div>
              </div>

              <br />

              <div className="row">
                <div className="col-md-12">
                  <div
                    style={{
                      position: "absolute",
                      top: "5px",
                      fontSize: "11px",
                      left: "22%",
                      color: "#A5ADBA",
                    }}
                  >
                    The purchase reciept would be sent to this address
                  </div>
                  <CustomInput
                    label="Email Address"
                    id="email"
                    name="Email Address"
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <br />

              <div className="row">
                <div className="col-md-12">
                  <CustomInput
                    label="Address 1"
                    id="address1"
                    name="address1"
                    type="text"
                    placeholder="the address of your user goes here"
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12">
                  <CustomInput
                    label="Address 2"
                    id="address2"
                    name="address2"
                    type="text"
                    placeholder="another address of your user goes here"
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <CustomInput
                    label="Local Government"
                    id="lga"
                    name="lga"
                    type="text"
                    placeholder="eg. surulere"
                  />
                </div>
                <div className="col-md-6">
                  <CustomDropdown
                    label="State"
                    id="state"
                    name="state"
                    options={State}
                  />
                  <br />
                </div>
              </div>
              <br />
            </div>
          </Form>
        </Formik>{" "}
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
    </>
  );
};
export default PersonalForm;
