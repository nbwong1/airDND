import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Auth from "../../utils/auth";

const styles = {
  MarginB: {
    marginBottom: "0px",
  },
  Padding: {
    padding: " padding: 10px 10px 10px 10px black solid",
  },
};

const Footer = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <footer style={styles.marginBottom} className="navW">
      <div className="">
        {Auth.loggedIn() ? (
          <>
            <div className=" alignDivs">
              <div className="sideDiv">
                <Link className="" to="/">
                  <h1 className=" bNavT">Meetups</h1>
                </Link>
              </div>

              <div style={styles.Padding} className="middleDiv alignDiv ">
                <Link className="alignDiv" to="/me">
                  <h1 className="bNavTM alignDiv">
                    {" "}
                    {Auth.getProfile().data.username}'s profile
                  </h1>
                </Link>
              </div>

              <div className="sideDiv">
                <h1 className="bNavT" onClick={logout}>
                  Logout
                </h1>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link className="btn btn-lg btn-info m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
