import "../community.css";
import Battlefront2 from "../assets/battlefront2.jpg";

export default function Community() {
  // const zeldaButton = document.getElementsByTagName('zelda');
  var zeldaSpan  = document.getElementById("zelda");
  //const zeldaText = zeldaSpan.textContent;

  // const jediButton = document.getElementsByTagName('jedi');
  var jediSpan  = document.getElementById("jedi");
  //const jediText = jediSpan.textContent;

  // const spongebobButton = document.getElementsByTagName('spongebob');
  var spongebobSpan  = document.getElementById("spongebob");
  //const spongebobText = spongebobSpan.textContent;

  // const hogwartsButton = document.getElementsByTagName('hogwarts');
  var hogwartsSpan  = document.getElementById("hogwarts");
  //const hogwartsText = hogwartsSpan.textContent;


  // zeldaButton.addEventListener('click', updateCount);
  // jediButton.addEventListener('click', updateCount);
  // spongebobButton.addEventListener('click', updateCount);
  // hogwartsButton.addEventListener('click', updateCount);

  var zelda = 0;
  var jedi = 0;
  var spongebob = 0;
  var hogwarts = 0;
  var count = 0

  function updateCount(selected){
    if(selected === "zelda"){
      zelda++;
      count++
    }
    else if(selected === "jedi"){
      jedi++;
      count++
    }
    else if(selected === "spongebob"){
      spongebob++;
      count++
    }
    else if (selected === "hogwart"){
      hogwarts++;
      count++;
    }

    const zeldaPercent = zelda / count;
    const jediPercent = jedi / count;
    const spongebobPercent = spongebob / count;
    const hogwartsPercent = hogwarts / count;

    zeldaSpan.write = "abc";
  }

    return (
      <>
        <div>
          <div id="community">Community</div>

          <div class="poll voter">
            <h3 class="question">
              What game are you most looking forward to in 2023?
            </h3>
            <ul>
              <li class="option">
                <input type="radio" name="zelda" onClick="updateCount(zelda)"></input>
                <span id="zelda">Zelda Tears of the Kingdom</span>
              </li>
              <li class="option">
                <input type="radio" name="jedi" onClick="updateCount(jedi)"></input>
                <span id="jedi">Jedi Survivor</span>
              </li>
              <li class="option">
                <input type="radio" name="spongebob" onClick="updateCount(spongebob)"></input>
                <span id="spongebob">Spongebob Cosmic Shake</span>
              </li>
              <li class="option">
                <input type="radio" name="hogwarts" onClick="updateCount(hogwarts)"></input>
                <span id="hogwarts">Hogwarts Legacy</span>
              </li>
            </ul>
            <div id="submitButton">
              <button>Submit</button>

              
            </div>
          </div>



          <div class="poll results">
            <h3 class="question">
              What was your favorite game of 2022?
            </h3>
            <ul>
              <li class="option">
                <span id="zelda"><b>38% </b>Elden Ring</span>
              </li>
              <li class="option">
                <span id="jedi"><b>25% </b>God of War: Ragnorok</span>
              </li>
              <li class="option">
                <span id="spongebob"><b>20% </b>Lego Star Wars: Skywalker Saga</span>
              </li>
              <li class="option">
                <span id="hogwarts"><b>17% </b>Call of Duty: Modern Warfare II</span>
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
                  <li><img src={Battlefront2} alt="Star Wars: Battlefront 2"/>spadpaul</li>
                  <li><img src={Battlefront2} alt="Star Wars: Battlefront 2"/>spadpaul</li>
                  <li><img src={Battlefront2} alt="Star Wars: Battlefront 2"/>spadpaul</li>
                  <li><img src={Battlefront2} alt="Star Wars: Battlefront 2"/>spadpaul</li>
                </ul>
                <ul class="userValue">
                  <li>24</li>
                  <li>13</li>
                  <li>10</li>
                  <li>9</li>
                </ul>
              </div>
                
              <div class="column">
              <b class="mosts">Most Articles Written</b>
                <ul class="userNames">
                  <li><img src={Battlefront2} alt="Star Wars: Battlefront 2"/>spadpaul</li>
                  <li><img src={Battlefront2} alt="Star Wars: Battlefront 2"/>spadpaul</li>
                  <li><img src={Battlefront2} alt="Star Wars: Battlefront 2"/>spadpaul</li>
                  <li><img src={Battlefront2} alt="Star Wars: Battlefront 2"/>padpaul</li>
                </ul>
                <ul class="userValue">
                  <li>24</li>
                  <li>13</li>
                  <li>10</li>
                  <li>9</li>
                </ul>
              </div>
              
              <div class="column">
              <b class="mosts">Most Commented Topic</b>
                <ul class="userNames">
                  <li><img src={Battlefront2} alt="Star Wars: Battlefront 2"/>spadpaul</li>
                  <li><img src={Battlefront2} alt="Star Wars: Battlefront 2"/>spadpaul</li>
                  <li><img src={Battlefront2} alt="Star Wars: Battlefront 2"/>spadpaul</li>
                  <li><img src={Battlefront2} alt="Star Wars: Battlefront 2"/>spadpaul</li>
                </ul>
                <ul class="userValue">
                  <li>24</li>
                  <li>13</li>
                  <li>10</li>
                  <li>9</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </>
    )

}