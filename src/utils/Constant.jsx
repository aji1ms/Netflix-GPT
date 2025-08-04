export const LOGO = "https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png";
export const ICON = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.webp";
export const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_KEY,
    }
};
export const POSTER_URL_PATH = "https://image.tmdb.org/t/p/w500";
export const BACKGROUND_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg";

export const GPT_KEY = import.meta.env.VITE_API_KEY; 