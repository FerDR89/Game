type Jugada = "piedra" | "papel" | "tijera";

const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerGame: "",
    },
    history: [{}],
  },
  getState() {
    return this.data;
  },
  setState(newState) {
    const currentState = this.getState();
  },
  setMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myplay;
  },
  whoWins() {},
};

export { state };
