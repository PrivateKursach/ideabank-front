angular.module("app", ["ngCookies", "ui.router", "ui.bootstrap"])
    .config(routing)
    .component("ibMain", ibMainComponent)
    .component("ibWelcome", ibWelcomeComponent);