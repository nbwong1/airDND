import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_MEETUP } from "../../utils/mutations";
import { QUERY_MEETUPS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

// creating the meetup form
const MeetupForm = () => {
  const [ formState , setFormState ] = useState({
    dateTime: "",
    campaignName: "",
    campaignDescription: "",
    campaignDuration: "",
    campaignPartySize: "",
    meetupAddress: "",
    meetupCreatedAt: "",
});
// character count 
  const [characterCount, setCharacterCount] = useState(0);

  const [addMeetup, { error }] = useMutation(ADD_MEETUP, {
    update(cache, data, addMeetup) {
      try {
        const { meetups } = cache.readQuery({ query: QUERY_MEETUPS });

        cache.writeQuery({
          query: QUERY_MEETUPS,
          data: { meetups: [addMeetup, ...meetups] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, meetups: [ ...me.meetups, addMeetup] } },
      });
      } catch (e) {
        console.error(e);
      }
    },
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'campaignName' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'campaignName') {
      setFormState({ ...formState, [name]: value});
    }
    console.log(formState);
  };
// submission of form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addMeetup({
        variables: { ...formState, 
          host: Auth.getProfile().data.username,
        },
      });

      setFormState({
        dateTime: 0,
        campaignName: "",
        campaignDescription: "",
        campaignDuration: "",
        campaignPartySize: 0,
        meetupAddress: "",
        meetupCreatedAt: 0,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Add your campaign</h3>
      <p>Looking to slay dragons or stop the Necromancer? Add to the bulletin board and seek out other heroes yearning for adventure!</p>

      {Auth.loggedIn() ? (
        <>
          {/* campaignName div */}
            <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            {/* what is the date/time */}
            <div className="col-12 col-lg-9">
            <h6>Date/Time of Event:</h6>
              <textarea
                name="dateTime"
                placeholder="MM/DD/YYYY HH:mm AM"
                value={formState.dateTime}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            {/* campaignName */}
            <div className="col-12 col-lg-9">
              <h6>Campaign Name:</h6>
              <textarea
              name="campaignName"
              placeholder="i.e. Tales From The Yawning Portal."
              value={formState.campaignName}
              className="form-input w-100"
              style={{ lineHeight: "1.5", resize: "vertical" }}
              onChange={handleChange}
              ></textarea>
            </div>
            {/* campaignDescription div */}
            <div className="col-12 col-lg-9">
              <h6>Description:</h6>
              <textarea
                name="campaignDescription"
                placeholder="Brief description of the campaign."
                value={formState.campaignDescription}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            {/* campaignDuration */}
            <div className="col-12 col-lg-9">
              <h6>How long is the campaign?</h6>
              <textarea
                name="campaignDuration"
                placeholder="Minutes, Hours, Days, Weeks?"
                value={formState.campaignDuration}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            {/* campaignPartySize */}
            <div className="col-12 col-lg-9">
              <h6>Preferred Party Size:</h6>
              <textarea
                name="campaignPartySize"
                placeholder="How many in your party?"
                value={formState.campaignPartySize}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            {/* meetupAddress */}
            <div className="col-12 col-lg-9">
              <h6>Rendezvous Address</h6>
              <textarea
                name="meetupAddress"
                placeholder="Address"
                value={formState.meetupAddress}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>
            <br></br>
            <div className="col-12 col-lg-3">
              <button className="btn btn-info btn-block py-3" type="submit">
                Create Meetup
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to create your Meetup. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default MeetupForm;
