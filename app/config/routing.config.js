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
    
    var createRequestState = {
        name: "createRequest",
        url: "/request",
        component: "createRequest"
    };

    var requestListState = {
        name: "requestList",
        url: "/requests",
        component: "requestList"
    };

    var requestState = {
        name: "request",
        url: "/request/{requestId}",
        component: "request"
    };

    $stateProvider.state(welcomeState);
    $stateProvider.state(registrationState);
    $stateProvider.state(loginState);
    $stateProvider.state(createRequestState);
    $stateProvider.state(requestListState);
    $stateProvider.state(requestState);
}