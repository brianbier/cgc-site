app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
$routeProvider
//HomePage
.when('/',{
  controller: 'MainController',
  templateUrl: 'views/cgctherapy.html'
})
.otherwise({
  redirectTo: '/'
})

$locationProvider.html5Mode(true);
$locationProvider.hashPrefix('!');

}]);