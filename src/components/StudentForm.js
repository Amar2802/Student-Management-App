import React, { useState } from "react";

function StudentForm({onAdd}) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.course) {
      alert("Please fill all fields");
      return;
    }
    onAdd({
        ...formData,
        age: Number(formData.age)
    });
    setFormData({
      name: "",
      age: "",
      course: "",
    });

    console.log(formData);
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={formData.course}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;