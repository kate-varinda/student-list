import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
import { useState } from "react";
import NewStudentForm from "./components/NewStudentForm";

function App() {
  const INITIAL_DATA = [
    {
      id: 1,
      nameData: "Ada",
      emailData: "ada@dev.org",
      isPresentData: false,
    },
    {
      id: 2,
      nameData: "Soo-ah",
      emailData: "sooah@dev.org",
      isPresentData: false,
    },
    {
      id: 3,
      nameData: "Chrissy",
      emailData: "chrissy@dev.org",
      isPresentData: true,
    },
  ];

  const [studentData, setStudentData] = useState(INITIAL_DATA);

  const updateStudentData = (updatedStudent) => {
    const students = studentData.map((student) => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    });
    setStudentData(students);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <h2>Student List</h2>
      <ClassInfo memberCount={studentData.length} />
      <StudentList students={studentData} onUpdateStudent={updateStudentData} />
      <NewStudentForm />
    </main>
  );
}

export default App;
