import "./../style/About.css"

function About() {
    return (
        <div id={`about-page`}>
            <h1>About Us</h1>
            <div id="GeneralExplanation">
                Our volunteering site is dedicated to providing individuals with a range of meaningful and fulfilling volunteering experiences. We offer opportunities in four different areas: volunteering with animals, agriculture, archaeology, and the environment. Each of these topics presents unique opportunities for volunteers to make a positive impact and contribute to important causes. Let's explore each of these areas in more detail:
            </div><br />
            <div id="Animals">
                Volunteering with Animals: Support animal welfare and conservation efforts through activities like animal care, habitat restoration, and research projects.
            </div> <br />
            <div id="Agriculture">
                Volunteering in Agriculture: Contribute to sustainable farming, food security, and community development by engaging in tasks like organic farming, permaculture, and promoting eco-friendly practices.
            </div><br />
            <div id="Archaeology">
                Volunteering in Archaeology: Join archaeologists to excavate, document, and preserve historical sites, while participating in artifact analysis, site mapping, and educational outreach programs.
            </div><br />
            <div id="Environment">
                Volunteering for the Environment: Make a positive impact on the environment through activities like tree planting, habitat restoration, cleanups, biodiversity monitoring, and environmental education programs.
            </div>
        </div>

    );
};
export default About;