const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// CREATE
router.post("/", async (req, res) => {
  try {
    console.log("Creating student:", req.body);
    const student = await Student.create(req.body);
    console.log("Student created:", student);
    res.status(201).json(student);
  } catch (err) {
    console.error("Error creating student:", err);
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    console.log("Fetching all students");
    const students = await Student.find();
    console.log("Students found:", students.length);
    res.json(students);
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    console.log("Updating student:", req.params.id, req.body);
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    console.log("Student updated:", student);
    res.json(student);
  } catch (err) {
    console.error("Error updating student:", err);
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    console.log("Deleting student:", req.params.id);
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    console.log("Student deleted:", student);
    res.json({ message: "Student deleted" });
  } catch (err) {
    console.error("Error deleting student:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
