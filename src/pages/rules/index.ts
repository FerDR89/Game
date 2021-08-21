export function initRulesPage(params) {
  const rulesPage = document.createElement("section");
  rulesPage.className = "rules";
  rulesPage.innerHTML = `
    <div class="rules__container">
        <div class="rules__container-text">
            <custom-text tag="h3" size="47px">
            Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
            </custom-text>
        </div>
        <div class="rules__container-btn">
            <custom-button class="button">¡Jugar!</custom-button>
        </div>
        <div class="rules__container-hands">
            <hands-el tag="scissors" width="65px" height="125px"></hands-el>
            <hands-el tag="stone" width="65px" height="125px"></hands-el>
            <hands-el tag="paper" width="65px" height="125px"></hands-el>
        </div>
    </div>
    `;
  const style = document.createElement("style");
  style.innerHTML = `
  .rules__container{
    width:100%;
    height:100vh;
    padding:130px 26px 0px 26px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
}
  .rules__container-title{
    width:284px;
    height:225px;
  }
  .rules__letter-color-variant{
    color:var(--title-letter-color);
  }
  .rules__container-btn{
    width:322px;
    height:87px;
  }
  .rules__container-hands{
    width:273px;
    height:130px;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  `;
  rulesPage.appendChild(style);
  const btn = rulesPage.querySelector(".button");
  btn.addEventListener("clickedButton", () => {
    params.goTo("/game");
  });

  return rulesPage;
}
