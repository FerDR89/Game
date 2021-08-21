import "../src/components/text";
import "../src/components/button";
import "../src/components/hands";
import { initWelcomePage } from "../src/pages/welcome";
import { initRouter } from "../src/router";

(function main() {
  const rootEl = document.querySelector(".root");
  initRouter(rootEl);
})();
