import React, { useState } from "react";
import { Tab } from "../components/Tab/Tab";
import PersonalForm from "./PersonalForm";
import BillingForm from "./BillingForm";
import ConfirmPaymentCard from "../components/ConfirmCard/ConfirmCard";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Layout from "../components/Layout/BodyWrapper";

const CompletePurchase = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/result");
  };
  const [tabSettings] = useState({
    tab1: {
      id: "Personal Info",
      value: "Personal Info",
    },
    tab2: {
      id: "Billing Info",
      value: "Billing Info",
    },
    tab3: {
      id: "Confirm Payment",
      value: "Confirm Payment",
    },
  });
  const [currentTab, setCurrentTab] = useState("Personal Info");
  const toggleTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <Layout headerText="Complete Purchase">
     
      <div className="col-md-12" style={{ padding: "0px" }}>
        <Tab
          currentTab={currentTab}
          settings={tabSettings}
          toggleTab={(id) => toggleTab(id)}
        >
          <div
            className={[
              "tab-pane",
              "fade",
              "show",
              currentTab === "Personal Info" ? "active" : "",
            ].join(" ")}
            id=""
            role="tabpanel"
            aria-labelledby="upcoming-tab"
          >
            <div>
              <div className="row">
                <div className="col-md-12">
                  <div>
                    {" "}
                    <PersonalForm />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={[
              "tab-pane",
              "fade",
              "show",
              currentTab === "Billing Info" ? "active" : "",
            ].join(" ")}
            id=""
            role="tabpanel"
            aria-labelledby="past-tab"
          >
            <div>
              <div className="row">
                <div className="col-md-12">
                  <BillingForm />
                </div>
              </div>
            </div>
          </div>
          <div
            className={[
              "tab-pane",
              "fade",
              "show",
              currentTab === "Confirm Payment" ? "active" : "",
            ].join(" ")}
            id=""
            role="tabpanel"
            aria-labelledby="past-tab"
          >
            <div>
              <div className="row">
                <div className="col-md-12">
                  <ConfirmPaymentCard />
                  <br />
                  <div style={{ marginLeft: "20%" }}>
                    <Button onClick={handleClick}>Pay</Button>
                    <span>
                      <Button>Cancel Payment</Button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </div>
    </Layout>
  );
};

export default CompletePurchase;
