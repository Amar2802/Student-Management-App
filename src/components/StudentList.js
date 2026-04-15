import React from "react";

function StudentList({ students }) {
  if (students.length === 0) {
    return <p>No eligible students added yet.</p>;
  }

  return (
    <div>
      {students.map((campusLearner, learnerPosition) => (
        <div key={learnerPosition}>
          <p>{`Name: ${campusLearner.name}`}</p>
          <p>{`Age: ${campusLearner.age}`}</p>
          <p>{`Course: ${campusLearner.course}`}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default StudentList;
