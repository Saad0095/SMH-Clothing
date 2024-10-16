import React from "react";
import { RingLoader  } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <RingLoader />
    </div>
  );
};

export default Loading;
