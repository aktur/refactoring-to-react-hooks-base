import React from 'react'
import PropTypes from "prop-types"
import Loading from './Loading'
import useDataFetching from './customhooks/useDataFetching'

function Fetching({ endpoint }) {
  const { loading, error, data } = useDataFetching(endpoint)

  if (loading === true) {
    return (<Loading />)
  }
  if (error !== "") {
    return <ul>{error}</ul>
  }
  return (
    <ul>
      {data.map(element => (
        <li key={element.timestamp}>
          {element.timestamp} - {element.amount}
        </li>
      ))}
    </ul>
  );
}

Fetching.propTypes = {
  endpoint: PropTypes.string.isRequired
};

export default Fetching
