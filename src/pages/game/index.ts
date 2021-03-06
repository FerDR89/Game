import { state } from "../../state";
export function initGamePage(params) {
  const gamePage = document.createElement("section");
  gamePage.className = "game";
  gamePage.innerHTML = `
  <div class="game__container">
    <div class="game__computer-container"></div>
    <div class="game__countdown-container">
      <custom-countdown count="3"></custom-countdown>
    </div>
    <div class="game__hands-container">
      <hands-el class="opacity-hands" tag="scissors" width="90px" height="200px"></hands-el>
      <hands-el class="opacity-hands" tag="stone" width="90px" height="200px"></hands-el>
      <hands-el class="opacity-hands" tag="paper" width="90px" height="200px"></hands-el>
    </div>
  </div>
  `;
  const style = document.createElement("style");
  style.innerHTML = `
  .game{
    max-width:375px;
    height:100vh;
  }
  @media(min-width:376px){
  .game{
    max-width:100%;
    height:100vh;
  }
}
  .game__container{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
  }
  .game__container--justify{
    justify-content:space-around;
  }

  .game__countdown-container{
    margin-top:20px;
  }
  .game__hands-container{
    width:375px;
    height:200px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    position:absolute;
    bottom:0px;
  }
  .opacity-hands{
    opacity:0.7;
  }
  .move{
    transform:translateY(-30px) scaleY(1.3);
    opacity:1;
  }
  .animation{
    transform: translateY(-50px) scaleY(1.5);
    position:absolute;
    bottom:0px;
    left:150px; 
  }  
  .game__computer-container{
    width:375px;
    position:absolute;
    top:0;
  }
  .computer-hand{
    transform:rotateX(180deg) scaleY(1.5) translateY(-30px);
    position:absolute;
    left:150px; 
  }
  .game__container-return-title{
    max-width:300px;
  }

  `;
  gamePage.appendChild(style);

  (function selectMove() {
    const containerHands = gamePage.querySelector(".game__hands-container");
    const handsEls = gamePage.querySelectorAll("hands-el");
    for (const hand of handsEls) {
      hand.addEventListener("change", (e: any) => {
        computerMove();
        state.setUserMove(e.detail.myPlay);
        hand.classList.add("move");
        setTimeout(() => {
          containerHands.innerHTML = `
          <hands-el class="animation" tag="${e.detail.myPlay}" width="90px" height="200px"></hands-el>
          `;
          goToResults();
        }, 3500);
      });
      state.resetMyPlay();
    }
  })();

  function computerMove() {
    const computerMove = Math.floor(Math.random() * (3 - 0) + 0);
    const computerContainer = gamePage.querySelector(
      ".game__computer-container"
    );
    if (computerMove == 0) {
      state.setComputerMove("scissors");
      setTimeout(() => {
        computerContainer.innerHTML = `
        <hands-el class="computer-hand" tag="scissors" width="90px" height="200px"></hands-el>
        `;
      }, 3500);
    }
    if (computerMove == 1) {
      state.setComputerMove("stone");
      setTimeout(() => {
        computerContainer.innerHTML = `
          <hands-el class="computer-hand" tag="stone" width="90px" height="200px"></hands-el>
          `;
      }, 3500);
    }
    if (computerMove == 2) {
      state.setComputerMove("paper");
      setTimeout(() => {
        computerContainer.innerHTML = `
          <hands-el class="computer-hand" tag="paper" width="90px" height="200px"></hands-el>
          `;
      }, 3500);
    }
  }

  function goToResults() {
    setTimeout(() => {
      params.goTo("/results");
    }, 1500);
  }

  (function returnRules() {
    setTimeout(() => {
      const currentState = state.getState();
      const myPlay = currentState.currentGame.myPlay;
      const gameContainer = gamePage.querySelector(".game__container");
      if (myPlay == "") {
        gameContainer.classList.add("game__container--justify");
        gameContainer.innerHTML = `
        <div class="game__container-return-title">
            <custom-text class="text" tag="h1" size="80px">Por favor vuelva a comenzar y seleccione una opci??n</custom-text>
        </div>
            <custom-button class="button">Volver a empezar</custom-button>

        `;
        const btn = gameContainer.querySelector(".button");
        const text = gameContainer.querySelector(".text").shadowRoot;
        const el = text.querySelector(".title") as any;
        el.style.textAlign = "center";
        btn.addEventListener("clickedButton", () => {
          params.goTo("/rules");
        });
      }
    }, 4000);
  })();

  return gamePage;
}
