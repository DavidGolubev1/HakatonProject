import React from 'react'
import { TextField, MenuItem, Radio, Select, InputLabel, FormLabel, FormControl, RadioGroup, FormControlLabel } from '@mui/material'
import "./../style/VolunteerForm.css"

function VolunteeringForm() {
  return (
    <div id="New-volunteering">
      <div id='new-grid-form'>
        <div id='grid-header'>
          <h1>Adding an event</h1>
          <p> note: in order to add an event, you have to be signed in and all your information should be up to date.</p>
          <p>Once you submit the event, it will join the waiting the list for admin confirmation</p>
        </div>
        <div id='grid-left-form'>
          <TextField required id="outlined-basic" label="Subject" variant="outlined" />
          <TextField required id="outlined-basic" label="Title" variant="outlined" />
          <TextField required id="outlined-basic" label="Sub-title" variant="outlined" />
          <TextField required id="outlined-basic" label="area" variant="outlined" />
          <TextField required id="outlined-basic" label="city" variant="outlined" />
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
              <FormControlLabel value="morning" control={<Radio />} label="morning" />
              <FormControlLabel value="evning" control={<Radio />} label="evning" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Participants</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="morning" control={<Radio />} label="Individual" />
              <FormControlLabel value="evning" control={<Radio />} label="Gruop" />
            </RadioGroup>
          </FormControl>
          <FormControl id='form-choose-age'>
            <InputLabel id="demo-simple-select-label">age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
            // onChange={handleChange}
            >
              <MenuItem value={10}>all</MenuItem>
              <MenuItem value={20}>16+</MenuItem>
              <MenuItem value={30}>20+</MenuItem>
            </Select>
          </FormControl>
          <TextField required id="outlined-basic" label="imge-url" variant="outlined" />
        </div>
        <div id='grid-description'>
          <TextField fullWidth multiline rows={7} required id="outlined-basic" label="description" variant="outlined" />
        </div>
        <div id='grid-BTN'>
          <button type='submit'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default VolunteeringForm