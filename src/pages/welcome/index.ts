export function initWelcomePage(params) {
  const welcomePage = document.createElement("section");
  welcomePage.className = "welcome";
  welcomePage.innerHTML = `
  <div class="welcome__container">
    <div class="welcome__container-title">
        <custom-text tag="h1" size="80px">Piedra, Papel, ó Tijera</custom-text>
    </div>
    <div class="welcome__container-btn">
        <custom-button class="button">Empezar</custom-button>
    </div>
    <div class="welcome__container-hands">
        <hands-el tag="scissors" width="65px" height="125px"></hands-el>
        <hands-el tag="stone" width="65px" height="125px"></hands-el>
        <hands-el tag="paper" width="65px" height="125px"></hands-el>
    </div>
  </div>
  `;
  const style = document.createElement("style");
  style.innerHTML = `
  .welcome__container{
    width:100%;
    height:100vh;
    padding:100px 26px 0px 26px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
}
@media(min-width:376px){
  .welcome__container{
    width:100%;
    height:100vh;
    padding:40px 26px 0px 26px;
}}

.welcome__container-title{
  width:284px;
  height:280px;
}

  .welcome__container-btn{
    width:322px;
    height:87px;
  }
  .welcome__container-hands{
    width:273px;
    height:130px;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  `;
  welcomePage.appendChild(style);
  const btn = welcomePage.querySelector(".button");
  btn.addEventListener("clickedButton", () => {
    params.goTo("/rules");
  });

  return welcomePage;
}
