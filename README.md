This is the frontend for my [NYT Spelling Bee](https://www.nytimes.com/puzzles/spelling-bee) solver! All of the frontend code is stored in the `spelling-bee-react` folder. Most of the other code in the home directory is deprecated, it was originally the Spelling Bee Solver that I built for the command line. 

#### Usage
Enter the letters of the Spelling Bee in the hexagons just like in the actual game. Clicking "Submit" will display a grid of all words in `NSWL2023.txt` that match the pattern. This dictionary comes from the official Scrabble word reference, but even though it is robust it does not perfectly match the NYT accepted word list. 

#### Running
In the project directory, you can run `npm start` to run the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
For it to function you will also need to run [the backend server](https://github.com/robieli/spelling-bee-backend).

#### Roadmap
- Host the project on a dedicated server.
- Flesh out backend to dynamically remove words from the dictionary when they are not accepted by the NYT.
- Construct Chrome Extension that replicates the structure of this site.
