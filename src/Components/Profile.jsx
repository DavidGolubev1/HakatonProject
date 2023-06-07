import "./../Style/Profile.css"

function Profile(){
    let loggedUserProfile=JSON.parse(localStorage.getItem("logged-user"))
    let allActivities=JSON.parse(localStorage.getItem("helps"))
    // let myActivities=allActivities.filter(item=>item.arrOfVolunteers.findIndex(volunteer=>volunteer===loggedUserProfile.userName)!=-1)
    return(
        <div id="profile-page">
            {console.log(allActivities)}
            <div id="profile-information">
                <div id="profile-information-grid-container">
                    <div id="profile-grid-name">Name: {loggedUserProfile.userName}</div>
                    <div id="profile-grid-password">Password: {loggedUserProfile.password}</div>
                    <div id="profile-grid-Email">E-mail: {loggedUserProfile.Email}</div>
                    {/* <div id="profile-grid-future">Future activities: {myActivities.length}</div> */}
                    <div id="profile-grid-phone">Phone: {loggedUserProfile.phone}</div>
                    <div id="profile-grid-intrest">Field of intrest: {loggedUserProfile.fieldOfIntrest}</div>
                    <div id="profile-grid-img"><img id="logged-avatar-picture" src={loggedUserProfile.avatarImage} alt="" /></div>
                    <div id="profile-grid-BTN"><button>Edit info</button></div>
                </div>
            </div>
            <div id="profile-future-activities">

            </div>
            <div id="profile-my-activities">
            
            </div>

        </div>
    );
};
export default Profile;