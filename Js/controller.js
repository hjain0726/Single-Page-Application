app.controller('ctrl', function ($scope) {
    $scope.msg = "Welcome To SPA";
});

app.controller('ctrl2', function ($scope, $routeParams) {
    $scope.name = $routeParams.name;
    $scope.job = $routeParams.job;
});

app.controller('feedback', function ($scope) {
    $scope.obj = {};
    $scope.showform = function (isvalid) {
        if (isvalid) {
            console.log('form fetched', $scope.obj);
            $scope.head = "Your Feedback";
            $scope.name = $scope.obj.uname;
            $scope.email = $scope.obj.email;
            $scope.feedback = $scope.obj.feedback;
            alert('feedback is saved');
        }
        else {
            console.log('form not fetched');
            alert('First fill the form');
        }
    }
});

app.controller('news', function ($scope, $location) {
    $scope.shownews = function () {
        $location.path('news1');
    }
})
