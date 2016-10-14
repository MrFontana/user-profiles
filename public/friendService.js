angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      return $http({
        url: '/api/login',
        method: 'POST',
        data: user
      })
      // .then(function(response){
      //   if(response.status === 200){
      //     return response.data;
      //   }
      // })
    },

    getFriends: function() {
    	/* FIX ME */
      return $http({
        url: '/api/profiles',
        method: 'GET'
      }).then(function(response){
        return response.data;
      })
    }
  }
});
