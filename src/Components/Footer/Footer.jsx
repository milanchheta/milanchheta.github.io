import "./Footer.css";
import data from "../data.json";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container-fluid   p-3">
        <div className="row ">
          <div className="col ">
            <div className="text-center">
              {data.footer.social.map((el, idx) => {
                return (
                  <a key={idx} href={el.url} rel="noreferrer" target="_blank">
                    <i className={el.icon}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div className="col text-center text-light">{data.footer.text} </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
