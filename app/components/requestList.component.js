var requestListComponent = {
    templateUrl : "./templates/requestList.template.html",
    controller : RequestListController
};

function RequestListController(requestService, $rootScope) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        if ($rootScope.sessionUserRole == 0) {
            requestService.getAllRequests().then(function (requestList) {
                $ctrl.requestList = requestList;
            });
        } else {
            requestService.getRequestsByUserId($rootScope.sessionUserId).then(function (requestList) {
                $ctrl.requestList = requestList;
            });
        }
    };
}