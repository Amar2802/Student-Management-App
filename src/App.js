import React, { useState } from "react";
import StudentForm from "./components/StudentForm";

function App() {
  const [amarStudentRegistry, setAmarStudentRegistry] = useState([]);
  const [amarButtonTapTotal, setAmarButtonTapTotal] = useState(0);
  const [amarIsSavingRecord, setAmarIsSavingRecord] = useState(false);

  const simulateEnrollmentDesk = (freshStudentProfile) => {
    setAmarIsSavingRecord(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          `Amar enrollment desk accepted ${freshStudentProfile.name} for review.`
        );
        resolve(freshStudentProfile);
        setAmarIsSavingRecord(false);
      }, 1000);
    });
  };

  const registerLearner = async (incomingLearnerProfile) => {
    if (incomingLearnerProfile.age < 18) {
      alert(
        "Enrollment blocked: Amar's policy needs learners to be 18 or older."
      );
      return;
    }

    const verifiedEnrollmentCard = await simulateEnrollmentDesk(
      incomingLearnerProfile
    );

    setAmarStudentRegistry((previousRegistry) => [
      ...previousRegistry,
      verifiedEnrollmentCard,
    ]);
  };

  const amarEligibleLearners = amarStudentRegistry.filter(
    (registeredLearner) => registeredLearner.age > 18
  );

  return (
    <div>
      <h1>Student Management System</h1>

      <button onClick={() => setAmarButtonTapTotal(amarButtonTapTotal + 1)}>
        {"Click Count: " + amarButtonTapTotal}
      </button>

      {amarIsSavingRecord && (
        <p>{`Loading... Amar is saving a student record.`}</p>
      )}

      <StudentForm onAdd={registerLearner} />

      <h2>Student List</h2>

      {amarEligibleLearners.map((campusLearner, learnerPosition) => (
        <div key={learnerPosition}>
          <p>{`Name: ${campusLearner.name}`}</p>
          <p>{"Age: " + campusLearner.age}</p>
          <p>{`Course: ${campusLearner.course}`}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
