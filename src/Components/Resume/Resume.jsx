import "./Resume.css";
import data from "../data.json";
function Resume() {
  return (
    <div className="Resume padding-class" id="Resume">
      <div className="container-fluid  ">
        <h1 className="resumeHeading mt-5 font-4">Resume</h1>
        <hr />
        <div className="row  p-1 m-1">
          <div className="col  ">
            <h3 className=" mt-1 font-4  p-1">
              <span className="border-bottom border-info">
                {data.resume.work.title}
              </span>
            </h3>
          </div>
        </div>
        <div className="row ">
          {data.resume.work.items.map((el, idx) => {
            return (
              <div
                key={idx}
                className="col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-12 py-2"
              >
                <div className="card shadow box h-100">
                  <div className="content-item">
                    <h5 className="font-1">{el.date}</h5>
                    <h3 className="font-2">
                      {el.title}
                      <hr />
                      <span>{el.type}</span>
                    </h3>
                    <h4 className="font-1">{el.company}</h4>
                    <p className="font-1">{el.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>{" "}
        <br />
        <div className="row  p-1 m-1">
          <div className="col  ">
            <h3 className=" mt-1 font-4 p-1">
              <span className="border-bottom border-info">
                {data.resume.education.title}
              </span>
            </h3>
          </div>
        </div>
        <div className="row ">
          {data.resume.education.items.map((el, idx) => {
            return (
              <div
                key={idx}
                className="col-xl-6 col-lg-6 col-xs-12 col-sm-12 col-md-12 py-2"
              >
                <div className="card shadow box h-100">
                  <div className="content-item">
                    <h5 className="font-1">{el.date}</h5>
                    <h3 className="font-2">
                      {el.title} <hr />
                      <span>{el.major}</span>
                      <br />
                      <span>CGPA: {el.cgpa}</span>
                    </h3>

                    <h4 className="font-1">{el.university}</h4>
                    <p className="font-1">{el.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Resume;
