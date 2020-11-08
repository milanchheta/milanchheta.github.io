import "./Projects.css";

function Projects() {
  return (
    <div className="Projects padding-class" id="Projects">
      <div className="container-fluid  h-100">
        <h1 className="ProjectsHeading mt-5 ">Projects</h1>
        <hr />

        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-3 project">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">
                  Distributed MapReduce System on GCP
                </h5>
                <p className="card-text">
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
                </p>
                <a href="#projects" className="btn projectLink">
                  Project link
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-3 project">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title text-center">
                  Distributed Weather Forecasting System
                </h5>
                <p className="card-text">
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
                </p>
                <a href="#projects" className="btn projectLink">
                  Project link
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-3 project">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Volunteer Management System</h5>
                <p className="card-text">
                  Developed a social network-based event management system, by
                  following the scrum agile methodology, allowing the volunteers
                  to be aware of near-by events and helping the organizations to
                  reach out to volunteers more effectively.
                </p>
                <a href="#projects" className="btn projectLink ">
                  Project link
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row mt-2">
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto p-1 project">
            <div class="card">
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
