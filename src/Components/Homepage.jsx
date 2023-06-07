import "./../Style/Homepage.css"
import VolunteeringCard from "./VolunteeringCard";
function Homepage(){
    const helpsData = JSON.parse(localStorage.getItem('helps'))
    console.log(helpsData);
    return(
        <div id="home-page">
            <div>
                 <div className="hero-section-home-page">
                    

                 </div>

                 <div className="hot-helps">
                    {
                        helpsData?.map((value,index) =>{
                            if(index<6)
                            {
                            return(
                                <VolunteeringCard key={index} data={value} />
                            )
                            }
                        })
                    }
                    
                 </div>
            </div>
        </div>
    );
};
export default Homepage