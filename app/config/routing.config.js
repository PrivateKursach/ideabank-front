function routing($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    var welcomeState = {
        name: "welcome",
        url: "/",
        component: "ibWelcome"
    };

    var loginState = {
        name: "login",
        url: "/login",
        component: "ibLogin"
    };

    var registrationState = {
        name: "registration",
        url: "/registration",
        component: "ibRegistration"
    };

    var requestListState = {
        name: "requestList",
        url: "/requests?page",
        component: "ibRequestList",
        params: {
            page: {
                value: '1',
                squash: true
            }
        }
    };

    $stateProvider.state(welcomeState);
    $stateProvider.state(registrationState);
    $stateProvider.state(loginState);
    $stateProvider.state(requestListState);
}