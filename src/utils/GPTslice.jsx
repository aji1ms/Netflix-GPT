import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});

export const { toggleSearchView, addGptMovieResults } = GPTslice.actions;

export default GPTslice.reducer;