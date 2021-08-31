import "../src/components/text";
import "../src/components/button";
import "../src/components/hands";
import "../src/components/countdown";
import { initRouter } from "../src/router";

(function main() {
  const rootEl = document.querySelector(".root");
  initRouter(rootEl);
})();
