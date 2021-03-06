app.controller('MainController',['$scope','$http','services',function($scope,$http,services){
  console.log('controllers loaded');
  $scope.post = 'Hello Brian';
  $scope.date = Date.now();
  $scope.services = services.services;
  // $scope.service = services.services[$routeParams.id]
  $scope.showId = function(event){
    var index = $(event.target).attr('id');
     return $scope.found = services.services[index];
  };

  $scope.loading = false;
  $scope.send = function(mail){
    $scope.loading = true;
    $http.post('/sendmail',{
      from: mail.email,
      to: 'briansbier@gmail.com',
      subject: 'New Message from website user',
      text: mail.message
    }).success(function(response){
            $scope.loading = false;
      $scope.serverMessage = "Thank you " + mail.name + ", I will get back to you shortly!";
      mail.name = '';
      mail.email = '';
      mail.message = '';
    });
    // .then(res=>{
    //   $scope.loading = false;
    //   $scope.serverMessage = "Thank you " + mail.name + " I will be with you shortly!";
    //   mail.name = ''
    //   mail.email = ''
    //   mail.message = ''
    // });
  };
}]);