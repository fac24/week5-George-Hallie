# week5-George-Hallie

## BADFLIX! https://really-bad-movie.netlify.app/

# Team members:

- [Hallie](https://github.com/vasystus)
- [George](https://github.com/Glombort)

---

## How to run in your local DEV environment
- clone the repo
- `cd` into really-bad-movies
- run `npm install`
- Get an api key from tmdb https://developers.themoviedb.org/3/getting-started/authentication
- Create a .env file with `VITE_APP_API_KEY = {YOURAPIKEY}`
- If you can't do this we can always lend you our key :)
- run `npm run dev` to start a server and view on the localhost

---
#### Can you guess the worst one?
![that one](https://media3.giphy.com/media/TKrjl5inUPYoU/200w.webp?cid=ecf05e47mamuzxcypjlp8vaoxbzcmbanrjgz3d31qnjjeswj&rid=200w.webp&ct=g)
---
# User Stories:
-  User should be able to isert username;
- Query an API (e.g. the Github API, or any other fun one);
- Populate the UI with API data;
- Have some form of persistent state and interactivity, e.g.
- A hunger bar that decreases over time and is topped up when you feed them stars;

![yep](https://media3.giphy.com/media/uBuzWfwVcadRC/200w.webp?cid=ecf05e47mamuzxcypjlp8vaoxbzcmbanrjgz3d31qnjjeswj&rid=200w.webp&ct=g)



## Core features:

- User selects between 2 films on which they think is the least popular
- Gets correct or incorrect
- Loses star if incorrect, or gains a point if correct
- After all lives lost the high score is saved to local storage if they surpassed their current high score
- Can restart the game
- Sees old high score when using the same username

