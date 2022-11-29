import React from "react";
import "./index.css";
// import { QUERY_CHARACTER, QUERY_ME } from "../../utils/queries";

const CharCard = ({name, level, race, charClass, alignment, experience, strength, dexterity, constitution, intelligence, wisdom, charisma, charFormD }) => {
  console.log("check 6" + charFormD);

    return (
    <div>
      <div className={charClass}>
        <div className=" textBox">
          <div>
            <h4 className="classT">{charClass}</h4>
            <p>name: {name}</p>
            <p>lvl. {level}</p>
            <p>race: {race}</p>
            <p>alignment:{alignment}</p>
            <p>experience: {experience}</p>
          </div>
        </div>
      </div>

      <div className="statbox">
        <div className="statLine">
          <p className="statText">STR:{strength}</p>
          <p className="statText">DEX:{dexterity}</p>
          <p className="statText">CON:{constitution}</p>
        </div>
        <div className="statLine">
          <p className="statText">INT:{intelligence}</p>
          <p className="statText">WIS:{wisdom}</p>
          <p className="statText">CHA:{charisma}</p>
        </div>
      </div>
    </div>
  );
};

export default CharCard;