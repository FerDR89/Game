type Jugada = "stone" | "paper" | "scissors";
const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerGame: "",
    },
    history: [],
  },
  listeners: [],

  init() {
    const localData = localStorage.getItem("saved-state");
    this.setState(JSON.parse(localData));
  },

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback(newState);
    }
    localStorage.setItem("saved-state", JSON.stringify(newState.history));
  },

  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  setComputerMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.computerGame = move;
    this.setState(currentState);
  },

  setUserMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    this.setState(currentState);
    this.pushToHistory(currentState.currentGame);
  },

  whoWins(myPlay: Jugada, computerGame: Jugada) {
    const iWontStone = myPlay == "stone" && computerGame == "scissors";
    const iWontPaper = myPlay == "paper" && computerGame == "stone";
    const iWontScissors = myPlay == "scissors" && computerGame == "paper";
    const iWont = [iWontPaper, iWontStone, iWontScissors].includes(true);

    const iLostStone = myPlay == "paper" && computerGame == "stone";
    const iLostPaper = myPlay == "scissors" && computerGame == "paper";
    const iLostScissors = myPlay == "stone" && computerGame == "scissors";
    const iLost = [iLostPaper, iLostScissors, iLostStone].includes(true);

    if (iWont) {
      return "win";
    } else if (iLost) {
      return "lose";
    } else {
      return "tie";
    }
  },

  pushToHistory(game) {
    const currentState = this.getState();
    currentState.history.push(game);
    this.setState(currentState);
  },

  resetMyPlay() {
    const currentState = this.getState();
    currentState.currentGame.myPlay = "";
  },
};

export { state };
