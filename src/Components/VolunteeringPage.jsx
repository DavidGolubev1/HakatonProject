import { TextField } from '@mui/material';
import './../Style/volunteering-page.css'
import { useParams } from 'react-router-dom';
function VolunteeringPage() {
    const { id } = useParams();
    const helpsData = JSON.parse(localStorage.getItem('helps'))
    const dataById = helpsData.find(help => help.ID == id);
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
                      <span><img width="48" height="48" src="https://img.icons8.com/fluency/48/user-group-man-woman.png" alt="user-group-man-woman"/></span> 
                      <span>{dataById.required[0]}</span> 
                      <span><img width="48" height="48" src="https://img.icons8.com/color/48/age.png" alt="age"/></span>
                      <span>{dataById.required[1]}</span>
                      <span><img width="48" height="48" src="https://img.icons8.com/fluency/48/telescope.png" alt="telescope"/></span>
                      <span>{dataById.required[2]}</span>
                    </div>
                    <div className="blue-line"></div>
                </div>
                <br />
                <br />
                <div className="form-register">
                    <TextField label="Enter Full Name" ></TextField>
                    <TextField  label="Enter E-mail"></TextField>
                    <TextField type='tel' label="Enter PhoneNumber"></TextField>
                </div>
                




            </div>
        </div>
    )
}

export default VolunteeringPage;
