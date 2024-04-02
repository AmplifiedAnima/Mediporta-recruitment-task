import React from "react";
import {
  Snackbar,
  Alert,
  AlertTitle,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
export const CustomBackdrop = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backdropFilter: "blur(0.8px)",
  zIndex: 999,
});

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
      sx={{ zIndex: 99999,marginTop:'80px' }}
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
