import React from "react";
import { Link } from "gatsby";
import instagram from "../img/instagram-icon.svg";
import facebook from "../img/facebook-icon.svg";
import logo from "../img/logo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{
          position: "absolute",
          width: "100%",
          backgroundColor: "transparent",
        }}
      >
        <div className="container"
          style={{
            maxWidth: "95%",
            paddingTop: "1rem",
          }}>
          <div className="navbar-brand">
            <Link to="/" style = {{
              height: "100px",
            }} 
            className="navbar-item" title="Logo">
              <img src={logo} alt="UCLA Theta Tau" style={{ maxHeight: "100px", height: "85px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered"
              style = {{
                textAlign: "right",
                color: "white",
              }}>
              <Link /*The style stuff is inefficient af but im lazy*/
                className="navbar-item"
                to="/"
                style = {{ color: "white" }}>
                Home
              </Link>
              <Link 
                className="navbar-item"
                to="/about"
                style = {{ color: "white" }}>
                About
              </Link>
              <Link 
                className="navbar-item"
                to="/about"
                style = {{ color: "white" }}>
                Recruitment
              </Link>
              <Link 
                className="navbar-item"
                to="/actives"
                style = {{ color: "white" }}>
                Brothers
              </Link>
              <Link 
                className="navbar-item"
                to="/about"
                style = {{ color: "white" }}>
                Careers
              </Link>

              <a
                className="navbar-item"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={instagram} alt="Instagram" />
                </span>
              </a>
              <a
                className="navbar-item"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={facebook} alt="Facebook" />
                </span>
              </a>
            </div>
            {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
