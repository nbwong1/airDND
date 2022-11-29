import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_CHARACTER } from "../../utils/mutations";
// import { QUERY_CHARACTER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
// import {useForm} from "react-hook-form"

const CharForm = () => {

  // const {
  //   register,
  //   watch,
  //   reset,
  //   handleSubmit,
  //   formState: { errors,  isSubmitting, isValid } 
  // } = useForm();
  // const onSubmit = data => console.log(data);

  const [charFormData, setcharFormData] = useState({
    name: "",
    level: 0,
    race: "",
    charClass: "",
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
  const [addCharForm, { error }] = useMutation(ADD_CHARACTER);

  if (error) throw error;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setcharFormData({ ...charFormData, [name]: parseInt(value) || value });
    console.log(charFormData);
  };

 const handleFormSubmit = async (event) => {
    // event.preventDefault();
    // handleSubmit(onSubmit);
    try {
        addCharForm({
        variables: {
          ...charFormData,
        },
        
      });
\
      // console.log(data);
      console.log( "line 73" + charFormData);
      
    } catch (err) {
      console.error(err);
    }
    setcharFormData({
        name: "",
        level: 0,
        race: "",
        charClass: "",
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

  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name: </label>
            <input
              type="text"
              // value={charFormData.name}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Character Name"
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Level: </label>
            <input
              type="number"
              //  value={charFormData.level}
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Level"
              name="level"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Race: </label>
            <input
              type="text"
              // style={
              //    {...register('race', {
              //   required: true,
              //   pattern: {value: /[A-Za-z]/},
              // })}
              // }
              
              //  value={charFormData.race}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Race"
              name="race"
              onChange={handleInputChange}
            />
             {/* {errors.race?.type === 'required' && (<p>must be letters only</p>)} */}
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Class: </label>
            <input
              type="list"
              list="classes"
              //  value={charFormData.charClass}
              className="form-control"
              id="className"
              placeholder="Class"
              name="charClass"
              onChange={handleInputChange}
            />
            <datalist id="classes">
              <option value="barbarian" />
              <option value="bard" />
              <option value="cleric" />
              <option value="druid" />
              <option value="fighter" />
              <option value="monk" />   
              <option value="paladin" />   
              <option value="ranger" />   
              <option value="rogue" />  
              <option value="sorcerer" />  
              <option value="warlock" />  
              <option value="wizard" />  
              <option value="artificer" />  
          </datalist>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Alignment: </label>
            <input
              type="text"
              //  value={charFormData.alignment}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Alignment"
              name="alignment"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">XP: </label>
            <input
              type="number"
              //  value={charFormData.experience}
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Experience"
              name="experience"
              onChange={handleInputChange}
            />
          </div>
          {/* main stats */}
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Strength: </label>
            <input
              type="number"
              //  value={charFormData.strength}
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Strength"
              name="strength"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Dexterity: </label>
            <input
              type="number"
              //  value={charFormData.dexterity}
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Dexterity"
              name="dexterity"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Constitution: </label>
            <input
              type="number"
              //  value={charFormData.constitution}
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Constitution"
              name="constitution"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Intelligence: </label>
            <input
              type="number"
              //  value={charFormData.intelligence}
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Intelligence"
              name="intelligence"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Wisdom: </label>
            <input
              // type="number"
              //  value={charFormData.wisdom}
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Wisdom"
              name="wisdom"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Charisma: </label>
            <input
              type="number"
               placeholder="Charisma"
              //  value={charFormData.charisma}
              className="form-control"
              id="formGroupExampleInput2"
              name="charisma"
              onChange={handleInputChange}
            />
          </div>
          <button
          //  disabled={!isValid} 
            className="btn btn-block btn-primary"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Create Character
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
