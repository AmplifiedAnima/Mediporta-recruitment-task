import React from "react";
import { Snackbar, Alert, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface SimpleErrorHandlerProps {
  open: boolean;
  error: string;
  handleCloseError: () => void;
}
export const SimpleErrorInlineHandler: React.FC<SimpleErrorHandlerProps> = ({
  open,
  error,
  handleCloseError,
}) => {
  return (
    <Snackbar
      open={open}
      onClose={handleCloseError}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      sx={{ zIndex: 99999, marginTop: "80px" }}
    >
      <Alert
        severity="error"
        sx={{
          width: "400px",
          maxWidth: "auto",
          textAlign: "center",
          backgroundColor: "white",
        }}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseError}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Typography variant="body1" sx={{ color: "red" }}>
          {error}
        </Typography>
      </Alert>
    </Snackbar>
  );
};
