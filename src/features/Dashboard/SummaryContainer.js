import React, { useContext } from "react";
import { appContext } from "../../App";

const SummaryContainer = () => {
  const { salesTotal, subscriptionsTotal } = useContext(appContext)

  return (
    <div className="summary flex flex-row">
      <div className="card bg-indigo">
        <p>CellFast sales</p>
        <p>$ {salesTotal}</p>
      </div>
      <div className="card bg-blue">
        <p>CellNow subscriptions</p>
        <p>$ {subscriptionsTotal}</p>
      </div>
    </div>
  );
};

export default (SummaryContainer);
