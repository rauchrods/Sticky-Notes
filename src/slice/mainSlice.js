import { createSlice } from "@reduxjs/toolkit";
import { colors } from "../assets/constant/colors";
import { notesData } from "../assets/notesData";

const initialState = JSON.parse(localStorage.getItem("savedNotes")) || {
  notes: notesData,
  activeColor: colors[0],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addNotes: (state, action) => {
      localStorage.setItem(
        "savedNotes",
        JSON.stringify({
          notes: [...state.notes, action.payload],
          activeColor: state.activeColor,
        })
      );
      state.notes = [...state.notes, action.payload];
    },
    deleteNote: (state, action) => {
      let updatedNotes = state.notes.filter((note) => {
        return note.$id !== action.payload.$id;
      });
      updatedNotes = updatedNotes.map((note, index) => ({
        ...note,
        $id: index + 1,
      }));

      localStorage.setItem(
        "savedNotes",
        JSON.stringify({ notes: updatedNotes, activeColor: state.activeColor })
      );
      state.notes = updatedNotes;
    },
    updateNote: (state, action) => {
      state.notes[action.payload.$id - 1] = {
        ...action.payload,
      };
      localStorage.setItem(
        "savedNotes",
        JSON.stringify({ notes: state.notes, activeColor: state.activeColor })
      );
    },
    changeActiveColor: (state, action) => {
      localStorage.setItem(
        "savedNotes",
        JSON.stringify({ notes: state.notes, activeColor: action.payload })
      );
      state.activeColor = action.payload;
    },
  },
});

export const { addNotes, changeActiveColor, deleteNote, updateNote } =
  mainSlice.actions;

export default mainSlice.reducer;
