app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
$routeProvider
//HomePage
.when('/',{
  controller: 'MainController',
  templateUrl: 'index.html'
})
.otherwise({
  redirectTo: '/'
})

$locationProvider.html5Mode(true);
$locationProvider.hashPrefix('!');

}]);