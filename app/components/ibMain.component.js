var ibMainComponent = {
    templateUrl : "./templates/ibMain.template.html",
    controller : MainController
};

function MainController($rootScope, $cookies, $state) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        $rootScope.sessionUserId = $cookies.get("sessionUserId");
        $rootScope.sessionUserRole = $cookies.get("sessionUserRole");
    };

    $ctrl.logout = function () {
        $rootScope.sessionUserId = undefined;
        $rootScope.sessionRole = undefined;
        $cookies.put("sessionUserId", undefined);
        $cookies.put("sessionRole", undefined);

        $state.go("welcome");
    };

    $ctrl.isLogged = function () {
        return $rootScope.sessionUserId;
    };

    $ctrl.isAdmin = function () {
        return $rootScope.sessionUserRole == 0;
    };

    $ctrl.redirectToLogin = function () {
        $state.go("login");
    };

    $ctrl.redirectToRegistration = function () {
        $state.go("registration");
    };
    
    $ctrl.redirectToRequest = function () {
        $state.go("createRequest");
    };

    $ctrl.redirectToRequestList = function () {
        $state.go("requestList");
    };
}