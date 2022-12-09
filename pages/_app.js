import { Stack, Grid } from "@mui/material";
import { useState } from "react";
import NavBar from "../components/navbar/nav-bar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [NavBarWidth, setNavBarWidth] = useState("300px");
  return (
    <Stack direction={"row"} width={"100%"}>
      <Stack minWidth={NavBarWidth} sx={{ position: "relative", transition: "ease-in-out 0.3s" }}>
        <NavBar size={NavBarWidth} setSize={setNavBarWidth} />
      </Stack>
      <Stack width={"100%"}>
        <Component {...pageProps} />
      </Stack>
    </Stack>
  );
}

export default MyApp;
