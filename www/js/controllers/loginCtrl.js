blank.controller('loginCtrl',function($scope) {
    $scope.loginData = {};
    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {

        var user_parameters = {
            'user[email]': $scope.loginData.email,
            'user[password]': $scope.loginData.password,
        }

        console.log("User Params : ",user_parameters);

    };

});