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

  getData() {
    const localData = localStorage.getItem("save-move");
    const localDataParse = JSON.parse(localData);
    if (localDataParse == null) {
      const currentState = this.getState();
      this.setState(currentState);
    } else {
      this.setState(localDataParse);
    }
  },

  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback(newState);
    }
    localStorage.setItem("save-move", JSON.stringify(newState));
  },

  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  setComputerMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.computerGame = move;
  },

  setUserMove(move: Jugada) {
    const currentState = this.getState();
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
    const myPlay = currentState.currentGame.myPlay;
    const computerGame = currentState.currentGame.computerGame;
    currentState.history.push({
      myPlay: myPlay,
      computerGame: computerGame,
    });
    this.setState(currentState);
  },

  resetMyPlay() {
    const currentState = this.getState();
    currentState.currentGame.myPlay = "";
  },
};

export { state };
