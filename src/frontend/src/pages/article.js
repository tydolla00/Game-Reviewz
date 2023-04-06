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
    date: "",
  };

  const currDate = new Date();

  const date = {
    day: currDate.getDate(),
    month: currDate.getMonth() + 1,
    year: currDate.getFullYear(),
  };

  const [article, setArticle] = useState(initialState);
  const [images, setImages] = useState([]);

  const getArticle = (id) => {
    let path = window.location.pathname.substring(0, 6) === "/games"; // Could cause problems when move to AWS.
    if (path) {
      ArticlesService.getGamesById(id)
        .then((res) => {
          setArticle(res.data);
          console.log(res.data);
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

  const getImages = (id) => {
    ArticlesService.getGamesImagesById(id)
      .then((res) => {
        setImages(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    console.log(window.location.pathname);
    window.scrollTo(0, 0);
    if (id) getArticle(id);
    getImages(id);
  }, [id]);

  const SplitReview  = () => {
    const arr = article.review.split("@");
    return arr.map((item) => (<><p className="actualArticle">{item}</p></>)
    )
  };

  return (
    <div>
      <br />
      <div className="backgroundPhotoCont">
        <img
          className={"blurredPhoto"}
          src={article.bgimage}
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
            <p
              className={"gameFacts"}
            >{`Release Date: ${article.releaseDate}`}</p>
            <p className={"gameFacts"}>{`Genre: ${article.genre}`}</p>
            <p className={"gameFacts"}>{`Author: ${article.reviewer}`}</p>
            <p className={"gameFacts"}>{`Date: ${article.datePosted}`}</p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className={"bodyContainer"}>
        <div className={"articleContainer"}>
          <SplitReview />
          <img src={images[0]?.path} />
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
