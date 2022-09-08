import React from "react";
import "./App.css";
import Table from "./components/Table";
import { data } from "./sample-data";
import { HeaderInfo } from "./HeaderInfo";
import { Data } from "./Data";

const headerData: HeaderInfo<Data>[] = [
  {
    key: "userId",
    header: "User ID",
    width: 150,
  },
  {
    key: "title",
    header: "Title",
  },
  {
    key: "completed",
    header: "Is completed?",
  },
];

const App = () => {
  return (
    <div className="App">
      <Table headerData={headerData} data={data} />
    </div>
  );
};

export default App;
