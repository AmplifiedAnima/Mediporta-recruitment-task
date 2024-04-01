export const textFieldStyling = {
  "& .MuiTextField-root, & .MuiButton-root": {
    height: "40px",
    minHeight: "40px",
    maxHeight: "40px",
    color: "#055a8c",
  },
  "& .MuiInputBase-root": {
    height: "40px",
    alignItems: "center",
    color: "",
  },
  "& .MuiButton-label": {
    lineHeight: "40px",
    color: "white",
  },
  "& .MuiTypography-root": {
    lineHeight: "40px",
    color: "#055a8c",
  },
  "& .MuiInputLabel-root": {
    color: "#055a8c",
    fontWeight: "bold",
  },
  "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root:hover": {
    color: "#89609e",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#5ba4cf",
  },
  "& .MuiButton-contained": {
    backgroundColor: "#055a8c", // This will change the background color
    color: "white", // This is for the text color
    maxWidth: "80px",
    display: "flex",
    justifyContent: "center",

    "&:hover": {
      backgroundColor: "#b368d4", // Darker shade for hover state
    },
  },
  "& .MuiSelect-select": {
    minWidth: "120px", // Ensures dropdown is not too narrow
    padding: "10px 14px", // Adjust padding to ensure content is not clipped
    "@media (max-width: 768px)": {
      minWidth: "50px",
    },
  },
};

export const boxHeaderStyles = {
  background:
    "linear-gradient(to right, #ffffff 20%, #f4f1fd 60%,#5ba4cf 100%)",
  padding: "25px 20px",
  minHeight: "20px",
  display: "flex",
  flexDirection: "row",
  gap: 2.8,
  "@media (max-width: 768px)": {
    flexDirection: "column",
    padding: "10px",
    background:
      "linear-gradient(to bottom,rgba(255, 255, 255, 0.5) 20%, rgba(244, 241, 253, 0.5) 30%, rgba(91, 164, 207, 0.2) 80%)",
    gap: "1px",
    "& .MuiTextField-root, & .MuiButton-root": {
      width: "100%",
      margin: "8px 0",
    },
  },
  ...textFieldStyling,
};

export const inNameStyles = {
  ...textFieldStyling,
  "& .MuiInputLabel-root": {
    lineHeight: "40px",
    top: "-15px",
  },
  "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root:hover": {
    top: "-8px",
  },
};
