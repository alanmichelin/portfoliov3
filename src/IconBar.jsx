import { Button } from "@mui/material";
import React from "react";
export const Icon = ({ text, icon, handleClick }) => {
  return (
    <Button
      sx={{
        color: "white",
        "&:hover": { backgroundColor: "#D3D3D3", color: "red" },
      }}
      onClick={() => {
        handleClick(text);
      }}
    >
      {icon}
      <p>{text}</p>
    </Button>
  );
};
