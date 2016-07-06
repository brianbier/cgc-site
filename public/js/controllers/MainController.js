
app.controller('MainController',['$scope','$http',function($scope,$http){
  $scope.post = 'Hello'

  $scope.loading = false;
  $scope.send = function(mail){
    $scope.loading = true;
    $http.post('/sendmail',{
      from: mail.email,
      to: 'briansbier@gmail.com',
      subject: 'New Message from website user',
      text: mail.message
    }).then(res=>{
      $scope.loading = false;
      $scope.serverMessage = "Thank you " + mail.name + " I will be with you shortly!";
      mail.name = ''
      mail.email = ''
      mail.message = ''
    });
  }
}]);