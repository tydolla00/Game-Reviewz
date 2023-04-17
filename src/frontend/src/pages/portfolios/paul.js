import "../../styles/Paul.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import Paul from "../../assets/paulspad_nobg.png";
import { Linkedin, Github, Envelope } from "react-bootstrap-icons";


export default function PaulPage() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    nav.style.display = "none";

    return () => {
      nav.style.display = "";
    };
  }, []);

    return(
        <div className = "paulContainer">
            <div className="paulHome">
                <div className="paulNav">
                    <ul>
                        <li>
                            <NavLink to="/portfolio/paul" className={"paulLogo"}><span>Paul</span>Spad</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio/paul">Home</NavLink>
                        </li>
                        <li>
                            <a href="#paulAbout">About</a>
                        </li>
                        <li>
                            <a href="#paulExperience">Experience</a>
                        </li>
                        <li>
                            <a href="#paulResume">Resume</a>
                        </li>
                        <li>
                            <a href="#paulContact">Contact</a>
                        </li>
                        <li>
                            <NavLink to="/" className={"mainLogo"}>Game<span>Reviewz</span></NavLink>
                        </li>
                    </ul>
                </div>
                
                <div className="paulHeader">
                    <div className="paulHeaderLeft">
                        <p>Hi, my name is</p>
                        <h1>Paul Spadaccini</h1>
                        <p>Freelance Software Engineer in Dobbs Ferry, NY</p>
                        <a href="https://www.linkedin.com/in/paul-spadaccini/" className="paulLogos">
                            <Linkedin  color="#0A66C2"/>
                        </a>
                        <a href="https://github.com/spadpaul" className="paulLogos">
                            <Github color="black"/>
                        </a>
                        <a href="mailto:spadpaul@gmail.com" className="paulLogos">
                            <Envelope  color="red"/>
                        </a>
                    </div>
                    <div className="paulHeaderPhoto">
                        <img src={Paul} alt="Paul Spadaccini"></img>
                    </div>
                </div>
            </div>

            <a id="paulAbout"></a>
            <div className="paulAbout">
                <h3>About</h3>
                <p>
                    Hello!  My name is Paul, and I am a software engineer.  From a young age, I have always enjoyed math because I enjoy solving challenging tasks.  When I graduated from high school, I knew I wanted to pursue a degree in computer science because of the problem-solving aspect.  My favorite part about coding is the excitement of constantly learning new things and the satisfaction of completing a part of a program.
                    <br/><br/>
                    I recently graduated from Pace University with a Bachelor of Science in Computer Science with a concentration in Software Engineering and a minor in Mathematics.  I graduated Magna Cum Laude with a GPA of 3.83.  During my academic career, I completed several internships and projects that developed my software programming skills using Java, HTML, CSS, & JavaScript, such as creating an Android Studio application in a team of four.  I am seeking full-time software developer/engineer opportunities to apply and further develop these skills.  Please 
                    <a href="paulContact"> contact me </a>
                    for any roles.
                </p>
            </div>

            <a id="paulExperience"></a>
            <div className="paulExperience">
                
            </div>
        </div>
    );
}
