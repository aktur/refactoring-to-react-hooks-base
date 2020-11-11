import React, { useContext } from "react";
import LineChart from "./LineChart";
import PropTypes from "prop-types";
import { AppContext } from "../../App"

const ChartContainer = ({ selectedLabel }) => {
  const context = useContext(AppContext)
  const dataset = context.data
  const chartLabels = dataset.map(dataPoint => dataPoint.timestamp);
  const chartValues = dataset.map(dataPoint => dataPoint.amount);
  return (
    <div>
      <LineChart
        chartLabels={chartLabels}
        chartValues={chartValues}
        label={selectedLabel}
      />
    </div>
  );
};

ChartContainer.propTypes = {
  selectedLabel: PropTypes.string.isRequired
};

export default (ChartContainer);
