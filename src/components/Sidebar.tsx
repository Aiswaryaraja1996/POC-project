import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: "20%",
        height: "100vh",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        paddingTop: "1.5rem",
      }}
    >
      <TextField
        sx={{ fontSize: "14px" }}
        id="standard-basic"
        label="Email"
        variant="standard"
        helperText="Enter email address to receive the execution summary report."
      />
      <Button variant="outlined" color="error" sx={{ marginTop: "1.5rem" }}>
        Submit
      </Button>
    </Box>
  );
}
