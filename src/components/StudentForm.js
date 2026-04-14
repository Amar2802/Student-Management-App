import React, { useState } from "react";

function StudentForm({ onAdd }) {
  const [amarAdmissionDraft, setAmarAdmissionDraft] = useState({
    name: "",
    age: "",
    course: "",
  });

  const handleFieldRefresh = (event) => {
    const { name, value } = event.target;

    setAmarAdmissionDraft({
      ...amarAdmissionDraft,
      [name]: value,
    });
  };

  const handleAdmissionSubmit = (event) => {
    event.preventDefault();

    if (
      !amarAdmissionDraft.name ||
      !amarAdmissionDraft.age ||
      !amarAdmissionDraft.course
    ) {
      alert("Please fill all fields. Amar's form checker found something missing.");
      return;
    }

    const polishedStudentCard = {
      ...amarAdmissionDraft,
      age: Number(amarAdmissionDraft.age),
    };

    console.log(
      "Amar form tracker -> candidate: " + polishedStudentCard.name
    );

    onAdd({
      ...polishedStudentCard,
    });

    setAmarAdmissionDraft({
      name: "",
      age: "",
      course: "",
    });
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleAdmissionSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={amarAdmissionDraft.name}
          onChange={handleFieldRefresh}
        />

        <br />
        <br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={amarAdmissionDraft.age}
          onChange={handleFieldRefresh}
        />

        <br />
        <br />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={amarAdmissionDraft.course}
          onChange={handleFieldRefresh}
        />

        <br />
        <br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
