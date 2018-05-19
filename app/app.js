angular.module("app", ["ngCookies", "ui.router", "ui.bootstrap"])
    .config(routing)
    .service("sessionService", sessionService)
    .service("userService", userService)
    .component("ibMain", ibMainComponent)
    .component("ibWelcome", ibWelcomeComponent)
    .component("ibLogin", ibLoginComponent)
    .component("ibRegistration", ibRegistrationComponent);