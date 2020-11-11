import { useEffect, useReducer } from "react";

const ST_LOADING = 'loading'
const ST_SUCCESS = 'success'
const ST_ERROR = 'error'

const initialState = {
  loading: false,
  error: "",
  data: [{ timestamp: new Date().toISOString(), amount: 0 }]
};

function reducer(state, action) {
  switch (action.type) {
    case ST_LOADING:
      return { ...state, loading: true, error: "" }
    case ST_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    default:
      return { ...state, loading: false, error: action.payload }
  }
}

export default function useDataFetching(endpoint) {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    if (!endpoint) return
    dispatch({ type: ST_LOADING })
    fetch(endpoint)
      .then(response => {
        if (!response.ok) throw Error(response.statusText)
        return response.json()
      })
      .then(json => dispatch({ type: ST_SUCCESS, payload: json }))
      .catch(e => {
        dispatch({ type: ST_ERROR, payload: 'Error: ' + e.message })
      });
  }, [endpoint]);
  return state
}
