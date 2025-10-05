import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, addStudent, deleteStudent } from "./redux/studentSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students.list);
  const [form, setForm] = useState({ name: "", regNo: "", department: "", year: "" });

  useEffect(() => { dispatch(fetchStudents()); }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(form));
    setForm({ name: "", regNo: "", department: "", year: "" });
  };

  return (
    <Router>
      <div className="container">
        <h2>Student Record Management</h2>
        
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Full Name" 
            value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
            required 
          />
          <input 
            placeholder="Registration Number" 
            value={form.regNo} 
            onChange={(e) => setForm({ ...form, regNo: e.target.value })} 
            required 
          />
          <input 
            placeholder="Department" 
            value={form.department} 
            onChange={(e) => setForm({ ...form, department: e.target.value })} 
            required 
          />
          <input 
            placeholder="Year" 
            type="number" 
            min="1" 
            max="4" 
            value={form.year} 
            onChange={(e) => setForm({ ...form, year: e.target.value })} 
            required 
          />
          <button type="submit">Add Student</button>
        </form>

        <div className="table-container">
          {students.length === 0 ? (
            <div className="empty-state">
              <p>No students found. Add your first student above!</p>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Registration No</th>
                  <th>Department</th>
                  <th>Year</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.name}</td>
                    <td>{student.regNo}</td>
                    <td>{student.department}</td>
                    <td>{student.year}</td>
                    <td>
                      <button 
                        onClick={() => dispatch(deleteStudent(student._id))}
                        title="Delete Student"
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
