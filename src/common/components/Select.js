import React, { useState } from 'react'
import Fetching from './Fetching';

export default function Select(props) {
  const [data, setData] = useState([])
  const optionsForSelect = [
    {
      label: "Sales",
      value: `${process.env.REACT_APP_BASE_URL}/sales/`
    },
    {
      label: "Subscriptions",
      value: `${process.env.REACT_APP_BASE_URL}/subscriptions/`
    }
  ];

  const handleSelectChange = (event) => {
    (async () => {
      let data = await Fetching(event.target.selectedOptions[0].value);
      setData(data);
    })();
  }

  return (
    <>
      <label>Please, select a chart:</label>
      <select onChange={handleSelectChange}>
        <option value="">--</option>
        {optionsForSelect.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ul>
        {data.map((element) => <li key={element.timestamp}>{element.timestamp} {element.amount}</li>)}
      </ul>
    </>
  )
}
