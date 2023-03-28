import "../styles/Article.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Battlefront2 from "../assets/battlefront2.jpg";
import Battlefront2Box from "../assets/battlefront2box.jpg";
import ArticlesService from "../services/ArticlesService";

function Article() {
  let { id } = useParams();

  const initialState = {
    id: null,
    title: "",
    review: "",
    reviewer: "",
    comments: 0,
  };

  const currDate = new Date();

  const date = {
    day: currDate.getDate(),
    month: currDate.getMonth() + 1,
    year: currDate.getFullYear(),
  };

  const [article, setArticle] = useState(initialState);

  const getArticle = (id) => {
    let path = window.location.pathname.substring(0, 6) === "/games";
    if (path) {
      ArticlesService.getGamesById(id)
        .then((res) => {
          setArticle(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      ArticlesService.getTechById(id)
        .then((res) => {
          setArticle(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    console.log(window.location.pathname);
    window.scrollTo(0, 0);
    if (id) getArticle(id);
  }, [id]);

  return (
    <div>
      <br />
      <div className="backgroundPhotoCont">
        <img
          className={"blurredPhoto"}
          src={article.path}
          alt={"Blurred BattleFront"}
        />
        <div className={"gameContainer"}>
          <img
            className={"gameBox"}
            src={article.path}
            alt={"BattleFront Box Art"}
          />
          <div className={"gameInfo"}>
            <p className={"gameTitle"}>{article.title}</p>
            <p className={"gameFacts"}>Release Date:</p>
            <p className={"gameFacts"}>Genre:</p>
          </div>
        </div>
      </div>
      <br />
      <div className={"articleInfo"}>
        <p className={"alignLeft"}>{`Author: ${article.reviewer}`}</p>
        <p className={"alignRight"}>
          Date: {`${date.month} ${date.day} ${date.year} `}
        </p>
      </div>
      <br />
      <hr className={"articleHr"} />
      <br />
      <br />
      <div className={"bodyContainer"}>
        <div className={"articleContainer"}>
          <p className={"actualArticle"}>{article.review}</p>
        </div>
        <div className={"possiblyAds"}>
          <div className={"unknown"}>
            <p className={"unknownTitle"}>Unknown</p>
          </div>
          <div className={"unknown"}>
            <p className={"unknownTitle"}>Unknown</p>
          </div>
          <div className={"unknown"}>
            <p className={"unknownTitle"}>Unknown</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <p className={"commentsTitle"}>Comments</p>
      <hr className={"articleHr"} />
      <br />
      <br />
      <div className={"bodyContainer"}>
        <div className={"commentsSection"}>
          <div className={"userCommentContainer"}>
            <div className={"userPhotoContainer"}>
              <img
                className={"userPhoto"}
                src={Battlefront2Box}
                alt={"BattleFront Box Art"}
              />
            </div>
            <div className={"otherContainer"}>
              <div className={"userInfo"}>
                <p className={"alignLeft"}>User0183759378294</p>
                <p className={"alignRight"}>MM/DD/YYYY</p>
              </div>
              <div className={"userComment"}>
                <p className={"comment"}>
                  idk what to write here so here you go, for some reason circles
                  have got to be the most annoying thing ever
                </p>
              </div>
            </div>
          </div>
          <div className={"userCommentContainer"}>
            <div className={"userPhotoContainer"}>
              <img
                className={"userPhoto"}
                src={Battlefront2Box}
                alt={"BattleFront Box Art"}
              />
            </div>
            <div className={"otherContainer"}>
              <div className={"userInfo"}>
                <p className={"alignLeft"}>User0183759378294</p>
                <p className={"alignRight"}>MM/DD/YYYY</p>
              </div>
              <div className={"userComment"}>idk</div>
            </div>
          </div>
          <div className={"userCommentContainer"}>
            <div className={"userPhotoContainer"}>
              <img
                className={"userPhoto"}
                src={Battlefront2Box}
                alt={"BattleFront Box Art"}
              />
            </div>
            <div className={"otherContainer"}>
              <div className={"userInfo"}>
                <p className={"alignLeft"}>User0183759378294</p>
                <p className={"alignRight"}>MM/DD/YYYY</p>
              </div>
              <div className={"userComment"}>idk</div>
            </div>
          </div>
          <div className={"userCommentContainer"}>
            <div className={"userPhotoContainer"}>
              <img
                className={"userPhoto"}
                src={Battlefront2Box}
                alt={"BattleFront Box Art"}
              />
            </div>
            <div className={"otherContainer"}>
              <div className={"userInfo"}>
                <p className={"alignLeft"}>User0183759378294</p>
                <p className={"alignRight"}>MM/DD/YYYY</p>
              </div>
              <div className={"userComment"}>idk</div>
            </div>
          </div>
        </div>
        <div className={"otherArticlesContainer"}>
          <div className={"otherArticle"}>
            <img
              className={"otherArticlePhoto"}
              src={Battlefront2}
              alt={"Blurred BattleFront"}
            ></img>
            <p className={"otherArticleTitle"}>Title of Game</p>
          </div>
          <div className={"otherArticle"}>
            <img
              className={"otherArticlePhoto"}
              src={Battlefront2}
              alt={"Blurred BattleFront"}
            ></img>
            <p className={"otherArticleTitle"}>Title of Game</p>
          </div>
          <div className={"otherArticle"}>
            <img
              className={"otherArticlePhoto"}
              src={Battlefront2}
              alt={"Blurred BattleFront"}
            ></img>
            <p className={"otherArticleTitle"}>Title of Game</p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Article;
