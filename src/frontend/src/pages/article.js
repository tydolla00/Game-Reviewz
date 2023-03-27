import "../styles/Article.scss";
import Battlefront2 from "../assets/battlefront2.jpg";
import Battlefront2Box from "../assets/battlefront2box.jpg";
import {useEffect, useState} from "react";
import hogwarts from "../assets/hogwartslegacy.jpeg";
import eldenring from "../assets/eldenring.jpeg";
import pokemon from "../assets/pokemonscarletviolet.jpg";
import ArticlesService from "../services/ArticlesService";

const Article  = (props) =>  {

    const [article, setArticles] = useState([]);

    const images = [{ hogwarts }, { eldenring }, { pokemon }];

    // useEffect is called whenever the page is rendered/rerendered. [] on Line 12 allows for API to only be called once.
    useEffect(() => {
        retrieveArticles();
        console.log("componenent is mounted");
    }, []);

    // gets all Articles from the Database. Calls getMethod from API which returns rows in database, then pass the data into Articles
    const retrieveArticles = () => {
        ArticlesService.getAll()
            .then((response) => {
                setArticles(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

return(
    <div>
        <br/>
        <div className = "backgroundPhotoCont">
            <img className={"blurredPhoto"} src={Battlefront2} alt={"Blurred BattleFront"} />
            <div className={"gameContainer"}>
                <img className={"gameBox"} src={Battlefront2Box} alt={"BattleFront Box Art"} />
                <div className={"gameInfo"}>
                    <p className={"gameTitle"}>
                        Star Wars Battlefront 2
                    </p>
                    <p className={"gameFacts"}>
                        Release Date:
                    </p>
                    <p className={"gameFacts"}>
                        Genre:
                    </p>
                </div>
            </div>
        </div>
        <br/>
        <div className={"articleInfo"}>
            <p className={"alignLeft"}>Author: First Last</p>
            <p className={"alignRight"}>Date: MM/DD/YYYY</p>
        </div>
        <br/>
        <hr className={"articleHr"}/>
        <br/>
        <br/>
        <div className={"bodyContainer"}>
            <div className={"articleContainer"}>
                <p className={"actualArticle"}>Hi my name is John, I don't really know what to write here as I never played this game, but I do have a birb if that interests you. He's pretty fat but hes also pretty cute ngl</p>
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
        <br/>
        <br/>
        <p className={"commentsTitle"}>Comments</p>
        <hr className={"articleHr"}/>
        <br/>
        <br/>
        <div className={"bodyContainer"}>
        <div className={"commentsSection"}>
            <div className={"userCommentContainer"}>
                <div className={"userPhotoContainer"}>
                    <img className={"userPhoto"} src={Battlefront2Box} alt={"BattleFront Box Art"}/>
                </div>
                <div className={"otherContainer"}>
                    <div className={"userInfo"}>
                        <p className={"alignLeft"}>User0183759378294</p>
                        <p className={"alignRight"}>MM/DD/YYYY</p>
                    </div>
                    <div className={"userComment"}>
                        <p className={"comment"}>idk what to write here so here you go, for some reason circles have got to be the most annoying thing ever</p>
                    </div>
                </div>
            </div>
            <div className={"userCommentContainer"}>
                <div className={"userPhotoContainer"}>
                    <img className={"userPhoto"} src={Battlefront2Box} alt={"BattleFront Box Art"}/>
                </div>
                <div className={"otherContainer"}>
                    <div className={"userInfo"}>
                        <p className={"alignLeft"}>User0183759378294</p>
                        <p className={"alignRight"}>MM/DD/YYYY</p>
                    </div>
                    <div className={"userComment"}>
                        idk
                    </div>
                </div>
            </div>
            <div className={"userCommentContainer"}>
                <div className={"userPhotoContainer"}>
                    <img className={"userPhoto"} src={Battlefront2Box} alt={"BattleFront Box Art"}/>
                </div>
                <div className={"otherContainer"}>
                    <div className={"userInfo"}>
                        <p className={"alignLeft"}>User0183759378294</p>
                        <p className={"alignRight"}>MM/DD/YYYY</p>
                    </div>
                    <div className={"userComment"}>
                        idk
                    </div>
                </div>
            </div>
            <div className={"userCommentContainer"}>
                <div className={"userPhotoContainer"}>
                    <img className={"userPhoto"} src={Battlefront2Box} alt={"BattleFront Box Art"}/>
                </div>
                <div className={"otherContainer"}>
                    <div className={"userInfo"}>
                        <p className={"alignLeft"}>User0183759378294</p>
                        <p className={"alignRight"}>MM/DD/YYYY</p>
                    </div>
                    <div className={"userComment"}>
                        idk
                    </div>
                </div>
            </div>
        </div>
            <div className={"otherArticlesContainer"}>
                <div className={"otherArticle"}>
                    <img className={"otherArticlePhoto"} src={Battlefront2} alt={"Blurred BattleFront"}></img>
                    <p className={"otherArticleTitle"}>Title of Game</p>
                </div>
                <div className={"otherArticle"}>
                    <img className={"otherArticlePhoto"} src={Battlefront2} alt={"Blurred BattleFront"}></img>
                    <p className={"otherArticleTitle"}>Title of Game</p>
                </div>
                <div className={"otherArticle"}>
                    <img className={"otherArticlePhoto"} src={Battlefront2} alt={"Blurred BattleFront"}></img>
                    <p className={"otherArticleTitle"}>Title of Game</p>
                </div>
            </div>
        </div>
        <br/>
        <br/>
    </div>

    )
}

export default Article;