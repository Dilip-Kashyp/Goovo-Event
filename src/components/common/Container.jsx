import { Container as MUIContainer } from "@mui/material";

function Container({ containerProps, children }) {
  return <MUIContainer {...containerProps}>{children}</MUIContainer>;
}

export default Container;
