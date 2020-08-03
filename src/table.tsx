import React, { useState, useEffect, useRef } from "react";
import Box from "./atoms/Box";

interface IProps {
  name?: string;
}

const data = [
  {
    company: "TCS",
    contact: "hero",
    country: "india",
  },
  {
    company: "TCS",
    contact: "hero",
    country: "india",
  },
  {
    company: "TCS",
    contact: "hero",
    country: "india",
  },
  {
    company: "TCS",
    contact: "hero",
    country: "india",
  },
];

var pageWidth: any,
  curCol: any,
  nxtCol: any,
  curColWidth: any,
  nxtColWidth: any;
const Table: React.FC<IProps> = (props: IProps) => {
  const [down, setDown] = useState<boolean>(false);
  const ref = useRef(null);

  async function handleMouseDown(e: any) {
    setDown(true);
    // console.log(e.screenX);
    // if (e.screenX !== 0) {
    curCol = e.target.parentElement;
    nxtCol = curCol.nextElementSibling;
    pageWidth = e.pageX;
    curColWidth = curCol.offsetWidth;
    if (nxtCol) {
      nxtColWidth = nxtCol.offsetWidth;
    }
  }

  async function handleMouseMove(e: any) {
    if (curCol && down) {
      const diffX = e.pageX - pageWidth;
      if (nxtCol) nxtCol.style.width = nxtColWidth - diffX + "px";

      curCol.style.width = curColWidth + diffX + "px";
    }
  }

  function handleMouseUp(e: any) {
    setDown(false);

    console.log("up");
    curCol = undefined;
    nxtCol = undefined;
    pageWidth = undefined;
    nxtColWidth = undefined;
    curColWidth = undefined;
  }

  return (
    <div>
      <table ref={ref} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ position: "relative" }}>
              Company
              <div
                style={{
                  top: 0,
                  right: 0,
                  width: "50px",
                  position: "absolute",
                  cursor: "col-resize",
                  /* remove backGroundColor later */
                  backgroundColor: "red",
                  userSelect: "none",
                  /* table height */
                  height: "35px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
                onMouseDown={(e) => handleMouseDown(e)}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseUpCapture={(e) => handleMouseUp(e)}
              ></div>
            </th>
            <th style={{ position: "relative" }}>
              Contact
              <div
                style={{
                  top: 0,
                  right: 0,
                  width: "50px",
                  position: "absolute",
                  cursor: "col-resize",
                  /* remove backGroundColor later */
                  backgroundColor: "red",
                  userSelect: "none",
                  /* table height */
                  height: "35px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
                onMouseDown={(e) => handleMouseDown(e)}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseUp={(e) => handleMouseUp(e)}
              ></div>
            </th>
            <th style={{ position: "relative" }}>
              Country
              <div
                style={{
                  top: 0,
                  right: 0,
                  width: "50px",
                  position: "absolute",
                  cursor: "col-resize",
                  /* remove backGroundColor later */
                  backgroundColor: "red",
                  userSelect: "none",
                  /* table height */
                  height: "35px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
                // draggable={true}
                // onDragCapture={(e) => handleMouseDown(e)}
                onMouseDown={(e) => handleMouseDown(e)}
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseUp={(e) => handleMouseUp(e)}
              ></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.company}</td>
                <td>{item.contact}</td>
                <td>{item.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button
        onMouseUp={(e) => console.log("mouse up")}
        onMouseDown={(e) => console.log("dowm")}
        onMouseMove={(e) => console.log("move")}
      >
        click
      </button>
    </div>
  );
};
Table.defaultProps = {
  name: "world",
};

export default Table;
