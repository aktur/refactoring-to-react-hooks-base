import { useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  error: "",
  data: [{ timestamp: new Date().toISOString(), amount: 0 }]
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, loading: true, error: "" }
    case 'success':
      return { ...state, loading: false, data: action.data }
    default:
      return { ...state, loading: false, error: action.error }
  }
}

export default function useDataFetching(endpoint) {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    if (!endpoint) return
    dispatch({ type: 'loading' })
    fetch(endpoint)
      .then(response => response.json())
      .then(json => dispatch({ type: 'success', data: json }))
      .catch(e => {
        dispatch({ type: 'error', error: 'Error: ' + e.message })
      });
  }, [endpoint]);
  return state
}
