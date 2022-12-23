import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./Student.css";

const Student = ({ id, name, email, isPresent, onUpdate }) => {
  const nameColor = isPresent ? "green" : "red";

  const onAttendanceButtonClick = () => {
    const updatedStudent = {
      id: id,
      nameData: name,
      emailData: email,
      isPresentData: !isPresent,
    };
    onUpdate(updatedStudent);
  };

  return (
    <div>
      <ul>
        <li className={nameColor}>Nickname: {name} </li>
        <li>Email: {email} </li>
      </ul>
      <button onClick={onAttendanceButtonClick}>
        {" "}
        Toggle if {name} is present
      </button>
    </div>
  );
};

Student.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};

export default Student;
