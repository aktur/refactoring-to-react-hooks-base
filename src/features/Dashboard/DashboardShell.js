import React, { Component, useState } from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";
import { fetchDataset } from "./DashboardSlice";
import Select from "../../common/components/Select";

function BuildSelect({ handleChange }) {

  const optionsForSelect = [
    { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
    {
      label: "Subscriptions",
      value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
    }
  ];

  return (
    <>
      <div className="field">
        <Select
          handleChange={handleChange}
          label="Please, select a chart"
          id="select-chart"
          options={optionsForSelect}
        />
        <div className="chevron-wrapper flex">
          <svg
            className="chevron"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </>
  );
}

function DashboardShell() {
  const [selectedLabel, setSelectedLabel] = useState("");

  function handleSelectChange(event) {
    setSelectedLabel(event.target.selectedOptions[0].label);
  }

  // constructor(props) {
  //   super(props);
  //   this.state = { selectedLabel: "" };

  //   this.handleSelectChange = this.handleSelectChange.bind(this);
  // }

  // componentDidMount() {
  //   // TODO
  //   this.props.fetchDataset(`${process.env.REACT_APP_BASE_URL}/totals/`);
  // }

  // handleSelectChange(event) {
  //   // TODO
  //   const selectedLabel = event.target.selectedOptions[0].label;
  //   this.props.fetchDataset(event.target.value);
  //   this.setState({ selectedLabel });
  // }

  return (
    <Layout>
      <Aside>
        <h2># Polly dashboard</h2>
        <BuildSelect handleChange={handleSelectChange} />
      </Aside>
      <Main>
        <h1>
          Welcome, <span className="bold">learner!</span>
        </h1>
        <SummaryContainer />
        <ChartContainer selectedLabel={selectedLabel} />
      </Main>
    </Layout>
  );
}

const mapDispatchToProps = {
  fetchDataset
};

export default (DashboardShell);
