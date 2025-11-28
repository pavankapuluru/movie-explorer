# OMDB Movie Search App (TypeScript + Fetch API + Debounce)

A lightweight movie search application built using TypeScript, Fetch API, and OMDb API.
The app fetches movie results in real-time with a 500ms debounce to avoid unnecessary API calls.
Results are displayed as movie cards including the poster, title, and year.

✨ Features
1. Live Movie Search (Debounced)

Searches automatically when the user types.

Uses a 500ms debounce to optimize API calls.

Default movies load when no input is given.

 2. Fetch Movies from OMDb API

Uses real movie data.

Shows:

Poster

Title

Release Year

 3. Error Handling

If no movie is found, the UI shows:

No movies found

 4. Clean TypeScript Types

Includes interfaces:

Movie

OmdbResponse

 Tech Used

TypeScript

HTML / CSS

Fetch API

OMDB API

Debounce Logic

DOM Manipulation

🔑 API Key

This project uses:

https://www.omdbapi.com/

▶ How to Run
Clone the repository:


git clone https://github.com/pavankapuluru/movie-explorer
