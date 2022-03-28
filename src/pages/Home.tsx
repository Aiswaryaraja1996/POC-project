import Navbar from "../components/Navbar";
import Formdata from "../components/Formdata";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useState, useCallback } from "react";

function Home() {
  const [option, setOption] = useState<String | null>("");

  const handleOptionChange = useCallback(
    (val) => {
      setOption(val);
    },
    [option]
  );

  return (
    <>
      <Navbar onChange={(val) => handleOptionChange(val)} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Formdata option={option} />
      </Box>
    </>
  );
}

export default Home;
