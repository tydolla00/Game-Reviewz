<<<<<<< Updated upstream
// import 'antd/dist/antd.min.css';
import { Breadcrumb } from 'antd';
=======
import "../styles/About.css";
import HTML_logo from '../assets/HTML5_logo.png';
import CSS_logo from '../assets/CSS3_logo.png';
import Java_logo from '../assets/Java_logo.png';
import React_logo from '../assets/React_logo.png';
import Discord_logo from '../assets/discord_logo.png';
>>>>>>> Stashed changes

function About() {
    return <div>
        <br/>
        <div id = "container">
            <div className = "aboutUs">
                <view  className = "aboutTitle">
                    <p className = "aboutTitleFont">
                        About Us
                    </p>
                </view>
                <view className = "aboutText">
                    <p className = "aboutTextFont">
                        This page was created to hone our development skills and to practice working in an Agile environment. We have had weekly meeting where we plan what tasks we would like to complete, and assign them to each of us. Over the next week we worked to complete our tasks for our Sprint.
                    </p>
                </view>
            </div>
        </div>

        <br/>
        <br/>
        <div id = "container" style={{height: '50vh', minHeight: '275px', maxHeight: '300px'}}>
            <div className = "members">
                <view className = "member">
                    <view className = "modProfile">
                    </view>
                    <div className= "modInfo">
                        <p className = "modWords">
                            Paul Spadaccini
                            <p className= "linkedIn">
                                <a href={"https://www.birdforum.net/"}>Linkedin</a>
                                <br/>
                                <hr id = "hr"/>
                            </p>
                            <p className = "occupation">
                                Software Engineer
                                <p className = "occupation">White Plains, NY</p>
                            </p>
                        </p>
                    </div>
                </view>
                <view className = "member">
                    <view className = "modProfile">
                    </view>
                    <div className= "modInfo">
                        <p className = "modWords">
                            Tyheir Brooks
                            <p className= "linkedIn">
                                <a href={"https://www.birdforum.net/"}>Linkedin</a>
                                <hr id = "hr"/>
                            </p>
                            <p className = "occupation">
                                Software Engineer
                                <p className = "occupation">White Plains, NY</p>
                            </p>
                        </p>
                    </div>
                </view>
                <view className = "member">
                    <view className = "modProfile">
                    </view>
                    <div className= "modInfo">
                        <p className = "modWords">
                            John Beltran
                            <p className= "linkedIn">
                                <a href={"https://www.birdforum.net/"}>Linkedin</a>
                                <hr id = "hr"/>
                            </p>
                            <p className = "occupation">
                                Birb Lover
                                <p className = "occupation">White Plains, NY</p>
                            </p>
                        </p>
                    </div>
                </view>
            </div>
        </div>
        <br/>
        <br/>
        <div id= "container">
            <div className = "technologies">
                <view className = "technologiesTitleCon">
                    <p className = "technologiesTitleFont">
                        Technologies
                    </p>
                </view>
                <view className = "logosContainer">
                    <view className = "logosFit">
                        <img className = "logo" src={HTML_logo} alt={"HTML Logo"}/>
                        <img className = "logo" src={React_logo} alt={"React Logo"}/>
                        <img className = "logo" src={Java_logo} alt={"Java Logo"}/>
                        <img className = "logo" src={Discord_logo} alt={"Discord Logo"}/>
                        <img className = "logo" src={CSS_logo} alt={"CSS Logo"}/>
                    </view>
                </view>
            </div>

        </div>
        <br/>
    </div>
}
export default About;