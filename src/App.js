import React, { useState } from "react";
import "./fonts/DanfoStd.otf";
import "./App.css";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function SelectAutoWidth() {
  const [whatIAm, setWhatIAm] = React.useState("generalist");

  const handleChange = (event) => {
    setWhatIAm(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <Select
        id="what-i-am"
        value={whatIAm}
        label="whatIAm"
        onChange={handleChange}
        autoWidth
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={"generalist"}>generalist</MenuItem>
        <MenuItem value={"writer"}>writer</MenuItem>
        <MenuItem value={"product manager"}>product manager</MenuItem>
        <MenuItem value={"creative technologist"}>
          creative technologist
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-navbar">
        <div>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width-device-width, initial-scale=1" />
          <ul class="container nav-styles">
            <div class="logo">
              <a href="App.js">🫣</a>
            </div>
            <div class="nav-items item-spacing">
              <a href="work.js">WORK.</a>
            </div>
            <div class="nav-items item-spacing">
              <a href="https://logically.webflow.io/">PLAY.</a>
            </div>
            <div class="nav-items item-spacing">
              <a href="me.js">ME.</a>
            </div>
            <div class="nav-items item-spacing">
              <a href="mailto:omotarita@gmail.com?subject=I saw your portfolio and I wanna know you">
                CHAT.
              </a>
            </div>
          </ul>
        </div>
      </header>
      <body className="main-body center">
        <h1 className="big-intro-text text-left">Hi, I'm</h1>
        <div>
          <p className="big-Danfo-text">Omotara</p>
        </div>
        <h1 className="big-intro-text text-right">
          and I'm a
          <SelectAutoWidth />
        </h1>
        <div className="line-break"></div>
        <h3>
          <a href="#selected-work-section">↓ selected work</a>
        </h3>
        <div className="line-break"></div>
        <div id="selected-work-section">TEST</div>
      </body>
    </div>
  );
}

export default App;
