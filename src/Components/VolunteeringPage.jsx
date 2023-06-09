import { TextField } from '@mui/material';
import './../Style/volunteering-page.css'
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
function VolunteeringPage() {
    const { id } = useParams();
    const [addEmaiil, setAddEmail] = useState()
    const [addPhone, setAddPhone] = useState()
    const [addName, setAddName] = useState()
    const helpsData = JSON.parse(localStorage.getItem('helps'))
    const loged = JSON.parse(localStorage.getItem('logged-user'))
    const dataById = helpsData.find(help => help.ID == id);
    const IndexById = helpsData.findIndex(help => help.ID == id);
    const emailArr = dataById.arrOfVolunteers.map((value) => value.email);
    console.log(emailArr);
    const strEmail = emailArr.join(',')
    console.log(strEmail);

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_vi3wwbg', 'template_3if17xx', form.current, 'JOKmoWcByn6zBklXt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            const register = {
                fullName: addName,
                email: addEmaiil,
                phoneNumber: addPhone
            }
            if(addName == loged.userName)
            {
                loged.futureActivities.push(dataById)
                localStorage.setItem("logged-user", JSON.stringify(loged));
            }
            dataById.arrOfVolunteers.push(register);
            helpsData[IndexById] = dataById;
            localStorage.setItem("helps", JSON.stringify(helpsData));
            window.location.reload()

    }

   





console.log(dataById);
return (
    <div>
        <div className="volunteering-page-container">
            <div className="all-info-title">

                <div className="title-help">
                    {dataById.title}
                </div>
                <div className="subtitle-help">
                    {dataById.subtitle}
                </div>
                <div className="description-help">
                    {dataById.description}

                </div>

            </div>
            <br />
            <div className='image-helps-div'>
                <img className="image-helps" src={dataById.image} alt="" />
            </div>
            <br />
            <div className='required-lines'>
                <div className="blue-line"></div>
                <div className="required-data">
                    <span><img width="48" height="48" src="https://img.icons8.com/fluency/48/user-group-man-woman.png" alt="user-group-man-woman" /></span>
                    <span>{dataById.required[0]}</span>
                    <span><img width="48" height="48" src="https://img.icons8.com/color/48/age.png" alt="age" /></span>
                    <span>{dataById.required[1]}</span>
                    <span><img width="48" height="48" src="https://img.icons8.com/fluency/48/telescope.png" alt="telescope" /></span>
                    <span>{dataById.required[2]}</span>
                    <span><img width="48" height="48" src="https://img.icons8.com/office/16/binoculars.png" alt="binoculars"/></span>
                    <span>{dataById.view}</span>
                </div>
                <div className="blue-line"></div>
            </div>
            <br />
            <br />
            <div className='title-form'>To register fill the form</div>
            <form ref={form} onSubmit={sendEmail} className='form-register'>
                <TextField label="Enter User Name" name='FullName' onChange={(e) => setAddName(e.target.value)} ></TextField>
                <TextField label="Enter E-mail" name='user_email' onChange={(e) => setAddEmail(e.target.value)} ></TextField>
                <TextField type='tel' label="Enter Phone Number" name='phone' onChange={(e) => setAddPhone(e.target.value)} ></TextField>
                <input style={{ display: 'none' }} type="text" name='title' value={dataById.title} />
                <input className='save-button' type="submit" value="Send" />
            </form>
            <br />
            <br />
            { (dataById.managerUser == loged.userName)&& <div>list of volunteers</div>}
           { (dataById.managerUser == loged.userName && dataById.arrOfVolunteers.length>0) &&  <a href={`mailto:${strEmail}`}>Send email to all</a>}
            {
               (dataById.managerUser == loged.userName)&& dataById.arrOfVolunteers.map((user,index) =>{
                return(
                    
                    <div className='user-card-box'>
                        <div className="full-name-user">name: {user.fullName}</div>
                        <div className='email-user'>email: {user.email}</div>
                        <div className="phone-user">phone:{user.phoneNumber}</div>
                    </div>
                )
               })
            }





        </div>
    </div>
)
}

export default VolunteeringPage;
