import { React, useState } from "react";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ThoughtForm from "../components/ThoughtForm";
import ThoughtList from "../components/ThoughtList";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const [formData, setFormData] = useState({
    charName: "",
    level: "",
    race: "",
    background: "",
    alignment: "",
    experience: "",
    playerName: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading</div>;
  }

  if (!user?.username) {
    return <h4>You need to be logged in to see this.</h4>;
  }

  return (
    <div>
      {/* form for user input */}
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Example label</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
            name="charName"
            onChange={handleInputChange}
          ></input>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Another label</label>
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            name="level"
            onChange={handleInputChange}
          ></input>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Example label</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
            name="race"
            onChange={handleInputChange}
          ></input>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Another label</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            name="background"
            onChange={handleInputChange}
          ></input>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Example label</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
            name="alignment"
            onChange={handleInputChange}
          ></input>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Another label</label>
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            name="experience"
            onChange={handleInputChange}
          ></input>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Another label</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            name="playerName"
            onChange={handleInputChange}
          ></input>
        </div>
      </form>
      {/* form for user input */}

      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : "your"} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: "1px dotted #1a1a1a" }}
          >
            <ThoughtForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
