import { Link } from "react-router-dom";
import "./../style/Notfound.css"

function Notfound() {
    return (
            <div id="page-not-found" >
                <img id="photo" src="https://emojigraph.org/media/apple/frowning-face_2639-fe0f.png" alt="sad smily"/>
                    <div id="Word">
                        Sorry, we didn't find the site you were looking for, please try another option
                    </div>
                    <div >
                        <Link to={"/"}><button id="button">home page</button></Link>
                    </div>
            </div>
    );
};
export default Notfound;