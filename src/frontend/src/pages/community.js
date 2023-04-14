import "../styles/Community.scss";
import { Person } from "react-bootstrap-icons";
import { BalloonFill } from "react-bootstrap-icons";
import { Alarm } from "react-bootstrap-icons";

// Made changes due to li affecting other pages.
let poll = {
  question: "What game are you most looking forward to in 2023?",
  answers: [
    "Zelda Tears of the Kingdom",
    "Jedi Survivor",
    "Spongebob Cosmic Shake",
    "Hogwarts Legacy",
  ],
  pollCount: 20,
  answersWeight: [4, 4, 2, 10], //sum = 20
  selectedAnswer: -1,
};

// let pollDOM = {
//   question: document.querySelector(".poll .question"),
//   answers: document.querySelector(".poll .option"),
// };

// pollDOM.question.innerHTML = poll.question;
// poll.answers.map(function(answer, i){
//   return(
//     `
//       <div className = "option" onClick="markAnswer('${i}')>
//         ${answer}
//         <span className="percentage-bar"></span>
//         <span className="percentage-bar"></span>
//       </div>
//     `
//   );
// }).join("");

const MostListUsers = (props) => {
  return props.db.map((item) => (
    <>
      <div key={item.id} className="mostSection">
        <Person />
        {item.user} {" - "}
        {item.value}
      </div>
    </>
  ));
};

const Birthdays = (props) => {
  return props.db.map((item) => (
    <>
      <div key={item.id} className="mostSection">
        <BalloonFill color="red" />
        {item.user} {" - "}
        {item.birthday}
      </div>
    </>
  ));
};

const Releases = (props) => {
  return props.db.map((item) => (
    <>
      <div key={item.id} className="mostSection">
        <Alarm />
        {item.game} {" - "}
        <i>{item.date}</i>
      </div>
    </>
  ));
};

export default function Community() {
  const db = [
    { user: "spadpaul", value: 27, id: 1 },
    { user: "tybrooks", value: 19, id: 2 },
    { user: "johnb", value: 18, id: 3 },
    { user: "ace", value: 9, id: 4 },
  ];

  const birthdayDB = [
    { user: "tybroooks", birthday: "April 2", id: 1 },
    { user: "iamsith69", birthday: "June 6", id: 2 },
    { user: "johnbboy", birthday: "June 22", id: 3 },
    { user: "spadpaul", birthday: "July 23", id: 4 },
  ];

  const gamesDB = [
    { game: "Hogwarts Legacy", date: "2/10/23", id: 1 },
    { game: "Jedi Survivor", date: "3/17/23", id: 2 },
    { game: "Zelda: Tears of the Kingdom", date: "5/12/23", id: 3 },
    { game: "Suicide Squad: Kill the Justice League", date: "5/26/23", id: 4 },
  ];

  const techDB = [
    { game: "iPhone 15", date: "2/10/23", id: 1 },
    { game: "Google Pixel 11", date: "3/17/23", id: 2 },
    { game: "Macbook Pro 2023", date: "5/12/23", id: 3 },
    { game: "Microsoft Surface 6", date: "5/26/23", id: 4 },
  ];

  return (
    <>
      <div className="communityPage">
        <div className="poll voter">
          <h3 className="question">
            What game are you most looking forward to in 2023?
          </h3>
          <form className="pollOptions">
            <li className="option zelda">
              <input type="radio" name="answer"></input>
              <label id="zelda">Zelda Tears of the Kingdom</label>
            </li>
            <li className="option jedi">
              <input type="radio" name="answer"></input>
              <label id="jedi">Jedi Survivor</label>
            </li>
            <li className="option spongebob">
              <input type="radio" name="answer"></input>
              <label id="spongebob">Spongebob Cosmic Shake</label>
            </li>
            <li className="option hogwarts">
              <input type="radio" name="answer"></input>
              <label id="hogwarts">Hogwarts Legacy</label>
            </li>
          </form>
          <div id="submitButton">
            <input type="submit" value="Submit"></input>
          </div>
        </div>

        <div className="poll results">
          {/* Isn't a valid class ^ */}
          <h3 className="question">What was your favorite game of 2022?</h3>
          <ul className="pollOptions">
            <li className="eldenring">
              <span id="zelda">
                {/* What's the point of the id*/}
                WINNER: <b>38% </b>Elden Ring
              </span>
            </li>
            <li className="option">
              <span id="jedi">
                <b>25% </b>God of War: Ragnorok
              </span>
            </li>
            <li className="option">
              <span id="spongebob">
                <b>20% </b>Lego Star Wars: Skywalker Saga
              </span>
            </li>
            <li className="option">
              <span id="hogwarts">
                <b>17% </b>Call of Duty: Modern Warfare II
              </span>
            </li>
          </ul>
        </div>

        {/* 
          <div id="topMembersTitle">
            Top Game Reviews Members
          </div> */}

        <div className="topMembers">
          <div className="columns">
            <div className="column">
              <b className="mosts">Top Rated Games</b>
              <ul className="userNames">
                <MostListUsers db={db} />
              </ul>
            </div>

            <div className="column">
              <b className="mosts">Most Articles Written</b>
              <ul className="userNames">
                <MostListUsers db={db} />
              </ul>
            </div>

            <div className="column gameReleases">
              <b className="mosts">Upcoming Game Releases</b>
              <ul className="userNames">
                <Releases db={gamesDB} />
              </ul>
            </div>

            <div class="break"></div>

            <div className="column">
              <b className="mosts">Most Comments</b>
              <ul className="userNames">
                <MostListUsers db={db} />
              </ul>
            </div>

            <div className="column birthdays">
              <b className="mosts">Upcoming User Birthdays</b>
              <ul className="userNames">
                <Birthdays db={birthdayDB}></Birthdays>
              </ul>
            </div>

            <div className="column techReleases">
              <b className="mosts">Upcoming Tech Releases</b>
              <ul className="userNames">
                <Releases db={techDB} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
