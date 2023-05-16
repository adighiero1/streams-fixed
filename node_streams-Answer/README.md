# Exercise

## Part 1

- In VS Code, create and open a new folder named “node_streams”
- Create a streams.js file
- Import or require the fs module
- Create a server
- Write a conditional statement that checks the request url for a “GET” request on a “/”
- If the method and url match the previous check (step c), use createReadStream to pipe the contents of an html file to the client
- You can design the html file however you choose
- If the method and url are not “/” and “GET”, use the same method to pipe the contents of a 404 not found html page
- You should send the appropriate status code and headers
- Now run node app and test in postman or the browser

## Part 2

- In a new file, fetch data from a source of your choosing (e.g. [Pokemon](“https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json”))
- Use the createWriteStream method to create a write stream using an empty json file in your project
- Use the write method to populate the json file with the data from your fetch request

### HINT

- You will need to use a third-party fetch api (isomorphic-fetch, node-fetch, Axios, etc) to achieve this in Node
