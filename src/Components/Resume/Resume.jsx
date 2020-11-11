import "./Resume.css";

function Resume() {
  return (
    <div className="Resume padding-class" id="Resume">
      <div className="container-fluid  ">
        <h1 className="resumeHeading mt-5 ">Resume</h1>
        <hr />
        <div className="row ">
          <div className="col mx-auto">
            {" "}
            <h3 className="hStyle  mt-1">Work Experience</h3>
            <div className="container-fluid ">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-6">
                  <div className="box">
                    <div className="content-item">
                      <small>June 2020 - Present</small>
                      <h3>
                        Cloud Developer Intern <br /> <span>Internship</span>
                      </h3>
                      <h4>Wolfram Research</h4>
                      <p>Champaign, Illinois</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-6">
                  <div className="box">
                    <div className="content-item">
                      <small>June 2018 - Sept 2018</small>
                      <h3>
                        Software Developer Intern <br /> <span>Internship</span>
                      </h3>
                      <h4>Netgains Technologies PVT LTD</h4>
                      <p>Mumbai, India</p>
                    </div>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>

        <div className="row">
          <div className=" col mx-auto">
            {" "}
            <h3 className="hStyle mt-1 ">Education</h3>
            <div className="container-fluid  h-100">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-6">
                  <div className="box">
                    <div className="content-item">
                      <small>Aug 2019 - May 2021</small>
                      <h3>
                        Master of Science <br />
                        <span>Computer Science</span>
                        <br />
                        <span>CGPA: 3.85/ 4.00</span>
                      </h3>

                      <h4>Indiana University Bloomington</h4>
                      <p>Bloomington, Indiana</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-6">
                  <div className="box">
                    <div className="content-item">
                      <small>Aug 2014 - May 2018</small>
                      <h3>
                        Bachelor of Science <br />
                        <span>Electronics and Telecommunications</span> <br />
                        <span>CGPA: 3.53/ 4.00</span>
                      </h3>
                      <h4>University of Mumbai</h4>
                      <p>Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resume;
