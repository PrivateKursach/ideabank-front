var requestListComponent = {
    templateUrl : "./templates/requestList.template.html",
    controller : RequestListController
};

function RequestListController(requestService, $rootScope) {
    var $ctrl = this;

    $ctrl.$onInit = function () {
        setRequestList();
    };

    $ctrl.isAdmin = function () {
        return $rootScope.sessionUserRole == 0;
    };
    
    $ctrl.approveRequest = function (request) {
        request.status = 2;
        requestService.updateRequest(request).then(function (request) {
            setRequestList();
        });
    };

    $ctrl.rejectRequest = function (request) {
        request.status = 1;
        requestService.updateRequest(request).then(function (request) {
            setRequestList();
        });
    };
    
    function setRequestList() {
        if ($rootScope.sessionUserRole == 0) {
            requestService.getAllRequests().then(function (requestList) {
                $ctrl.requestList = requestList;
            });
        } else {
            requestService.getRequestsByUserId($rootScope.sessionUserId).then(function (requestList) {
                $ctrl.requestList = requestList;
            });
        }
    }
}