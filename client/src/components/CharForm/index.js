import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
 
import { ADD_CHARACTER } from "../../utils/mutations";
// import { QUERY_CHARACTER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import { useForm } from "react-hook-form"
 
const CharForm = () => {
 
 const {
   register,
   watch,
   reset,
   handleSubmit,
   setError,
   formState: { errors, isSubmitting, isValid, isDirty }
 } = useForm({
   // defaultValues: {
   //   name: "",
   //   level: 0,
   //   race: "",
   //   charClass: "",
   //   alignment: "",
   //   experience: 0,
   //   // stats
   //   strength: 0,
   //   dexterity: 0,
   //   constitution: 0,
   //   intelligence: 0,
   //   wisdom: 0,
   //   charisma: 0,
   // },
   mode: "onChange"
 });
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
 
     // console.log(data);
     console.log("line 73" + charFormData);
 
   } catch (err) {
     console.error(err);
   }
   setcharFormData({
     ...charFormData
   });
 
 };
 
 
 
 const checkV = function () {
   if (errors) {
     return true
   }
   return false
 }
 return (
   <div>
     {Auth.loggedIn() ? (
       <form onSubmit={handleFormSubmit}>
         <div className="form-group">
           <label htmlFor="formGroupExampleInput">Name: </label>
           <input
             // type="text"
             // value={charFormData.name}
             {...register('name', {
               required: true,
             })}
             className="form-control"
             id="formGroupExampleInput"
             placeholder="Character Name"
             name="name"
             onChange={handleInputChange}
           />
           {errors.name?.type === "required" && (<p className="errorText">name is required</p>)}
         </div>
         <div className="form-group">
           <label htmlFor="formGroupExampleInput2">Level: </label>
           <input
             // type="number"
             //  value={charFormData.level}
             {...register('level', {
               required: true,
               pattern: { value: /^[0-9]*$/ },
             })}
             className="form-control"
             id="formGroupExampleInput2"
             placeholder="Level"
             name="level"
             onChange={handleInputChange}
           />
           {errors.level?.type === "required" && (<p className="errorText">level is required</p>)}
           {/* {errors.level?.type === "pattern" && (<p className="errorText">only numbers are allowed</p>)} */}
         </div>
         <div className="form-group">
           <label htmlFor="formGroupExampleInput">Race: </label>
           <input
 
             // type="text"
             // style={
             //    {...register('race', {
             //   required: true,
             //   pattern: {value: /[A-Za-z]/},
             // })}
             // }
            
 
             //  value={charFormData.race}
             {...register('race', {
               required: true,
             })}
             className="form-control"
             id="formGroupExampleInput"
             placeholder="Race"
             name="race"
             onChange={handleInputChange}
           />
           {errors.race?.type === "required" && (<p className="errorText">race is required</p>)}
         </div>
         <div className="form-group">
           <label htmlFor="formGroupExampleInput">Class: </label>
           <input
             type="list"
             {...register('class', {
               required: true,
             })}
             list="classes"
             //  value={charFormData.charClass}
             className="form-control"
             id="className"
             placeholder="Class"
             name="charClass"
             onChange={handleInputChange}
           />
           {errors.race?.type === "required" && (<p className="errorText">race is required</p>)}
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
 
            //  type="text"
             {...register('alignment', {
               required: true,
             })}
 
             //  value={charFormData.alignment}
             className="form-control"
             id="formGroupExampleInput"
             placeholder="Alignment"
             name="alignment"
             onChange={handleInputChange}
           />
           {errors.alignment?.type === "required" && (<p className="errorText">alignment is required</p>)}
         </div>
         <div className="form-group">
           <label htmlFor="formGroupExampleInput2">XP: </label>
           <input
 
             type="number"
             {...register('experience', {
               required: true,
             })}
 
             //  value={charFormData.experience}
             className="form-control"
             id="formGroupExampleInput2"
             placeholder="Experience"
             name="experience"
             onChange={handleInputChange}
           />
           {errors.experience?.type === "required" && (<p className="errorText">experience is required</p>)}
         </div>
         {/* main stats */}
         <div className="form-group">
           <label htmlFor="formGroupExampleInput2">Strength: </label>
           <input
 
             type="number"
             {...register('strength', {
               required: true,
             })}
 
             //  value={charFormData.strength}
             className="form-control"
             id="formGroupExampleInput2"
             placeholder="Strength"
             name="strength"
             onChange={handleInputChange}
           />
           {errors.strength?.type === "required" && (<p className="errorText">strength is required</p>)}
         </div>
         <div className="form-group">
           <label htmlFor="formGroupExampleInput2">Dexterity: </label>
           <input
 
             type="number"
             {...register('dexterity', {
               required: true,
             })}
 
             //  value={charFormData.dexterity}
             className="form-control"
             id="formGroupExampleInput2"
             placeholder="Dexterity"
             name="dexterity"
             onChange={handleInputChange}
           />
           {errors.dexterity?.type === "required" && (<p className="errorText">dexterity is required</p>)}
         </div>
         <div className="form-group">
           <label htmlFor="formGroupExampleInput2">Constitution: </label>
           <input
 
             type="number"
             {...register('constitution', {
               required: true,
             })}
 
             //  value={charFormData.constitution}
             className="form-control"
             id="formGroupExampleInput2"
             placeholder="Constitution"
             name="constitution"
             onChange={handleInputChange}
           />
           {errors.constitution?.type === "required" && (<p className="errorText">constitution is required</p>)}
         </div>
         <div className="form-group">
           <label htmlFor="formGroupExampleInput2">Intelligence: </label>
           <input
 
             type="number"
             {...register('intelligence', {
               required: true,
             })}
 
             //  value={charFormData.intelligence}
             className="form-control"
             id="formGroupExampleInput2"
             placeholder="Intelligence"
             name="intelligence"
             onChange={handleInputChange}
           />
           {errors.intelligence?.type === "required" && (<p className="errorText">intelligence is required</p>)}
         </div>
         <div className="form-group">
           <label htmlFor="formGroupExampleInput2">Wisdom: </label>
           <input
             type="number"
             //  value={charFormData.wisdom}
             {...register('wisdom', {
               required: true,
             })}
             className="form-control"
             id="formGroupExampleInput2"
             placeholder="Wisdom"
             name="wisdom"
             onChange={handleInputChange}
           />
           {errors.wisdom?.type === "required" && (<p className="errorText">wisdom is required</p>)}
         </div>
         <div className="form-group">
           <label htmlFor="formGroupExampleInput2">Charisma: </label>
           <input
 
             type="number"
             {...register('charisma', {
               required: true,
             })}
             placeholder="Charisma"
 
             //  value={charFormData.charisma}
             className="form-control"
             id="formGroupExampleInput2"
             name="charisma"
             onChange={handleInputChange}
           />
           {errors.charisma?.type === "required" && (<p className="errorText">charisma is required</p>)}
         </div>
 
         <button
 
           //  disabled={!isValid}
           onClick={() => setError('charisma', {
             types: {
               test1: "test"
             }
           })}
           disabled={
             !isDirty && !isValid
           }
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
     )
     }
   </div >
 );
};
export default CharForm;
