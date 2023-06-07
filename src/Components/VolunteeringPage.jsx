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
    const dataById = helpsData.find(help => help.ID == id);
    const IndexById = helpsData.findIndex(help => help.ID == id);

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

            dataById.arrOfVolunteers.push(register);
            helpsData[IndexById] = dataById;
            localStorage.setItem("helps", JSON.stringify(helpsData));

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
                </div>
                <div className="blue-line"></div>
            </div>
            <br />
            <br />
            <div className='title-form'>To register fill the form</div>
            <form ref={form} onSubmit={sendEmail} className='form-register'>
                <TextField label="Enter Full Name" name='FullName' onChange={(e) => setAddName(e.target.value)} ></TextField>
                <TextField label="Enter E-mail" name='user_email' onChange={(e) => setAddEmail(e.target.value)} ></TextField>
                <TextField type='tel' label="Enter Phone Number" name='phone' onChange={(e) => setAddPhone(e.target.value)} ></TextField>
                <input style={{ display: 'none' }} type="text" name='title' value={dataById.title} />
                <input className='save-button' type="submit" value="Send" />
            </form>





        </div>
    </div>
)
}

export default VolunteeringPage;
