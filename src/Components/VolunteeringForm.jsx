import React from 'react'
import { TextField,MenuItem, Radio,Select, InputLabel, FormLabel, FormControl, RadioGroup, FormControlLabel } from '@mui/material'
import "./../style/VolunteerForm.css"

function VolunteeringForm() {
  return (
    <div id="New-volunteering">
      <div id='new-form'>
        <TextField required id="outlined-basic" label="Subject" variant="outlined" />
        <TextField required id="outlined-basic" label="Title" variant="outlined" />
        <TextField required id="outlined-basic" label="Sub-title" variant="outlined" />
        <TextField rows={10} required id="outlined-basic" label="description" variant="outlined" />
        <TextField required id="outlined-basic" label="area" variant="outlined" />
        <TextField required id="outlined-basic" label="city" variant="outlined" />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Time of the day</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="morning" />
            <FormControlLabel value="male" control={<Radio />} label="noon" />
            <FormControlLabel value="other" control={<Radio />} label="evning" />
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
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField required id="outlined-basic" label="imge-url" variant="outlined" />
      </div>



      <div id="Bigtitle">add activity</div>
      <table>
        <tr>
          <td>subject</td>
          <td><input placeholder="enter your subject" type="text" id="Sub" name="Sub" /></td>
        </tr>
        <tr>
          <td>title</td>
          <td><input placeholder="enter your title" type="text" id="title" name="title" /></td>
        </tr>
        <tr>
          <td>subtitle</td>
          <td><input placeholder="enter your subtitle" type="text" id="subtitle" name="subtitle" /></td>
        </tr>
        <tr>
          <td>description</td>
          <td><input placeholder="enter a short description" type="text" id="description" name="description" /></td>
        </tr>
        <tr>
          <td>area</td>
          <td><input placeholder="enter your area" type="text" id="area" name="area" /></td>
        </tr>
        <tr>
          <td>city</td>
          <td><input placeholder="enter your city" type="text" id="city" name="city" /></td>
        </tr>
        <tr>
          <td>time</td>
          <td>
            <input type="radio" name="time" value="morning" checked />morning
            <input type="radio" name="time" value=" evening" />evening
          </td>
        </tr>
        <tr>
          <td>amount of people</td>
          <td>
            <select name="people" id="people">
              <option value=" for individual" selected> for individual</option>
              <option value="for groups">for groups</option>
              <option value="for groups or individual">for groups or individual</option>
            </select>
          </td>
          <tr>
            <td>min age</td>
            <td>
              <select name="age" id="age">
                <option value=" 14" selected> 14+</option>
                <option value="16">16+</option>
                <option value="18">18+</option>
                <option value="21">21+</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>range of commitment</td>
            <td>
              <input type="radio" name="range" value="no long range" checked />no long range
              <input type="radio" name="range" value=" long range" />long range
            </td>
          </tr>
          <tr>
            <td>image</td>
            <td>
              <input placeholder="Enter img url" type="text" />
            </td>
            <tr>
              <td><input type="submit" id="submit" name="submit" /></td>
            </tr>
          </tr>
        </tr>
      </table>

    </div>
  )
}

        export default VolunteeringForm