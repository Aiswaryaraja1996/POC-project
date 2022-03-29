import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

interface Props {
  option: String | null;
}

const Formdata: React.FC<Props> = ({ option }) => {
  const [env, setEnv] = React.useState<string | undefined>(undefined);
  const [value, setValue] = React.useState<string | undefined>(undefined);
  const [envErr, setEnvErr] = React.useState<string | null>("");
  const [valErr, setValErr] = React.useState<string | null>("");
  const [showTestCase, setShowTestCase] = React.useState<boolean>(false);

  React.useEffect(() => {
    setEnv("");
    setValue("");
    setShowTestCase(false);
    setEnvErr("");
    setValErr("");
  }, [option]);

  const handleLobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const handleEnvChange = (event: SelectChangeEvent) => {
    setEnv(event.target.value as string);
  };

  const handleDisplayTestCase = () => {
    if (env && value) {
      setShowTestCase(true);
      setEnvErr("");
      setValErr("");
    } else {
      if (!env) setEnvErr("Please select the environment");
      if (!value) setValErr("Please select the Chat LOB");
    }
  };

  return option ? (
    <Paper
      variant="outlined"
      sx={{
        width: "40%",
        height: "40%",
        margin: "3rem auto",
        padding: "2rem",
      }}
    >
      <Typography
        sx={{ fontSize: "14px", paddingBottom: "1.5rem", color: "#e01719" }}
      >
        {option}
      </Typography>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Select Chat LOB
        </FormLabel>
        <h6 style={{ color: "#e01719", margin: "0 auto" }}>{valErr}</h6>
        <RadioGroup row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleLobChange}
          value={value}
        >
          <FormControlLabel
            value="piChat"
            control={<Radio size="small" />}
            label="PI Chat"
          />
          <FormControlLabel
            value="claimChat"
            control={<Radio size="small" />}
            label="Claim Chat"
          />
          <FormControlLabel
            value="cloudChat"
            control={<Radio size="small" />}
            label="Cloud Chat"
          />
          <FormControlLabel
            value="tscChat"
            control={<Radio size="small" />}
            label="TSC Chat"
          />
        </RadioGroup>
      </FormControl>
      <Box sx={{ width: "30%", marginTop: "1.5rem" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Env</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={env}
            label="Select Env"
            onChange={handleEnvChange}
          >
            <MenuItem value={"ct"}>UAT</MenuItem>
            <MenuItem value={"mo"}>MO</MenuItem>
          </Select>
          <h6 style={{ color: "#e01719", margin: 0 }}>{envErr}</h6>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        sx={{ marginTop: "2rem", backgroundColor: "#e01719" }}
        onClick={handleDisplayTestCase}
      >
        Display Test Cases
      </Button>
      {showTestCase ? (
        <>
          <FormGroup sx={{ marginTop: "2rem" }}>
            <InputLabel>Select Test Cases</InputLabel>
            <FormControlLabel control={<Checkbox />} label="Select All" />
          </FormGroup>
          <Button
            variant="contained"
            sx={{ marginTop: "1.5rem", backgroundColor: "#e01719" }}
          >
            Start Execution
          </Button>
        </>
      ) : (
        <></>
      )}
    </Paper>
  ) : (
    <></>
  );
};

export default Formdata;
