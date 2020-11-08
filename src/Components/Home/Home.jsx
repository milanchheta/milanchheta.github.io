import "./Home.css";
function Home() {
  return (
    <div className="Home pt-5" id="Home">
      <div className="container h-100">
        <div className="row  h-100">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center intro">
            <span className="greeting display-4">Hello, </span>
            <span className="intro-greeting display-4">I am Milan.</span>
            <br />
            <br />
            <span className="skills-greeting ">
              Web Developer / Cloud Developer / Mobile App Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
