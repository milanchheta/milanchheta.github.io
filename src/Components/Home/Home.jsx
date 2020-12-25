import "./Home.css";
import Typing from "react-typing-animation";
import data from "../data.json";

function Home() {
  return (
    <div className="Home pt-5" id="Home">
      <div className="container h-100">
        <div className="row  h-100">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center intro">
            <span className="greeting font-2">{data["home"]["greeting"]}</span>
            <span className="intro-greeting font-2">
              {data["home"]["message"]}
            </span>
            <br />
            <br />
            <Typing loop={true}>
              <div className="typewriter skills-greeting ml-2 font-1">
                {data["home"]["typeArr"].map((el, idx) => {
                  return type(el, idx);
                })}
              </div>
            </Typing>
          </div>
        </div>
      </div>
    </div>
  );
}
function type(stringToDisplay, idx) {
  return (
    <span key={idx}>
      <Typing.Speed ms={50} />
      {stringToDisplay}
      <Typing.Delay ms={1000} />
      <Typing.Speed ms={20} />
      <Typing.Backspace count={stringToDisplay.length + 1} />
      <Typing.Delay ms={1000} />
    </span>
  );
}

export default Home;
