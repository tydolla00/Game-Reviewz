import "../styles/About.scss";
import HTML_logo from "../assets/HTML5_logo.png";
import CSS_logo from "../assets/CSS3_logo.png";
import Java_logo from "../assets/Java_logo.png";
import React_logo from "../assets/React_logo.png";
import Discord_logo from "../assets/discord_logo.png";

function About() {
  const collaborators = [
    {
      name: "Paul Spadaccini",
      url: "https://www.linkedin.com/in/paul-spadaccini/",
      city: "Dobbs Ferry, NY",
    },
    {
      name: "Tyheir Brooks",
      url: "https://www.linkedin.com/in/tyheir",
      city: "Bronx, NY",
    },
    {
      name: "John Beltran",
      url: "https://www.birdforum.net/",
      city: "White Plains, NY",
    },
  ];

  return (
    <div>
      <br />
      <div id="container">
        <div className="aboutUs">
          <p className="aboutTitle">About Us</p>
            <hr/>
          <p className="aboutText">
            We are a group of aspiring Software Engineers who came together to
            work on a common interest and become better developers.
          </p>
        </div>
      </div>

      <br />
      <br />
      <div
        id="container"
        style={{
          height: "50vh",
          minHeight: "275px",
          maxHeight: "300px",
          margin: "0",
        }}
      >
        <div className="members">
          {collaborators.map((item) => (
            <div className="member">
              <div className="profilePic"></div>
              <p className="modWords">{item.name}</p>
              <a href={item.url}>LinkedIn</a>
              <p className="occupation">Software Engineer</p>
              <p className="occupation">{item.city}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <div id="container">
        <div className="technologies">
          <p className="technologiesTitleFont">Technologies</p>
          <div className="logosFit">
            {/* need to resize logos for responsiveness */}
            <img src={HTML_logo} alt={"HTML Logo"} />
            <img src={React_logo} alt={"React Logo"} />
            <img src={Java_logo} alt={"Java Logo"} />
            <img src={Discord_logo} alt={"Discord Logo"} />
            <img src={CSS_logo} alt={"CSS Logo"} />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
export default About;
