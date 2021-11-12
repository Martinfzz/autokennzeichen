import React from "react";

const GameTurn = ({ data }) => {
  console.log("i'm in");
  return (
    <div className="py-12 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            {data[0].code}
            {": "}
            {data[0].city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameTurn;
