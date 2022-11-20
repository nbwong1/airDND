import { React, useState } from "react";

const CharForm = () => {
  const [charFormData, setcharFormData] = useState({
    name: "",
    level: "",
    race: "",
    background: "",
    alignment: "",
    experience: "",
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
            placeholder="Example input"
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
            placeholder="Another input"
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
            placeholder="Example input"
            name="race"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">BACKGROUND</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            name="background"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">ALIGNMENT</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
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
            placeholder="Another input"
            name="experience"
            onChange={handleInputChange}
          />
        </div>
        <button
          className="btn btn-block btn-primary"
          style={{ cursor: "pointer" }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default CharForm;
