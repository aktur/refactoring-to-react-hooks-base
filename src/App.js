import React from "react";
import Container from "./common/components/Container";
import DashboardShell from "./features/Dashboard/DashboardShell";

const App = () => {
  return (
    <div>
      <DashboardShell />
      <Container />
    </div>
  )
};

export default App;
