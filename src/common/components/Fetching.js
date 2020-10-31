//import React, { useState, useEffect } from 'react'
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

async function Fetching(props) {
  let result = [];
  await fetch(`${props}`)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json()
    })
    .then(data => {
      result = data
    })

  return (
    result
  )
}

export default Fetching