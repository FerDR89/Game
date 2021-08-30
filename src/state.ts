type Jugada = "stone" | "paper" | "scissors";
const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerGame: "",
    },
    history: [{}],
  },

  init() {
    const localData = localStorage.getItem("saved-state");
    this.setState(JSON.parse(localData));
  },

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    this.pushToHistory();
  },

  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  setUserMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    console.log("User move", currentState);
    this.setState(currentState);
  },

  setComputerMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.computerGame = move;
    console.log("Computer move", currentState);
    this.setState(currentState);
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

  pushToHistory() {
    const currentState = this.getState();
    currentState.history.push(currentState.currentGame);
    localStorage.setItem("saved-state", JSON.stringify(currentState.history));
  },

  resetMyPlay() {
    const currentState = this.getState();
    currentState.currentGame.myPlay = "";
  },
};

export { state };
