# Pokedex
## Pokemon API + Pokedex APP

### How to start
1. Clone repository
2. Install backend and frontend dependencies `npm install`
3. cd into the backend folder and run `npm run start`
4. cd into the frontend folder and run `npm run dev`
5. Visit http://localhost:3001 in your browser

### How to use
At startup, a random Pokémon is selected. Use the arrow keys at the bottom of the application or the arrow keys on your keyboard to move to the next Pokémon. In the upper part of the application you can enter a Pokémon name. A list of results will appear below the search field. There you can select a Pokémon by clicking on it.

### Motivation of this project
The motivation behind this project was to create a custom API using express.js. So I went to the Pokémon Wikipedia page and got the list of all Pokémon. Using this list I went through each Pokémon and scraped the information I needed from the pokewiki.de page. I then saved this information into a sqlite database using a Sequelize.js seeder. The controllers of each API route also use Sequelize to read the information from the database. The following routes were created:
- GET /pokemon | This route returns all Pokemon
- GET /pokemon/:nameOrNumber | Returns a Pokemon by name or Pokemon number
- GET /random | Returns a random Pokemon

I created the frontend using Vue 3 and Tailwind. As a little gimmick I added a sound effect that plays when my Pokémon changes.
