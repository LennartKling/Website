import React from "react";
import CursorImg from "../images/work/CursorImg";
import MouseMotion from "../../pages/api/MouseMotion";

const Cursor = () => {
  const { mouseX, mouseY }: any = MouseMotion();

  const animCursor = (node: any) => {
    node.animate(
      {
        left: `${mouseX}px`,
        top: `${mouseY}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  };

  return (
    <div
      className="absolute w-[20px] h-[20px] -translate-x-[50%] -translate-y-[50%] z-50 pointer-events-none"
      ref={(node) => {
        if (node) animCursor(node);
      }}
    >
      <CursorImg />
    </div>
  );
};

export default Cursor;
