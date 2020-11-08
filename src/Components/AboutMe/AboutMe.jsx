import "./AboutMe.css";
import profile from "../../images/profile.png";
import resumepdf from "../../documents/resume.pdf";
import ProgressBar from "react-bootstrap/ProgressBar";
function AboutMe() {
  return (
    <div className="AboutMe padding-class" id="AboutMe">
      <div className="container-fluid h-100">
        <h1 className="aboutmeHeading mt-5">About Me</h1>
        <hr />
        <div className="row  h-100">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center  m-auto">
            {" "}
            <img
              src={profile}
              className="img-fluid border rounded border-info"
              alt="Profile"
              style={{ maxHeight: "650px" }}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 aboutme my-auto p-2">
            <h3 className=" mt-1">Skills</h3>
            <div className="container">
              <div className="row">
                <div className="col-6 skill">Python</div>
                <div className="col-6">
                  <ProgressBar now={85} variant="info" />
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-6 skill">
                  React.js / JavaScript / HTML / CSS
                </div>
                <div className="col-6">
                  <ProgressBar now={90} variant="info" />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-6 skill">Node.js</div>
                <div className="col-6">
                  <ProgressBar now={85} variant="info" />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-6 skill">MongoDB / MySQL</div>
                <div className="col-6">
                  <ProgressBar now={80} variant="info" />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-6 skill">Docker / Kubernetes</div>
                <div className="col-6">
                  <ProgressBar now={75} variant="info" />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-6 skill">Google Cloud Platform</div>
                <div className="col-6">
                  <ProgressBar now={65} variant="info" />
                </div>
              </div>
            </div>
            <div className="downloadResumeDiv mt-3">
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
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
