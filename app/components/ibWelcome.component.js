var ibWelcomeComponent = {
    templateUrl : "./templates/ibWelcome.template.html",
    controller : WelcomeController
};

function WelcomeController($rootScope) {
    var $ctrl = this;
    
    $ctrl.isLogged = function () {
        return $rootScope.sessionUserId;
    };

    $ctrl.isAdmin = function () {
        return $rootScope.sessionUserRole == 0;
    };
}