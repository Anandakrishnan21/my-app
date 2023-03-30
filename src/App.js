import React from "react";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Rightbar from "./components/rightbar";
import { Box, createTheme, Stack } from "@mui/material";
import Navbar from "./components/navbar";
import { ThemeProvider } from "@mui/system";
import { useState } from "react";
import Add  from "./components/add";

function App() {
    const [mode, setMode] = useState("light");
    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    })
    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Sidebar mode={mode} setMode={setMode}/>
                    <Feed />
                    <Rightbar />
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
    )
}

export default App;