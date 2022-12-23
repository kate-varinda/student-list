import React from "react";

const ClassInfo = (props) => {
  const memberCount = props.memberCount;

  return (
    <section>
      <h2>Class Information</h2>
      <ul>
        <li>Name: Team Semicolons</li>
        <li>Number of members: {memberCount}</li>
      </ul>
    </section>
  );
};

export default ClassInfo;
