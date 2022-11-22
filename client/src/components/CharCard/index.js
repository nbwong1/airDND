import React, { useState } from "react";
import "./index.css";

const CharCard = () => {
  return (
    <div>
      <div className="wizard">
        <div className=" textBox">
          <div>
            <h4 className="classT">class</h4>
            <p>name:</p>
            <p>lvl.</p>
            <p>race</p>
            <p>alignment</p>
            <p>experience</p>
          </div>
        </div>
      </div>

      <div className="statbox">
        <div className="statLine">
          <p className="statText">STR:</p>
          <p className="statText">DEX:</p>
          <p className="statText">CON:</p>
        </div>
        <div className="statLine">
          <p className="statText">INT:</p>
          <p className="statText">WIS:</p>
          <p className="statText">CHA:</p>
        </div>
      </div>
    </div>
  );
};

export default CharCard;
