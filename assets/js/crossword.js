const { CrosswordDefinition } = crosswordDefinition;

let definition = new CrosswordDefinition({
  height: 8, //height of the board, 8 cells
  width: 8, //width of the board, 5 cells
  acrossClues: [
    {
      number: 1, //number to identify the world, must be unique
      x: 1, //The x position where the word starts, starting from 1
      y: 4, //The y position where the word starts, starting from 1
      answer: "POPART", //the word itself
      clue: " First name of the Spanish artist known for 'Las Meninas'.", //the clue
      // hints: [2],
    },
    {
      number: 2, //number to identify the world, must be unique
      x: 4, //The x position where the word starts, starting from 1
      y: 1, //The y position where the word starts, starting from 1
      answer: "DIEGO", //the word itself
      clue: "Art movement/style championed by Andy Warhol.", //the clue
      /*hints: [2],*/
    },
    {
      number: 3,
      x: 1,
      y: 7,
      answer: "VERMEER",
      clue: "17th century Dutch painter,  known for his luminous depiction of everyday life and ordinary subjects.",
      /* hints: [2, 7] */
    }
  ],
  downClues: [
    {
      number: 4,
      x: 2,
      y: 1,
      answer: "BAROQUE",
      clue: "Art and architectural style characterized by grandeur and exquisite detailing, originated in 17th century Europe.",
      /* hints: [2, 7] */
    },
    {
      number: 2,
      x: 4,
      y: 1,
      answer: "DADA",
      clue: "Characterized by artistic anarchy and humour, Man Ray and Marcel Duchamp were associated with this movement.",
      /* hints: [2, 7] */
    },
    {
      number: 5,
      x: 6,
      y: 4,
      answer: "TATE",
      clue: "Painted the ceiling of the Opéra Garnier in Paris",
      /* hints: [2, 7] */
    },
    {
      number: 6,
      x: 8,
      y: 1,
      answer: "OPART",
      clue: "Victor Vasarely and Bridget Riley were associated with this art style which uses optical illusions and abstract patterns.",
      /* hints: [2, 7] */
    }
  ],
});
$(".crossword").crossword({
  definition: definition,
});
