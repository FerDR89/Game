type Jugada = "stone" | "paper" | "scissors";
const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerGame: "",
    },
    history: [{}],
    listeners: [],
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
    for (const callback of this.listeners) {
      callback(newState);
    }
    localStorage.setItem("saved-state", JSON.stringify(newState));
  },

  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  setUserMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    this.setState(currentState);
  },

  setComputerMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.computerGame = move;
    this.setState(currentState);
  },

  whoWins() {},
};

export { state };
