(function(){
    var projectsController = function ($scope, $http) {
        $scope.load = function(){
            $http.get('/projects').then(onHttpGet, onHttpError);
        }
        
        var onHttpGet = function(response){
            console.log(response.data);
            $scope.projects = response.data.projects;
            $scope.title = response.data.title;
        }
        
        var onHttpError = function(error){
            console.log(error);
        }
        
        $scope.add = function() {
            console.log("TODO: Add new project using bodyparser package");
        }
        $scope.load();
    }
    
    angular.module('MainModule', [])
        .controller('ProjectsController', projectsController);
}());