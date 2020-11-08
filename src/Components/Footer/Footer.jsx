import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container-fluid   p-3">
        <div className="row ">
          <div className="col ">
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/milanchheta"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin mx-3 fa-2x"></i>
              </a>
              <a
                href="https://github.com/milanchheta"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-github-square mx-3 fa-2x"></i>
              </a>
              <a
                href="mailto:milanchheta@outlook.com"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fas fa-envelope mx-3 fa-2x "></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col text-center text-light">
            Website created by Milan Chheta
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
