import React, { useState } from "react";
import Aside from "../../common/components/Aside";
import ChartContainer from "./ChartContainer";
import Layout from "../../common/components/Layout";
import Main from "../../common/components/Main";
import SummaryContainer from "./SummaryContainer";
import Select from "../../common/components/Select";

const DashboardShell = () => {
  const [selectedLabel, setSelectedLabel] = useState("");

  // constructor(props) {
  //   super(props);
  //   this.state = { selectedLabel: "" };

  //   this.handleSelectChange = this.handleSelectChange.bind(this);
  // }

  // componentDidMount() {
  //   // TODO
  //   this.props.fetchDataset(`${process.env.REACT_APP_BASE_URL}/totals/`);
  // }

  function handleSelectChange(event) {
    setSelectedLabel(event.target.selectedOptions[0].label);
    //   // TODO
    //   const selectedLabel = event.target.selectedOptions[0].label;
    //   this.props.fetchDataset(event.target.value);
    //   this.setState({ selectedLabel });
  }

  const optionsForSelect = [
    { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
    {
      label: "Subscriptions",
      value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
    }
  ];

  return (
    <Layout>
      <Aside>
        <h2># Polly dashboard</h2>
        <Select
          label="Please, select a chart"
          handleChange={handleSelectChange}
          id="select-chart"
          options={optionsForSelect}
        />
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

export default (DashboardShell);
