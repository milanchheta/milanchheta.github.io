import "./Contact.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const mailForm = document.forms["contactForm"];
    // const email = mailForm.elements["email"].value.trim();
    // const firstName = mailForm.elements["fname"].value.trim();

    // const lastName = mailForm.elements["lname"].value.trim();
    // const message = mailForm.elements["message_email"].value.trim();
    // const formData = {
    //   email,
    //   firstName,
    //   lastName,
    //   message,
    // };
    NotificationManager.success("Message Sent", "");
  };
  return (
    <div className="Contact padding-class" id="Contact">
      {/* <div className="container h-100">
        <h1 className="ContactHeading">Contact</h1>
        <hr />



      </div> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading ">
              <h1 className="ContactHeading mt-5">Send a Message</h1>
              <hr />{" "}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6  p-3 mx-auto">
            <form className="contact-form " id="contactForm">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label className="" htmlFor="fname">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control border-info"
                      id="fname"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group ">
                    <label className="" htmlFor="lname">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control border-info"
                      id="lname"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control border-info"
                  id="email"
                />
              </div>
              <div className="form-group">
                <label className="" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message_email"
                  className="form-control border-info"
                  id="message_email"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="btn  sendMessage"
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
