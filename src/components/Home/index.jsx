import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
    return (
        <div className="home">
           <div className="title">
             <h1>
             <p>Hi,</p>
             <p>I am Saša Đurić</p>
             <p>Frontend JavaScript developer</p>
             </h1>
             <Link to="/about">
             <button>More info</button>
             </Link>
           </div>
           <div className="person">
           <img
           src="mo-logo.png"
           alt="person"
           />
           </div>
           </div>
    );  
};

export default Home;