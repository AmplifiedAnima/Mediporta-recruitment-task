import { Alert, Snackbar, Typography } from "@mui/material";

interface notificationDisplayProps {
  open: boolean;
  handleClose: () => void;
  notification: string;
}

export const NotificationHandlerDisplayComponent: React.FC<
  notificationDisplayProps
> = ({ open, handleClose, notification }) => {
  return (
    <>
      <Snackbar
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ zIndex: 99999,marginTop:'45px' }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{
            width: "400px",
            height: "60px",
            maxWidth: "auto",
            textAlign: "center",
            backgroundColor: "	#bcd9ea",
            ".MuiSvgIcon-root": {
              color: "	#026aa7",
            },
            "@media (max-width: 768px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#7d4b99",
              "@media (max-width: 768px)": {
                fontSize: "14px",
              },
            }}
          >
            {notification}
          </Typography>
        </Alert>
      </Snackbar>
    </>
  );
};
