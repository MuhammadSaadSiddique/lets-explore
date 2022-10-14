import {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import PageContainer from "../components/pages-parts/PageContainer";
import ContactForm from "../components/pages-parts/ContactForm";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MUIDatePicker from "../components/DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers";

//read value from api
const selPlace = [
  {
    value: null,
    label: "- Choose a country -",
  },
  {
    value: "ESP",
    label: "Spain",
  },
  {
    value: "ENG",
    label: "England",
  },
  {
    value: "JP",
    label: "Japan",
  },
  {
    value: "RUS",
    label: "Russia",
  },
];
const selPerson = [
  {
    value: null,
    label: "- Select count of person -",
  },
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: ">4",
    label: "More than 4",
  },
];

export default function SelectTextFields() {
  const [place, setPlace] = React.useState("");
  const [person, setPerson] = React.useState("");

  const handleChange = (event) => {
    setPlace(event.target.value);
    setPerson(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        mt: "105px",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-select-place"
        select
        label="Choose Source"
        value={place}
        onChange={handleChange}
        // helperText="Please select your destination"
        sx={{ color: "blue" }}
      >
        {selPlace.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="outlined-select-place"
        select
        label="Choose Destination"
        value={place}
        onChange={handleChange}
        // helperText="Please select your destination"
        sx={{ color: "blue" }}
      ></TextField>

      <MUIDatePicker label="Check in date" />
      <MUIDatePicker label="Check out date" />
      <TextField
        id="outlined-select-place"
        select
        label="Person"
        value={person}
        onChange={handleChange}
        // helperText="Please select your destination"
        sx={{ color: "blue" }}
      >
        {selPerson.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ff5733",
          width: "25ch",
          m: "8px",
        }}
      >
        Search
      </Button>
    </Box>
  );
}
