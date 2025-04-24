import { Backdrop, CircularProgress } from "@mui/material";

function Loader({ loaderProps }) {
  return (
    <Backdrop {...loaderProps}>
      <CircularProgress />
    </Backdrop>
  );
}

export default Loader;
