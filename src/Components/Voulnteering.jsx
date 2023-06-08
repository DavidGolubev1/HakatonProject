import './../Style/volunteering-find.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import VolunteeringCard from './VolunteeringCard'
import { useState } from 'react';
import { Button } from '@mui/material';

function Volunteering() {
    const helpsData = JSON.parse(localStorage.getItem('helps'))
    const uniqueAreas = [...new Set(helpsData.map(value => value.area))];
    const uniqueSub = [...new Set(helpsData.map(value => value.subject))];
    const [chosenArea, setChosenArea] = useState('1')
    const [chosenSub, setChosenSub] = useState('1')
    const [copyData, setCopyData] = useState(helpsData)
    const [Data, setData] = useState(helpsData)

    console.log(chosenSub);
    console.log(chosenArea);
    function handleFilter() {
        if (chosenSub != "1" && chosenArea != "1") {
            setData(copyData.filter((element) => element.area == chosenArea && element.subject == chosenSub))

        }
        if (chosenSub != "1" && chosenArea == "1") {
            setData(copyData.filter((element) => element.subject == chosenSub))

        }
        if (chosenSub == "1" && chosenArea != "1") {
            setData(copyData.filter((element) => element.area == chosenArea))

        }
        if (chosenSub == "1" && chosenArea == "1") {
            setData(copyData)

        }
        console.log(copyData);
    }
    console.log(chosenArea);
    return (
        <div className="volunteering">
            <div className="hero-section-filters">
                <div className='selects'>
                    <div>
                        <label className="demo-multiple--label">Find Your Area:</label>
                        <select className='select-style' onChange={(e) => setChosenArea(e.target.value)}>
                            <option value="1">All</option>
                            {
                                uniqueAreas.map((area, index) => {
                                    return (
                                        <option key={index} value={area}>{area}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label className="demo-multiple--label">Chose The Subject:</label>
                        <select className='select-style' onChange={(e) => setChosenSub(e.target.value)}>
                            <option value="1" >All</option>
                            {
                                uniqueSub.map((subject, index) => {
                                    return (
                                        <option key={index} value={subject}>{subject}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <br />
                <br />
                <button className="search-button" onClick={handleFilter}>
                    Filter
                </button>
            </div>
            <br />
            <div className="all-helps">
                {
                    Data?.map((value, index) => {
                        return (
                            <VolunteeringCard key={index} data={value} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Volunteering;
