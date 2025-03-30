import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
    console.log(selected);
  };

  const handleMultiSelection = (getCurrentId) => {};

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          Enable Multi Selection
        </button>
        <div className="accordion">
          {data && data.length > 0
            ? data.map((dataItem) => (
                <div key={dataItem.id} className="item">
                  <div
                    onClick={
                      enableMultiSelection
                        ? () => handleMultiSelection(dataItem.id)
                        : () => handleSingleSelection(dataItem.id)
                    }
                    className="title"
                  >
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {selected === dataItem.id ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null}
                </div>
              ))
            : "No Data Found"}
        </div>
      </div>
    </>
  );
};

export default Accordion;
