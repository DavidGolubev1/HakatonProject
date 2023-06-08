import "./../Style/Homepage.css"
import VolunteeringCard from "./VolunteeringCard";
function Homepage() {
    const helpsData = JSON.parse(localStorage.getItem('helps'))
    const sameHelpsData = helpsData
    console.log(helpsData);
    const sortedData = sameHelpsData.sort((a, b) => b.view - a.view);
    console.log(sortedData);
    const topThreeVolunteerings = sortedData.slice(0, 3);
    return (
        <div className="home-page" id={`${localStorage.getItem('mode')}`}>
            <div>
                <div className="hero-section-home-page">
                    <div className="hero-text">
                        <h1 className="title-hero">HelpHub: Empowering Volunteers, Transforming Communities</h1>
                        <h2>Connect, Contribute, and Make a Difference Together</h2>
                    </div>
                </div>
                <br />
                <br />
                <div className="title-map">
                    <img width="48" height="48" src="https://img.icons8.com/color/48/fire-element--v1.png" alt="fire-element--v1" />
                    <div> Most Viewed</div>
                </div>
                <hr />
                <br />
                <div className="hot-helps">
                    {topThreeVolunteerings.map((value, index) => (
                        <VolunteeringCard key={index} data={value} />
                    ))}
                </div>
                <br />

                <div className="title-map">
                <img width="48" height="48" src="https://img.icons8.com/color/48/look-for.png" alt="look-for"/>
                    <div>Best For You</div>
                </div>
                <hr />
                <br />
                <div className="hot-helps">
                    {
                        helpsData?.map((value, index) => {
                            console.log('hii');
                            console.log(helpsData);
                            if (index > 3 && index < 7) {
                                return (
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