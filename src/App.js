import React, { useState } from "react";
import StudentForm from "./components/StudentForm";

function App() {
  const [students, setStudents] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fake API using Promise
  const simulateApi = (student) => {
    setLoading(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(student);
        setLoading(false);
      }, 1000);
    });
  };

  // Add student
  const registerLearner = async (studentData) => {
    if (studentData.age < 18) {
      alert("Student must be above 18");
      return;
    }

    const response = await simulateApi(studentData);

    setStudents((prev) => [...prev, response]);
  };

  // Filter students (Age > 18)
  const filteredStudents = students.filter(
    (student) => student.age > 18
  );

  return (
    <div>
      <h1>🎓 Student Management System</h1>

      {/* Click Counter */}
      <button onClick={() => setClickCount(clickCount + 1)}>
        Click Count: {clickCount}
      </button>

      {loading && <p>Loading...</p>}

      <StudentForm onAdd={registerLearner} />

      <h2>Student List</h2>

      {filteredStudents.map((student, index) => (
        <div key={index}>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;