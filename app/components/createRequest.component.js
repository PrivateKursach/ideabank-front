var createRequestComponent = {
    templateUrl : "./templates/createRequest.template.html",
    controller : CreateRequestController
};

function CreateRequestController(requestService, $rootScope, $state) {
    var $ctrl = this;

    $ctrl.createRequest = function () {
        $ctrl.request.user = {};
        $ctrl.request.user.id = $rootScope.sessionUserId;
        $ctrl.request.status = 0;
        $ctrl.request.dateCreated = new Date().toISOString().substring(0, 10);
        requestService.createRequest($ctrl.request).then(function (createdRequest) {
            $state.go("requestList");
        });
    };
}