import React, { useRef, useEffect } from "react";
import "./Navbar.css";
import $ from "jquery";
import data from "../data.json";

function Navbar() {
  const buttonEl = useRef(null);
  useEffect(() => {
    $("#home").addClass("active");
  }, []);

  window.onscroll = function () {
    var scrollPos = $(document).scrollTop();
    $("#toggleNavbar a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));

      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + scrollPos;
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        $("#toggleNavbar ul li a").removeClass("active");
        $("#contactme").addClass("active");
      } else if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $("#toggleNavbar ul li a").removeClass("active");
        currLink.addClass("active");
      }
    });
  };

  function handleSelection(e) {
    if (window.innerWidth < 992) {
      buttonEl.current.click();
    }
    $(".nav-item a").removeClass("active");
    $("#" + e.target.id).addClass("active");
  }
  return (
    <nav className="navbar navbar-expand-lg fixed-top  scroll-navbar  my-auto   mb-5 ">
      <button
        ref={buttonEl}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#toggleNavbar"
        aria-controls="toggleNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className={data["navbar"]["icon"]}></i>
        </span>
      </button>

      <div className="collapse navbar-collapse " id="toggleNavbar">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
          {data["navbar"]["items"].map((el, idx) => {
            return (
              <li key={idx} className="nav-item">
                <a
                  className="nav-link link font-2"
                  onClick={(e) => handleSelection(e)}
                  href={"#" + el["href"]}
                  id={el["id"]}
                >
                  {el["title"]}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
