import React from "react";
import Button from "@mui/material/Button";
import store from "../../store/store";
import { gameDifficulty } from "../../store/user/userAction";

const GameMenu = () => {
  const callouts = [
    {
      name: "Easy",
      description: "Play with city with only one code letter",
    },
    {
      name: "Medium",
      description: "Play with city with only two code letters",
    },
    {
      name: "Hard",
      description: "Play with city only three code letters",
    },
    {
      name: "Insane",
      description: "Play with city with all codes",
    },
  ];

  const handleOnClick = (value) => {
    store.dispatch(gameDifficulty(value));
  };

  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <p>{callout.name}</p>
                    <p>{callout.description}</p>
                    <Button variant="contained" onClick={() => handleOnClick(callout.name)}>Play</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameMenu;
