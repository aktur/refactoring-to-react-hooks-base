import React from "react";
import Container from "./common/components/Container";
import DashboardShell from "./features/Dashboard/DashboardShell";
import useDataFetching from "./common/customhooks/useDataFetching";

import { Server } from "miragejs";
import { sales, subscriptions } from './mocks';

new Server({
  routes() {
    this.namespace = "api";
    //this.timing = 3000

    this.get("/subscriptions/", () => {
      return subscriptions;
    });
    this.get("/sales/", () => {
      return sales;
    })
  }
});

const initialContext = {
  loading: false,
  error: "",
  salesTotal: 0,
  subscriptionsTotal: 0,
  data: [{ timestamp: new Date().toISOString(), amount: 0 }]
};

export const AppContext = React.createContext(initialContext)

const App = () => {
  return (
    <AppContext.Provider value={initialContext}>
      <DashboardShell fetchDataset={()=>{}}/>
    </AppContext.Provider>)
};

export default App;
