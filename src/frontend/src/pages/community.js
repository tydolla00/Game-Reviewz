import "../styles/Community.scss";
import Battlefront2 from "../assets/battlefront2.jpg";
import { Person } from "react-bootstrap-icons";

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
      <div className="mostSection">
        <Person />
        {item.user}
        {item.value}
      </div>
    </>
  ));
};

export default function Community() {
  const db = [
    { user: "spadpaul", value: 27 },
    { user: "tybrooks", value: 19 },
    { user: "johnb", value: 18 },
    { user: "ace", value: 9 },
  ];

  return (
    <>
      <div className="communityPage">
        <div id="community">Community</div>
        <div className="poll voter">
          <h3 className="question">
            What game are you most looking forward to in 2023?
          </h3>
          <ul className="pollOptions">
            <li className="option">
              <input
                type="radio"
                name="zelda"
                onClick="updateCount(zelda)"
              ></input>
              <span id="zelda">Zelda Tears of the Kingdom</span>
            </li>
            <li className="option">
              <input
                type="radio"
                name="jedi"
                onClick="updateCount(jedi)"
              ></input>
              <span id="jedi">Jedi Survivor</span>
            </li>
            <li className="option">
              <input
                type="radio"
                name="spongebob"
                onClick="updateCount(spongebob)"
              ></input>
              <span id="spongebob">Spongebob Cosmic Shake</span>
            </li>
            <li className="option">
              <input
                type="radio"
                name="hogwarts"
                onClick="updateCount(hogwarts)"
              ></input>
              <span id="hogwarts">Hogwarts Legacy</span>
            </li>
          </ul>
          <div id="submitButton">
            <button>Submit</button>
          </div>
        </div>

        <div className="poll results">
          {/* Isn't a valid class ^ */}
          <h3 className="question">What was your favorite game of 2022?</h3>
          <ul className="pollOptions">
            <li className="option">
              <span id="zelda">
                {/* What's the point of the id*/}
                <b>38% </b>Elden Ring
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
              <b className="mosts">Most Comments</b>
              <ul className="userNames">
                <MostListUsers db={db} />
              </ul>
            </div>

            <div className="column">
              <b className="mosts">Most Comments</b>
              <ul className="userNames">
                <MostListUsers db={db} />
              </ul>
            </div>

            <div className="column">
              <b className="mosts">Most Comments</b>
              <ul className="userNames">
                <MostListUsers db={db} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
