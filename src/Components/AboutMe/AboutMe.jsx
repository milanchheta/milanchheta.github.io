import "./AboutMe.css";
import profile from "../../images/profile.png";
import resumepdf from "../../documents/resume.pdf";
import ProgressBar from "react-bootstrap/ProgressBar";
import data from "../data.json";
function AboutMe() {
  return (
    <div className="AboutMe padding-class" id="AboutMe">
      <div className="container-fluid ">
        <h1 className="aboutmeHeading mt-5 font-4">About Me</h1>
        <hr />
        <div className="card  py-4 shadow">
          <div className="row  p-1 m-1">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 text-center  ">
              {" "}
              <img
                src={profile}
                className="img-fluid border rounded border-info"
                alt="Profile"
                style={{ maxHeight: "350px" }}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 aboutme mx-auto aboutmeText p-3 font-1 ">
              {data["about"].lines.map((el, idx) => {
                return (
                  <div key={idx}>
                    {el}
                    <br />
                  </div>
                );
              })}

              <div className="downloadResumeDiv mt-3 ">
                <a
                  className="downloadResume font-4"
                  href={resumepdf}
                  target="_blank"
                  download="milanChheta.pdf"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>{" "}
          </div>

          <div className="row  p-1 m-1">
            <div className="col  ">
              <h3 className=" mt-1 font-4 border-bottom p-1">Skills</h3>
            </div>
          </div>

          <div className="row pt-2 mt-2 px-2 mx-2">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="container-fluid ">
                <div className="row">
                  {data["about"]["skills"].map((el, idx) => {
                    return (
                      <div
                        key={idx}
                        className="col-lg-6 col-md-12 col-sm-12 col-xs-12 skill font-2 p-2"
                      >
                        {el.name}
                        <ProgressBar
                          now={el.level}
                          variant="info"
                          label={`90%`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
