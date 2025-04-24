import { Stack as MUIStack } from "@mui/material";

function Stack({ stackProps, children }) {
  return <MUIStack {...stackProps}>{children}</MUIStack>;
}

export default Stack;
