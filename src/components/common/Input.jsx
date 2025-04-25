import React from "react";
import { TextField, FormControl, InputLabel } from "@mui/material";

function Input({
  inputProps,
  inputLabelProps,
  formControlProps,
  onChange,
  onBlur,
  error,
  helperText,
  value,
}) {
  return (
    <FormControl {...formControlProps} error={error}>
      <InputLabel
        {...inputLabelProps}
      />
      <TextField
        {...inputProps}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        value={value}
        helperText={helperText}
        autoComplete={inputProps?.type === "password" ? "new-password" : "off"}
      />
    </FormControl>
  );
}

export default Input;
