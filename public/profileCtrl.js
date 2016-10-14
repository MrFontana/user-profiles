angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo ) {
	$scope.currentUser = userInfo.currentUser; //FIX ME
	$scope.friends = userInfo.friends; //FIX ME
});
