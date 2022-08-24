import React, { useState } from "react";
import { Tab } from "../components/Tab/Tab";
import PersonalForm from "./PersonalForm";
import BillingForm from "./BillingForm";

const CompletePurchase = () => {
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
    <div>
      <h4>Complete Purchase</h4>
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
                  confirm
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </div>
    </div>
  );
};

export default CompletePurchase;
