import "../src/components/text";
import "../src/components/button";
import "../src/components/hands";
import "../src/components/countdown";
import "../src/components/star";
import { initRouter } from "../src/router";
import { state } from "../src/state";

(function main() {
  state.getData();
  const rootEl = document.querySelector(".root");
  initRouter(rootEl);
})();
