import { state } from "../../state";
export function initResultsPage(params) {
  function resultGame() {
    const currentState = state.getState();
    const myPlay = currentState.currentGame.myPlay;
    const computerGame = currentState.currentGame.computerGame;
    return state.whoWins(myPlay, computerGame);
  }

  function selectBackGround() {
    const result = resultGame();
    let background = "";
    result == "Ganaste"
      ? (background = "#888949E5")
      : result == "Perdiste"
      ? (background = "#894949E5")
      : (background = "#F7B563");
    return background;
  }

  const background = selectBackGround();
  console.log(background);

  const result = resultGame();
  const myScore = state.getScore().counterWin;
  const computerScore = state.getScore().counterLose;

  const resultsPage = document.createElement("section");
  resultsPage.className = "results";
  resultsPage.innerHTML = `
  <div class="results__container">
    <div class="results__container-img">
    <star-el tag="${result}" width="260px" height="260px">${result}</star-el>
    </div>
    <div class="results__container-score">
        <div class="results__container-title">
            <custom-text size="55px">Score</custom-text>
        </div>
        <div class="results__container-results">
            <custom-text size="45px">Vos: ${myScore}</custom-text>
              <custom-text size="45px">Máquina:${computerScore}</custom-text>
        </div>
    </div>
    <div class="results__container-btn">
        <custom-button class="button">Volver a jugar</custom-button>
    </div>
  </div>
  `;
  const style = document.createElement("style");
  style.innerHTML = `
    .results__container{
        width:100%;
        height:100vh;
        padding:35px 20px;
        background-color: ${background};
        // background-color:${background};
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .results__container-img{
        width:255px;
        height:260px;
        margin-bottom:10px;
    }
    .results__container-score{
      width:259px;
      height:217px;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:space-evenly;
      margin-bottom:20px;
      border:10px solid #000;
      border-radius:10px;
      background-color: aliceblue;
    }

    .results__container-results{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  
    .results__container-btn{
      width:322px;
      height:87px;
    }
  `;
  resultsPage.appendChild(style);
  const btn = resultsPage.querySelector(".button");
  btn.addEventListener("clickedButton", () => {
    params.goTo("/rules");
  });

  return resultsPage;
}
