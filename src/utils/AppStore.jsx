import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import movieReducer from "./MoviesSlice";
import gptReducer from "./GPTslice";

const AppStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptReducer,
    },
});

export default AppStore;