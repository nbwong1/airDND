import React from "react";
import { Link } from "react-router-dom";
// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery, useReactiveVar } from "@apollo/client";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

import { QUERY_SINGLE_MEETUP } from "../utils/queries";

const SingleMeetup = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { meetupId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_MEETUP, {
    // pass URL parameter
    variables: { meetupId: meetupId },
  });

  const meetup = data?.meetup || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {meetup.campaignName} <br />
        <span style={{ fontSize: "1rem" }}>
          {/* added profile link */}
          <Link className="text-light" to={`/profiles/${meetup.host}`}>{meetup.host}</Link> posted this quest {meetup.meetupCreatedAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            border: "2px dotted #1a1a1a",
            lineHeight: "1.5",
          }}
        >
          <p>{meetup.campaignDescription}</p>
          <p>{meetup.dateTime} ({meetup.campaignDuration})</p>
          <p>{meetup.meetupAddress} <span>Party Size: {meetup.campaignPartySize}</span></p>
          
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={meetup.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: "1px dotted #1a1a1a" }}>
        <CommentForm meetupId={meetup._id} />
      </div>
    </div>
  );
};

export default SingleMeetup;
