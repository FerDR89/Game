import { initWelcomePage } from "../src/pages/welcome";
import { initRulesPage } from "../src/pages/rules";

const routes = [
  {
    path: /\//,
    route: initWelcomePage,
  },
  {
    path: /\/welcome/,
    route: initWelcomePage,
  },
  {
    path: /\/rules/,
    route: initRulesPage,
  },
  {
    path: /\/game/,
    route: null,
  },
  {
    path: /\/results/,
    route: null,
  },
];

export function initRouter(container: Element) {
  function goTo(path: string) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route: string) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.route({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  handleRoute(location.pathname);
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
