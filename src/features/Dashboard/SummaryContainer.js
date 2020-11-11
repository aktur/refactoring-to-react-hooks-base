import React, { useContext } from "react";
import { AppContext } from "../../App";

const SummaryContainer = () => {
  const context = useContext(AppContext)

  return (
    <div className="summary flex flex-row">
      <div className="card bg-indigo">
        <p>CellFast sales</p>
        <p>$ {context.salesTotal}</p>
      </div>
      <div className="card bg-blue">
        <p>CellNow subscriptions</p>
        <p>$ {context.subscriptionsTotal}</p>
      </div>
    </div>
  );
};

export default (SummaryContainer);
