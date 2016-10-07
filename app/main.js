(function(){
    var projectsController = function ($scope, $http) {
        var apiUrl = '/projects';
        $scope.projects = [];
        $scope.projects.push('AngularJS');
        $scope.projects.push('HTML5');
        $scope.projects.push('ExpressJS');
        $scope.projects.push('NodeJS');
        $scope.projects.push('GitHub');
        $scope.projects.push('Arduino');
        
        $scope.title = "My Hobby Projects using";
        
        $scope.load = function(){
            $http.get(apiUrl).then(onHttpGet, onHttpError);
        }
        
        var onHttpGet = function(response){
            console.log(response.data);
        }
    }
    
    angular.module('MainModule', [])
        .controller('ProjectsController', projectsController);
}());