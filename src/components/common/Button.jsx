import React from "react";
import { Button as MUIButton } from "@mui/material";

function Button({ buttonProps, onClick }) {
  return <MUIButton {...buttonProps} onClick={onClick} />;
}

export default Button;
