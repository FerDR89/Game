import "../src/components/text";
import "../src/components/button";
import "../src/components/hands";
import "../src/components/countdown";
import { initRouter } from "../src/router";
import { state } from "../src/state";

(function main() {
  // state.init();
  const rootEl = document.querySelector(".root");
  initRouter(rootEl);
})();
