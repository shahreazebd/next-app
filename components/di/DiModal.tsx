import React from "react";
import Datepicker from "react-datepicker";
import axios from "axios";

export default function DiModal() {
  const [startDate, setStartDate] = React.useState(new Date());
  axios.get("");
  return (
    <section>
      <Datepicker selected={startDate} onChange={(date) => setStartDate(date as Date)} />
      <h1>Di Modal</h1>
    </section>
  );
}
