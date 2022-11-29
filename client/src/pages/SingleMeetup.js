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

    <div className="my-5">
      <div style={{
        background: "rgb(149,0,0,100)",
        textAlign: "center",
        fontSize: ".5rem",
        borderRadius: " 25px 25px 0px 0px",
        boxShadow: "10px 10px 10px rgba(30,30,30,.5)"
      }}>
        <h3 className="card-header  py-5 m-0" style={{ fontSize: '25px', color: "white", }}>
          <span>
            {/* added profile link */}
            <Link className="text-light" to={`/profiles/${meetup.host}`}>{meetup.host}</Link> posted this quest {meetup.meetupCreatedAt}
           </span>
        </h3>
      </div>
      <div className="main py-1" style={{
        background: "rgb(41,42,45)",
        borderRadius: "0px 0px 25px 25px",
        boxShadow: "10px 10px 10px rgba(30,30,30,.5)",
        border: "2px solid black",


      }}>


        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            color: "white",
            background: "rgb(149,0,0,100)",
            lineHeight: '1.5',
            borderRadius: " 15px 15px 15px 15px",
            border: "2px solid white",

          }}
        >
          <p>{meetup.campaignDescription}</p>
          <p>{meetup.dateTime} ({meetup.campaignDuration})</p>
          <p>{meetup.meetupAddress} <span>Party Size: {meetup.campaignPartySize}</span></p>

        </blockquote>

        <div className="overflow-auto">
          <div className="my-5">
            <CommentList comments={meetup.comments} />
          </div>
          <div className="m-3 p-4">
            <CommentForm meetupId={meetup._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMeetup;
