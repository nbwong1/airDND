import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_THOUGHT } from "../../utils/mutations";
import { QUERY_THOUGHTS, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";

const CharForm = () => {
  const [charFormData, setcharFormData] = useState({
    name: "",
    level: 0,
    race: "",
    class: "",
    alignment: "",
    experience: 0,
    class: "",
    // stats
    strenght: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setcharFormData({ ...charFormData, [name]: value });
  };

  return (
    <div>
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Name:</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Character Name"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">LEVEL:</label>
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Level"
            name="level"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">RACE:</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Race"
            name="race"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Class:</label>
          <input
            type="list"
            class="form-control"
            id="class"
            placeholder="Class"
            name="class"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">ALIGNMENT:</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Alignment"
            name="alignment"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">EXP:</label>
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Experience"
            name="experience"
            onChange={handleInputChange}
          />
        </div>
        {/* main stats */}
        <div class="form-group">
          <label for="formGroupExampleInput2">Str:</label>
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Strenght"
            name="strength"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Dex:</label>
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Dexterity"
            name="dexterity"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Con:</label>
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Constitution"
            name="constitution"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Int:</label>
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Intelligence"
            name="intelligence"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Wis:</label>
          <input
            type="number"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Wisdom"
            name="wisdom"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Char:</label>
          <input
            type="number"
            class="form-control"
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
    </div>
  );
};
export default CharForm;
