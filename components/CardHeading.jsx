import React from "react";

const CardHeading = ({ title, otherClasses }) => {
  return (
    <div
      className={`bg-mid-brown w-[25rem] text-[#fce1cd] text-center py-2 px-4 ${otherClasses}`}
    >
      <h1 className="text-[7rem]">{title}</h1>
    </div>
  );
};

export default CardHeading;
