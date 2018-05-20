var requestComponent = {
    templateUrl : "./templates/request.template.html",
    controller : RequestController
};

function RequestController(requestService, $stateParams) {
    var $ctrl = this;
    
    $ctrl.$onInit = function () {
        $ctrl.requestId = $stateParams.requestId;
        requestService.getRequestById($ctrl.requestId).then(function (request) {
            $ctrl.request = request;
        });
    };
}