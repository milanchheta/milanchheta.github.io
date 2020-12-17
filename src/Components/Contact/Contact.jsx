import "./Contact.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import emailjs from "emailjs-com";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const mailForm = document.forms["contactForm"];
    const email = mailForm.elements["email"].value.trim();
    const name = mailForm.elements["name"].value.trim();
    const message = mailForm.elements["message_email"].value.trim();
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (name === "" || email === "" || message === "") {
      NotificationManager.error("Please fill out all the fields", "");
    } else if (!pattern.test(email)) {
      NotificationManager.error("Please enter a valid email address", "");
    } else {
      const formData = {
        email,
        name,
        message,
      };
      emailjs
        .send(
          "service_ys0hp09",
          "template_l80151h",
          formData,
          "user_z1wAsYQICclE4gEL1CsiC"
        )
        .then(
          (result) => {
            console.log(result.text);
            NotificationManager.success("Message Sent", "");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className="Contact padding-class" id="Contact">
      <div className="container-fluid">
        <h1 className="ContactHeading mt-5 font-4">Send a Message</h1>
        <hr />{" "}
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-3 mx-auto">
            <form className="contact-form " id="contactForm">
              <div className="form-group">
                <label className="font-4" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control border-info"
                  id="name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="font-4" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control border-info"
                  id="email"
                  required
                />
              </div>
              <div className="form-group">
                <label className="font-4" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message_email"
                  className="form-control border-info"
                  id="message_email"
                  cols="30"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="btn  sendMessage"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}
export default Contact;
