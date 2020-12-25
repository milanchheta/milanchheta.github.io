import "./Projects.css";
import data from "../data.json";
function Projects() {
  return (
    <div className="Projects padding-class" id="Projects">
      <div className="container-fluid  h-100">
        <h1 className="ProjectsHeading mt-5 font-4">Projects</h1>
        <hr />

        <div className="row">
          {data.projects.map((el, idx) => {
            return (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6 p-3 project"
                key={idx}
              >
                <div className="card h-100 shadow p-0">
                  <div className="card-body text-center">
                    <h3 className="font-2 text-break">{el.name}</h3>
                    <hr />

                    {el.github && (
                      <a
                        className="projectLink font-4 mb-2 "
                        href={el.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub URL
                      </a>
                    )}
                    <br />
                    <button
                      type="button"
                      className="btn btn-info projectLink font-4"
                      data-toggle="modal"
                      data-target={"#exampleModal" + idx}
                    >
                      Details
                    </button>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id={"exampleModal" + idx}
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content project">
                      <div className="modal-header">
                        <h3 className=" font-2 my-auto" id="exampleModalLabel">
                          {el.name}
                        </h3>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body font-1 text-center">
                        {el.lines.map((el1, idx1) => {
                          return (
                            <div key={idx1}>
                              {el1}
                              <br />
                              <br />
                            </div>
                          );
                        })}

                        {el.github && (
                          <a
                            className="projectLink font-4 mt-3 "
                            href={el.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub URL
                          </a>
                        )}
                      </div>
                    </div>
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
export default Projects;
