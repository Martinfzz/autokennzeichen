import React from "react";
import Alert from "@mui/material/Alert";

const TurnAlert = ({ founded }) => {
  console.log(founded);
  return (
    <div className="bg-white relative">
      {founded ? <Alert severity="success">You found it!</Alert> : <Alert severity="error">This is wrong, try again</Alert>}
    </div>
  );
};

export default TurnAlert;
