import "../styles/Community.scss";
import Battlefront2 from "../assets/battlefront2.jpg";


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
//       <div class = "option" onClick="markAnswer('${i}')>
//         ${answer}
//         <span class="percentage-bar"></span>
//         <span class="percentage-bar"></span>
//       </div>
//     `
//   );
// }).join("");

const MostListUsers = (props) => {
  return props.db.map((item) => (
    <>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>
          {item.user}
        </li>
    </>
  ));
};

const MostListValues = (props) => {
  return props.db.map((item) => (
    <>
        <li>
          {item.value}
        </li>
    </>
  ));
};


export default function Community() {

  const db = [
    {user: "spadpaul", value: 27},
    {user: "tybrooks", value: 19},
    {user: "johnb", value: 18},
    {user: "ace", value: 9},
  ]

  return (
    <>
      <div class="communityPage">
        <div id="community">Community</div>

        <div class="poll voter">
          <h3 class="question">
            What game are you most looking forward to in 2023?
          </h3>
          <ul>
            <li class="option">
              <input
                type="radio"
                name="zelda"
                onClick="updateCount(zelda)"
              ></input>
              <span id="zelda">Zelda Tears of the Kingdom</span>
            </li>
            <li class="option">
              <input
                type="radio"
                name="jedi"
                onClick="updateCount(jedi)"
              ></input>
              <span id="jedi">Jedi Survivor</span>
            </li>
            <li class="option">
              <input
                type="radio"
                name="spongebob"
                onClick="updateCount(spongebob)"
              ></input>
              <span id="spongebob">Spongebob Cosmic Shake</span>
            </li>
            <li class="option">
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

        <div class="poll results">
          <h3 class="question">What was your favorite game of 2022?</h3>
          <ul>
            <li class="option">
              <span id="zelda">
                <b>38% </b>Elden Ring
              </span>
            </li>
            <li class="option">
              <span id="jedi">
                <b>25% </b>God of War: Ragnorok
              </span>
            </li>
            <li class="option">
              <span id="spongebob">
                <b>20% </b>Lego Star Wars: Skywalker Saga
              </span>
            </li>
            <li class="option">
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

        <div class="topMembers">
          <div class="columns">
            <div class="column">
              <b class="mosts">Most Comments</b>
              <ul class="userNames">
                <MostListUsers db={db}/>
              </ul>
              <ul class="userValue">
                <MostListValues db={db}/>
              </ul>
            </div>

            <div class="column">
              <b class="mosts">Most Comments</b>
              <ul class="userNames">
                <MostListUsers db={db}/>
              </ul>
              <ul class="userValue">
                <MostListValues db={db}/>
              </ul>
            </div>

            <div class="column">
              <b class="mosts">Most Comments</b>
              <ul class="userNames">
                <MostListUsers db={db}/>
              </ul>
              <ul class="userValue">
                <MostListValues db={db}/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
