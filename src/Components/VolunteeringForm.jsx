import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { TextField, MenuItem, Radio, Select, InputLabel, FormLabel, FormControl, RadioGroup, FormControlLabel } from '@mui/material'
import "./../style/VolunteerForm.css"

function VolunteeringForm() {
  const [arrOfDetails, setArrOfDetails] = useState([])
  const helpsData = JSON.parse(localStorage.getItem('helps'))
  const loged = JSON.parse(localStorage.getItem('logged-user'))

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    const obj = {
      subject: data.subject,
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      area: data.area,
      city: data.city,
      time: data.time,
      required: [
        data.group,
        data.age,
        data.duration
      ],
      image: data.image,
      ID: helpsData.length + 1,
      managerUser: loged.userName,
      arrOfVolunteers: [],
      view: 1
    }
    console.log(obj);
    helpsData.push(obj)
    localStorage.setItem("helps", JSON.stringify(helpsData));
  };

  return (
    <div id="New-volunteering">
      <form id='new-grid-form' onSubmit={handleSubmit(onSubmit)}>
        <div id='grid-header'>
          <h1>Adding an event</h1>
          <p> note: in order to add an event, you have to be signed in and all your information should be up to date.</p>
          <p>Once you submit the event, it will join the waiting the list for admin confirmation</p>
        </div>

        <div id='grid-left-form'>
          <FormControl id='form-choose-age'>
            <InputLabel id="demo-simple-select-label">Subject</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Subject"
              {...register("subject")}
            >
              <MenuItem value={"Agriculture"}>Agriculture</MenuItem>
              <MenuItem value={"Environmental Quality"}>Environmental Quality</MenuItem>
              <MenuItem value={"Animals"}>Animals</MenuItem>
              <MenuItem value={"Archaeology"}>Archaeology</MenuItem>
            </Select>
          </FormControl>
          <TextField required id="outlined-basic" label="Title" variant="outlined" {...register("title")} />
          <TextField required id="outlined-basic" label="Sub-title" variant="outlined" {...register("subtitle")} />
          <FormControl id='form-choose-age'>
            <InputLabel id="demo-simple-select-label">Area</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Area"
              {...register("area")}
            >
              <MenuItem value={"Upper Galilee"}>Upper Galilee</MenuItem>
              <MenuItem value={"Golan Heights"}>Golan Heights</MenuItem>
              <MenuItem value={"Jezreel Valley"}>Jezreel Valley</MenuItem>
              <MenuItem value={"Carmel Mountains"}>Carmel Mountains</MenuItem>
              <MenuItem value={"Center"}>Center</MenuItem>
              <MenuItem value={"South"}>South</MenuItem>
              <MenuItem value={"Haifa"}>Haifa</MenuItem>
              <MenuItem value={"North"}>North</MenuItem>
            </Select>
          </FormControl>
          <TextField required id="outlined-basic" label="city" variant="outlined" {...register("city")} />
        </div>
        <div id='grid-right-form'>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Time of the day</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"

            >
              <FormControlLabel value="morning" control={<Radio />} label="morning" {...register("time")} />
              <FormControlLabel value="evning" control={<Radio />} label="evning" {...register("time")} />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Participants</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"

            >
              <FormControlLabel value="For Individual" control={<Radio />} label="Individual" {...register("group")} />
              <FormControlLabel value="For Group" control={<Radio />} label="Group" {...register("group")} />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Participants</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"

            >
              <FormControlLabel value="Long Time" control={<Radio />} label="Long Time" {...register("duration")} />
              <FormControlLabel value="Short Time" control={<Radio />} label="Short Time" {...register("duration")} />
            </RadioGroup>
          </FormControl>
          <FormControl id='form-choose-age'>
            <InputLabel id="demo-simple-select-label">age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              {...register("age")}
            >
              <MenuItem value={"All"}>all</MenuItem>
              <MenuItem value={"16+"}>16+</MenuItem>
              <MenuItem value={"25+"}>25+</MenuItem>
            </Select>
          </FormControl>
          <TextField {...register("image")} required id="outlined-basic" label="imge-url" variant="outlined" />
        </div>
        <div id='grid-description'>
          <TextField {...register("description")} fullWidth multiline rows={7} required id="outlined-basic" label="description" variant="outlined" />
        </div>
        <div id='grid-BTN'>
          <button type='submit' onClick={handleSubmit}>Submit</button>
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default VolunteeringForm