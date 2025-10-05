import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Use environment-based API URL
const API_URL = process.env.NODE_ENV === 'production' 
  ? "/api/students" 
  : "http://localhost:5000/api/students";

export const fetchStudents = createAsyncThunk("students/fetch", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addStudent = createAsyncThunk("students/add", async (student) => {
  const res = await axios.post(API_URL, student);
  return res.data;
});

export const deleteStudent = createAsyncThunk("students/delete", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const studentSlice = createSlice({
  name: "students",
  initialState: { list: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.fulfilled, (state, action) => { state.list = action.payload; })
      .addCase(addStudent.fulfilled, (state, action) => { state.list.push(action.payload); })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.list = state.list.filter((s) => s._id !== action.payload);
      });
  }
});

export default studentSlice.reducer;
