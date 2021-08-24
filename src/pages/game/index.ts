import { state } from "../../state";
export function initGamePage(params) {
  const gamePage = document.createElement("section");
  gamePage.className = "game";
  gamePage.innerHTML = `
  <div class="game__container">
    <div class="game__countdown-container">
      <custom-countdown count="3"></custom-countdown>
    </div>
    <div class="game__hands-container">
      <hands-el tag="scissors" width="90px" height="200px"></hands-el>
      <hands-el tag="stone" width="90px" height="200px"></hands-el>
      <hands-el tag="paper" width="90px" height="200px"></hands-el>
    </div>
  </div>
  `;
  const style = document.createElement("style");
  style.innerHTML = `
  .game__container{
    width:100%;
    height:100vh;
    padding-top:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
}
.game__hands-container{
  width:100%;
  height:200px;
  display:flex;
  align-items:center;
  justify-content:space-around;
  position:absolute;
  bottom:0px;
  
}
  `;
  gamePage.appendChild(style);
  return gamePage;
}
