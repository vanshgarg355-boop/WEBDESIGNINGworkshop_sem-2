import React, { useState } from "react";
import "./index.css";

function App() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Student Registered Successfully");

    console.log(student);

    setStudent({
      name: "",
      email: "",
    });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Student Registration Form</h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;