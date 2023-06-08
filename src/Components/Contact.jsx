import "./../style/Contact.css"
import { TextField } from "@mui/material";
function Contact (){
    return(
        <div id="contact-page">
        <div id="title-contact">Create a contact with us ✍️</div>
        
        <div id="THE-TABLE">
            <div className="name">
            <div>Full name</div>
            <TextField label = "Enter your full name"></TextField>
            </div>
            <div className="email">
            <div>Email</div>
            <TextField label = "Enter your email"></TextField>
            </div>
        
            <div className="subject">
            <div>Subject</div>
            <TextField label = "Enter your subject"></TextField>
            </div>
        
            <div >
            <div>< button className = "submitbutton" type="submit"> submit</button></div>
            </div>
        </div>
        
    </div>
    );
};
export default Contact;