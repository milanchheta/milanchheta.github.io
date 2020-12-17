import "./AboutMe.css";
import profile from "../../images/profile.png";
import resumepdf from "../../documents/resume.pdf";
import ProgressBar from "react-bootstrap/ProgressBar";
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
              {" "}
              Highly motivated computer science graduate student at Indiana
              University Bloomington (Class of 2021). <br />
              <br />
              My interests lie in the field of Software Engineering, Cloud
              Computing and Distributed Systems.
              <br />
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
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="container-fluid ">
                <div className="row">
                  <div className="col-12 skill font-2">
                    React.js / JavaScript / HTML / CSS
                    {/* </div>
                <div className="col-6"> */}
                    <br />
                    <ProgressBar now={90} variant="info" label={`90%`} />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-12 skill font-2">
                    Node.js
                    {/* </div>
                <div className="col-6"> */}
                    <br />
                    <ProgressBar now={85} variant="info" label={`85%`} />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-12 skill font-2">
                    Python
                    {/* </div>
                <div className="col-6"> */} <br />
                    <ProgressBar now={85} variant="info" label={`85%`} />
                  </div>
                </div>
                <br />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
              <div className="container-fluid ">
                <div className="row">
                  <div className="col-12 skill font-2">
                    MongoDB / MySQL
                    {/* </div>
                <div className="col-6"> */} <br />
                    <ProgressBar now={80} variant="info" label={`80%`} />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-12 skill font-2">
                    Docker / Kubernetes
                    {/* </div>
                <div className="col-6"> */} <br />
                    <ProgressBar now={75} variant="info" label={`75%`} />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-12 skill font-2">
                    Google Cloud Platform
                    {/* </div>
                <div className="col-6"> */} <br />
                    <ProgressBar now={65} variant="info" label={`65%`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center  m-auto">
            <div className="downloadResumeDiv mt-3 text-center">
              <a
                className="downloadResume"
                href={resumepdf}
                target="_blank"
                download="milanChheta.pdf"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AboutMe;
