import { Link } from 'react-router-dom';
import './../Style/volunteering-card.css'

function VolunteeringCard(data) {
    return (
        <div id="volunteer-card">
            <Link className='box-link-card' to={`VoulnterringPage/${data.data.ID}`}>
            <div className="box-info">
                <div className='subject-card'>{data.data.subject}</div>
                <div className="title-card">{data.data.title}</div>
                <div className="image-card">
                    <img className='image-card' src={`${data.data.image}`} alt="" />
                </div>
                <div className="short-info-card">

                    <div className="city-card line-icon">
                        <img width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />
                        <div className='info-icon'> City: {data.data.city}</div>
                    </div>
                    <br />
                    <div className="duration-card line-icon">
                        <img width="20" height="20" src="https://img.icons8.com/material-outlined/24/property-time.png" alt="property-time" />
                        <div className='info-icon'> Range: {data.data.required[2]}</div>
                    </div>
                    <br />
                    <div className="time-card line-icon">
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/clock--v3.png" alt="clock--v3"/>
                        <div className='info-icon'> Time: {data.data.time}</div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};
export default VolunteeringCard;