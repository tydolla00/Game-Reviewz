import "../styles/Article.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticlesService from "../services/ArticlesService";
import MWII from "../assets/mwII.jpeg";
import Ty from "../assets/ty.PNG";

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
    let path = window.location.pathname.substring(0, 6) === "/games";
    if (path) {
      ArticlesService.getGamesImagesById(id)
        .then((res) => {
          setImages(res.data);
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      ArticlesService.getTechImagesById(id)
        .then((res) => {
          setImages(res.data);
          console.log(res.data);
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
    getImages(id);
  }, [id]);

  const SplitReview = () => {
    const arr = article.review.split("@");
    let i = 0;
    return arr.map((item) => (
      <>
        <p className="actualArticle">{item}</p>
        {item.charAt(0) === "+" && <img src={images[i]?.path} alt="images" />}
      </>
    ));
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
                src={Ty}
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
                src={Ty}
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
                src={Ty}
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
                src={Ty}
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
              src={Ty}
              alt={"Blurred BattleFront"}
            ></img>
            <p className={"otherArticleTitle"}>Title of Game</p>
          </div>
          <div className={"otherArticle"}>
            <img
              className={"otherArticlePhoto"}
              src={Ty}
              alt={"Blurred BattleFront"}
            ></img>
            <p className={"otherArticleTitle"}>Title of Game</p>
          </div>
          <div className={"otherArticle"}>
            <img
              className={"otherArticlePhoto"}
              src={Ty}
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
