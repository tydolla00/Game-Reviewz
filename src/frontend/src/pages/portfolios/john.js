import "../../styles/John.scss";

export default function JohnPage() {
  return (
    <div>
      <div className={"container"}>
        <div className={"profileContainer"}>
          <div className={"profileIntro"}>
            <h1 className={"greeting"}>Hey there!</h1>
            <p className={"greetingPara"}>
              I'm John and I am a front end developer who is proficient in Java,
              React, HTML, and CSS. I am a recent graduate with a Bachelor's
              degree in Computer Science, and not only that I have have earned
              multiple certifications from LinkedIn, and freeCodeCamp.org. Even
              still, there is still so much to learn so I hope to improve my
              skills even more to create the best results possible.
            </p>
          </div>
          <div className={"profilePhoto"}></div>
        </div>
      </div>
    </div>
  );
}
