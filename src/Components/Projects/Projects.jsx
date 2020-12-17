import "./Projects.css";

function Projects() {
  return (
    <div className="Projects padding-class" id="Projects">
      <div className="container-fluid  h-100">
        <h1 className="ProjectsHeading mt-5 font-4">Projects</h1>
        <hr />

        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-3 project">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h3 className="font-2">Distributed MapReduce System on GCP</h3>
                <hr />
                {/* <a href="#projects" className="btn projectLink">
                  Project link
                </a> */}{" "}
                <a
                  className="projectLink font-4"
                  href="https://github.com/milanchheta/mapReduceGCP"
                  target="_blank"
                  rel="noreferrer"
                >
                  Checkout project
                </a>
                <br />
                <button
                  type="button"
                  className="btn btn-info projectLink mt-3 font-4"
                  data-toggle="modal"
                  data-target="#exampleModal1"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content project">
                <div className="modal-header">
                  <h3 className=" font-2" id="exampleModalLabel">
                    Distributed MapReduce System on GCP
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
                  {" "}
                  Designed, developed, and deployed a generalized MapReduce
                  framework on Google Cloud by implementing parallel computation
                  and dynamic creation of mappers and reducers, allowing to run
                  parallel tasks on multiple Virtual Machines and thus reducing
                  the execution time.
                  <br />
                  <br />
                  Developed a Memcached system used as a data storage system by
                  the MapReduce framework, and making it possible to implement a
                  command-based consistent data storage on the network.
                  <br />{" "}
                  <a
                    className="projectLink font-4 mt-3 "
                    href="https://github.com/milanchheta/ConnectHour"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Checkout project
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-6  col-md-12 col-sm-12 col-xs-12 p-3 project">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h3 className="font-2 text-center">
                  {" "}
                  Distributed Weather Forecasting System
                </h3>{" "}
                <hr />
                {/* <a href="#projects" className="btn projectLink">
                  Project link
                </a> */}{" "}
                <a
                  className="projectLink font-4"
                  href="https://github.com/milanchheta/Orenda"
                  target="_blank"
                  rel="noreferrer"
                >
                  Checkout project
                </a>
                <br />
                <button
                  type="button"
                  className="btn btn-info projectLink mt-3 font-4"
                  data-toggle="modal"
                  data-target="#exampleModal2"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal2"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content project">
                <div className="modal-header ">
                  <h3 className="font-2" id="exampleModalLabel">
                    Distributed Weather Forecasting System
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
                  {" "}
                  Designed and developed a distributed weather forecasting
                  system by containerizing microservices and deploying it in a
                  Kubernetes cluster.
                  <br />
                  <br />
                  Implemented asynchronous communication between services by
                  using Apache Kafka and built a CI/CD pipeline using Travis CI
                  to automate the integration and deployment process.
                  <br />
                  <br />
                  Successfully upgraded the system with Traffic management, mTLS
                  security, Gateways, Canary deployments, and system
                  observability by implementing Istio’s service mesh, to improve
                  the security, load balancing, and information gathering of the
                  deployed system.
                  <br />{" "}
                  <a
                    className="projectLink font-4 mt-3 "
                    href="https://github.com/milanchheta/ConnectHour"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Checkout project
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-6  col-md-12 col-sm-12 col-xs-12 p-3 project">
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h3 className="font-2">Volunteer Management System</h3>
                <hr />
                {/* <a href="#projects" className="btn projectLink ">
                  Project link
                </a> */}

                <a
                  className="projectLink font-4"
                  href="https://github.com/milanchheta/ConnectHour"
                  target="_blank"
                  rel="noreferrer"
                >
                  Checkout project
                </a>
                <br />
                <button
                  type="button"
                  className="btn btn-info projectLink mt-3 font-4"
                  data-toggle="modal"
                  data-target="#exampleModal3"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal3"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content project">
              <div className="modal-header">
                <h3 className="font-2" id="exampleModalLabel">
                  Volunteer Management System{" "}
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
                {" "}
                Developed a social network-based event management system, by
                following the scrum agile methodology, allowing the volunteers
                to be aware of near-by events and helping the organizations to
                reach out to volunteers more effectively.
                <br />{" "}
                <a
                  className="projectLink font-4 mt-3 "
                  href="https://github.com/milanchheta/ConnectHour"
                  target="_blank"
                  rel="noreferrer"
                >
                  Checkout project
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row mt-2">
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto p-1 project">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Project Name</h5>
                <p className="card-text">Project Description</p>
                <a href="#projects" className="btn projectLink">
                  Project link
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto p-1 project"></div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto p-1 project"></div>
        </div> */}
      </div>
    </div>
  );
}
export default Projects;
