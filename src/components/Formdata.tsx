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

interface Props {
  option: String | null;
}

const Formdata: React.FC<Props> = ({ option }) => {
  const [env, setEnv] = React.useState<string>("");
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    setEnv("");
    setValue("");
  }, [option]);

  const handleLobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const handleEnvChange = (event: SelectChangeEvent) => {
    setEnv(event.target.value as string);
  };

  return option ? (
    <Box sx={{ width: "40%", margin: "3rem auto" }}>
      <Paper variant="outlined" sx={{ padding: "2rem" }}>
        <Typography
          sx={{ fontSize: "14px", paddingBottom: "1.5rem", color: "#e01719" }}
        >
          {option}
        </Typography>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Select Chat LOB
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handleLobChange}
            value={value}
          >
            <FormControlLabel
              value="piChat"
              control={<Radio />}
              label="PI Chat"
            />
            <FormControlLabel
              value="claimChat"
              control={<Radio />}
              label="Claim Chat"
            />
            <FormControlLabel
              value="cloudChat"
              control={<Radio />}
              label="Cloud Chat"
            />
            <FormControlLabel
              value="tscChat"
              control={<Radio />}
              label="TSC Chat"
            />
          </RadioGroup>
        </FormControl>
        <Box sx={{ width: "30%", marginTop: "1rem" }}>
          <FormControl fullWidth variant="standard">
            <InputLabel id="demo-simple-select-standard-label">
              Select Env
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={env}
              label="Select Env"
              onChange={handleEnvChange}
            >
              <MenuItem value={"uat"}>UAT</MenuItem>
              <MenuItem value={"mua"}>MUA</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          sx={{ marginTop: "2rem", backgroundColor: "#e01719" }}
        >
          Display Test Cases
        </Button>
      </Paper>
    </Box>
  ) : (
    <></>
  );
};

export default Formdata;
