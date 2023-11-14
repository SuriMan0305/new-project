import { useState } from "react";
import { NextButton } from "./components/buttonScript";
import { MassiveData } from "./components/liastArray";

function App() {
  const [listData, setListData] = useState([
    {
      id: 1,
      content: "first component",
      status: false,
    },
    {
      id: 2,
      content: "second component",
      status: false,
    },
    {
      id: 3,
      content: "third component",
      status: false,
    },
    {
      id: 4,
      content: "four component",
      status: false,
    },
    {
      id: 5,
      content: "five component",
      status: false,
    },
    {
      id: 6,
      content: "six component",
      status: false,
    },
    {
      id: 7,
      content: "seven component",
      status: false,
    },
  ]);

  return (
    <>
      <MassiveData listData={listData} />
      <NextButton listData={listData} setListData={setListData} />
    </>
  );
}

export default App;
