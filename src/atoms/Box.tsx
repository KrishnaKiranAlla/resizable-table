import React, { useState } from "react";

interface IProps {
  children?: React.ReactNode;
  onChangeX?: any;
}

const Box: React.FC<IProps> = (props: IProps) => {
  const [widthX, setWidthX] = useState<Number>();
  const [down, setDown] = useState<boolean>(true);

  function handleWidthX(x: Number, y: Number) {
    if (down && x !== 0) {
      setWidthX(x);
      props.onChangeX(x);
    }
  }

  return (
    <div
      //   onMouseMoveCapture={(e) => handleWidthX(e.screenX, e.screenY)}
      //   onMouseUpCapture={(e) => setDown(false)}
      //   onMouseDownCapture={(e) => setDown(true)}
      //   onDragStart={(e) => setDown(true)}
      draggable={true}
      onDragCapture={(e) => handleWidthX(e.screenX, e.screenY)}
      //  onDragEnd={(e) => setDown(false)}
      //   onDragOver={() => console.log("over")}
      style={{
        // paddingLeft: `${widthX}px`,
        backgroundColor: "red",
        height: "20px",
        minWidth: "10px",
        cursor: "pointer",
      }}
    >
      {props.children}
    </div>
  );
};

Box.defaultProps = {
  children: "",
};

export default Box;
