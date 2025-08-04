import { addGptMovieResults } from "../utils/GPTslice";
import { OPTIONS } from '../utils/Constant';
import Cohere from "../utils/Openai";

const searchMovieTMDB = async (movie) => {
    const movies = await fetch(
        'https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', OPTIONS
    )
    const json = await movies.json();
    return json.results;
}

const gptSearchHelper = async (searchTextValue) => {

    const query = "Act as a Movie Recommendation System and suggest some movies for the query" + searchTextValue + ".only give me names of 5 movies, comma seperated like this example result given a head\. Example Rsults: Gadar,Sholay, Don, Golmaal, Koi Mil Gaya"
    let response;
    try {
        response = await Cohere.chat({
            model: 'command-a-03-2025',
            messages: [
                {
                    role: 'user',
                    content: query,
                },
            ],
        });
    } catch (err) {
        throw new Error("AI error: " + err.message);
    }

    const aiText = response?.message?.content?.[0]?.text;
    const gptResults = aiText?.split(",") || [];

    const promiseArray = gptResults.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    return { movieNames: gptResults, movieResults: tmdbResults };
}

export default gptSearchHelper;