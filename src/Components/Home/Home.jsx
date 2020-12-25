import "./Home.css";
import data from "../data.json";
import Typed from "react-typed";

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

            <div className="typewriter skills-greeting ml-2 font-1">
              <Typed
                strings={data["home"]["typeArr"]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={1200}
                loop
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
