import React, { useState } from 'react'
import Select from './Select'
import Fetching from './Fetching'
import { Server } from "miragejs";
import { sales, subscriptions } from '../../mocks';

new Server({
  routes() {
    this.namespace = "api";

    this.get("/subscriptions/", () => {
      return subscriptions;
    });
    this.get("/sales/", () => {
      return sales;
    })
  }
});

export default function Container() {
  const [selectedEndpoint, setSelectedEndpoint] = useState("");

  const options = [
    { label: "Sales", value: `${process.env.REACT_APP_BASE_URL}/sales/` },
    {
      label: "Subscriptions",
      value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
    }
  ];

  function handleSelectChange(event) {
    setSelectedEndpoint(event.target.value);
  }

  return (
    <>
      <Select
        handleChange={handleSelectChange}
        label="Please, select a chart"
        id="select-chart"
        options={options}
      />
      {selectedEndpoint ? <Fetching endpoint={selectedEndpoint} /> : null}
    </>
  );
}
