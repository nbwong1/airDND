import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_CHARACTER } from "../../utils/mutations";
import { QUERY_MEETUPS, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";

const CharForm = () => {
  const [charFormData, setcharFormData] = useState({
    name: "",
    level: 0,
    race: "",
    class: "",
    alignment: "",
    experience: 0,
    // stats
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });
  const [addCharacter, { error }] = useMutation(ADD_CHARACTER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setcharFormData({ ...charFormData, [name]: value });
    console.log(charFormData);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addCharacter({
        variables: {
          ...charFormData,
        },
      });

      setcharFormData({
        name: "",
        level: 0,
        race: "",
        class: "",
        alignment: "",
        experience: 0,
        // stats
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name:</label>
            <input
              type="text"
              value={charFormData.name}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Character Name"
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">LEVEL:</label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Level"
              name="level"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">RACE:</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Race"
              name="race"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">class:</label>
            <input
              type="list"
              className="form-control"
              id="className"
              placeholder="class"
              name="class"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">ALIGNMENT:</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Alignment"
              name="alignment"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">EXP:</label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Experience"
              name="experience"
              onChange={handleInputChange}
            />
          </div>
          {/* main stats */}
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Str:</label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Strength"
              name="strength"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Dex:</label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Dexterity"
              name="dexterity"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Con:</label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Constitution"
              name="constitution"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Int:</label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Intelligence"
              name="intelligence"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Wis:</label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Wisdom"
              name="wisdom"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Char:</label>
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Charisma"
              name="charisma"
              onChange={handleInputChange}
            />
          </div>
          <button
            className="btn btn-block btn-primary"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Create
          </button>
        </form>
      ) : (
        <p>
          You need to be logged to see or create character. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};
export default CharForm;
