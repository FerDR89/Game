type Jugada = "stone" | "paper" | "scissors";
const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerGame: "",
    },
    history: [{}],
  },
  listeners: [],

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback(newState);
    }
  },

  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  setComputerMove(move: Jugada) {
    const currentState = this.getState();
    console.log(currentState);
    currentState.currentGame.computerGame = move;
  },

  setUserMove(move: Jugada) {
    const currentState = this.getState();
    console.log(currentState);
    currentState.currentGame.myPlay = move;
    this.pushToHistory(currentState);
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

  pushToHistory(currentState) {
    currentState.history.push(currentState.currentGame);
    localStorage.setItem("saved-state", JSON.stringify(currentState));
    console.log(currentState.history);
  },

  resetMyPlay() {
    const currentState = this.getState();
    currentState.currentGame.myPlay = "";
  },
};

export { state };
