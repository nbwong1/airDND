import React from "react";
import { Link } from "react-router-dom";

const meetuptList = ({
  // thoughts,
  meetups,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!meetups.length) {
    return <h3>No meetups Yet</h3>;
  }
  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {meetups &&
        meetups.map((meetup) => (
          <div key={meetup._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link className="text-light" to={`/profiles/${meetup.host}`}>
                  {meetup.host} <br />
                  <span style={{ fontSize: "1rem" }}>
                    meetup created on {meetup.meetupCreatedAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>
                    You had this meetup created on {meetup.meetupCreatedAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{meetup.campaignDescription}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/meetups/${meetup._id}`}
            >
              Join the discussion on this meetup.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default meetuptList;
