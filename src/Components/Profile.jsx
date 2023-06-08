import "./../Style/Profile.css"
import { useEffect, useState } from "react";
import VolunteeringCard from './VolunteeringCard'
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function Profile() {
    let loggedUserProfile = JSON.parse(localStorage.getItem("logged-user"))
    let allActivities = JSON.parse(localStorage.getItem("helps"))
    const myVolunteers = loggedUserProfile.futureActivities;
    // let myActivities=allActivities.filter(item=>item.arrOfVolunteers.findIndex(volunteer=>volunteer===loggedUserProfile.userName)!=-1)
    const [wantedPicture, setWantedPicture] = useState(loggedUserProfile.avatarImage)
    const [newName, setNewName] = useState(loggedUserProfile.userName)
    const [newPassword, setNewPassword] = useState(loggedUserProfile.password)
    const [newPhone, setNewPhone] = useState(loggedUserProfile.phone)
    const [newEmail, setNewEmail] = useState(loggedUserProfile.Email)
    const [newIntrest, setNewIntrest] = useState(loggedUserProfile.fieldOfIntrest)
    const [wantToEdit, setWantToEdit] = useState(false)
    // const currentUsers=JSON.parse(localStorage.getItem("users"))
    const [myOwnAvtivities, setMyOwnAvtivities] = useState(allActivities)

    function uptateInfo() {
        console.log("hello");
        const editedProfile = {
            "userName": newName,
            "password": newPassword,
            "Email": newEmail,
            "phone": newPhone,
            "fieldOfIntrest": newIntrest,
            "avatarImage": wantedPicture,
            "futureActivities": [loggedUserProfile.futureActivities]
        }
        console.log(editedProfile);
        localStorage.setItem("logged-user", JSON.stringify(editedProfile));
        window.location.reload()
    }

    useEffect(() => {
        setMyOwnAvtivities(allActivities.filter(item => item.managerUser === loggedUserProfile.userName))
    }, [])

    return (
        <div id="profile-page">
            <button onClick={() => console.log(myOwnAvtivities)}>click me</button>
            <div id="profile-information">
                <div id="profile-information-grid-container">
                    <div className="profile-grid-name">Name: {loggedUserProfile.userName}</div>
                    <div className="profile-grid-password">Password: {loggedUserProfile.password}</div>
                    <div className="profile-grid-Email">E-mail: {loggedUserProfile.Email}</div>
                    {/* <div className="profile-grid-future">Future activities: {myActivities.length}</div> */}
                    <div className="profile-grid-phone">Phone: {loggedUserProfile.phone}</div>
                    <div className="profile-grid-intrest">Field of intrest: {loggedUserProfile.fieldOfIntrest}</div>
                    <div className="profile-grid-img"><img className="logged-avatar-picture" src={loggedUserProfile.avatarImage} alt="" /></div>
                    <div className="profile-grid-BTN"><button onClick={() => setWantToEdit(!wantToEdit)}>Edit info</button></div>
                </div>
            </div>
            {wantToEdit === true ?
                <div id="profile-information-edit">
                    <div className="profile-grid-name">
                        <TextField required id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setNewName(e.target.value)} />
                    </div>
                    <div className="profile-grid-password">
                        <TextField required id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setNewPassword(e.target.value)} />
                    </div>
                    <div className="profile-grid-Email">
                        <TextField required id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setNewEmail(e.target.value)} />
                    </div>
                    <div className="profile-grid-phone">
                        <TextField required id="outlined-basic" label="Phone" variant="outlined" onChange={(e) => setNewPhone(e.target.value)} />
                    </div>
                    <div className="profile-grid-intrest">
                        <FormControl id='form-choose-intrest'>
                            <InputLabel id="demo-simple-select-label">Intrest</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Subject"
                                onChange={(e) => setNewIntrest(e.target.value)}
                            >
                                <MenuItem value={"Agriculture"}>Agriculture</MenuItem>
                                <MenuItem value={"Environmental Quality"}>Environmental Quality</MenuItem>
                                <MenuItem value={"Animals"}>Animals</MenuItem>
                                <MenuItem value={"Archaeology"}>Archaeology</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="profile-grid-img"><img className="logged-avatar-picture" src={wantedPicture} alt="" />
                        <div id="other-avatars">
                            <button onClick={() => setWantedPicture("https://img.icons8.com/color/48/circled-user-female-skin-type-6--v1.png")}><div id="first-avatar"><img className="new-avatar-photo" src="https://img.icons8.com/color/48/circled-user-female-skin-type-6--v1.png" alt="circled-user-female-skin-type-6--v1" /></div></button>
                            <button onClick={() => setWantedPicture("https://img.icons8.com/color/48/circled-user-female-skin-type-1-2--v1.png")}><div id="secod-avatar"><img className="new-avatar-photo" src="https://img.icons8.com/color/48/circled-user-female-skin-type-1-2--v1.png" alt="circled-user-female-skin-type-1-2--v1" /></div></button>
                            <button onClick={() => setWantedPicture("https://img.icons8.com/pastel-glyph/48/user-male-circle.png")}><div id="third-avatar"><img className="new-avatar-photo" src="https://img.icons8.com/pastel-glyph/48/user-male-circle.png" alt="user-male-circle" /></div></button>
                            <button onClick={() => setWantedPicture("https://img.icons8.com/color/48/circled-user-male-skin-type-3--v1.png")}><div id="fourth-avatar"><img className="new-avatar-photo" src="https://img.icons8.com/color/48/circled-user-male-skin-type-3--v1.png" alt="circled-user-male-skin-type-3--v1" /></div></button>
                            <button onClick={() => setWantedPicture("https://img.icons8.com/color/48/circled-user-male-skin-type-6--v1.png")}><div id="fifth-avatar"><img className="new-avatar-photo" src="https://img.icons8.com/color/48/circled-user-male-skin-type-6--v1.png" alt="circled-user-male-skin-type-6--v1" /></div></button>
                        </div>
                    </div>
                    <div className="profile-grid-BTN"><button onClick={uptateInfo}>Save changes</button></div>
                </div>
                :
                null
            }
            <h1 className="profile-header">My future activities-</h1>
            <div id="profile-future-activities">
                {/* {myVolunteers?.length > 0 &&
                    myVolunteers.map((data, index) => {
                        return (
                            <VolunteeringCard key={index} data={data} />
                        )
                    })
                } */}

            </div>
            <h1 className="profile-header">Self made activities-</h1>
            <div id="profile-my-activities">
                {
                    myOwnAvtivities?.map((value, index) => {
                        return (
                            <VolunteeringCard key={index} data={value} />
                        )
                    })
                }
            </div>

        </div>
    );
};
export default Profile;