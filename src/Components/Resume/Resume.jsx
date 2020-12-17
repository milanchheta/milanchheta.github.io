import "./Resume.css";

function Resume() {
  return (
    <div className="Resume padding-class" id="Resume">
      <div className="container-fluid  ">
        <h1 className="resumeHeading mt-5 font-4">Resume</h1>
        <hr />
        <div className="row  p-1 m-1">
          <div className="col  ">
            <h3 className=" mt-1 font-4  p-1">
              <span className="border-bottom border-info">Work Experience</span>
            </h3>
          </div>
        </div>
        <div className="row ">
          <div className="col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-12 py-2">
            <div className="card shadow box h-100">
              <div className="content-item">
                <h5 className="font-1">June 2020 - Dec 2020</h5>
                <h3 className="font-2">
                  Cloud Developer Intern <hr />
                  <span>Internship</span>
                </h3>
                <h4 className="font-1">Wolfram Research, Inc</h4>
                <p className="font-1">Champaign, Illinois</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-12 py-2">
            <div className="card shadow box h-100">
              <div className="content-item">
                <h5 className="font-1">June 2018 - Sept 2018</h5>
                <h3 className="font-2">
                  Software Developer Intern <hr />
                  <span>Internship</span>
                </h3>
                <h4 className="font-1">Netgains Technologies PVT LTD</h4>
                <p className="font-1">Mumbai, India</p>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
        <br />
        <div className="row  p-1 m-1">
          <div className="col  ">
            <h3 className=" mt-1 font-4 p-1">
              <span className="border-bottom border-info">Education</span>
            </h3>
          </div>
        </div>
        <div className="row ">
          <div className="col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-12 py-2">
            <div className="card shadow box h-100">
              <div className="content-item">
                <h5 className="font-1">Aug 2019 - May 2021</h5>
                <h3 className="font-2">
                  Master of Science <hr />
                  <span>Computer Science</span>
                  <br />
                  <span>CGPA: 3.85/ 4.00</span>
                </h3>

                <h4 className="font-1">Indiana University Bloomington</h4>
                <p className="font-1">Bloomington, Indiana</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-12 py-2">
            <div className=" card shadow box h-100">
              <div className="content-item">
                <h5 className="font-1">Aug 2014 - May 2018</h5>
                <h3 className="font-2">
                  Bachelor of Science
                  <hr />
                  <span>Electronics and Telecommunications</span> <br />
                  <span>CGPA: 3.53/ 4.00</span>
                </h3>
                <h4 className="font-1">University of Mumbai</h4>
                <p className="font-1">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resume;
