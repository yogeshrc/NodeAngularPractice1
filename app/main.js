(function(){
    var mainModule = angular.module('MainModule', []);
    var projectsController = function ($scope) {
        $scope.projects = [];
        $scope.projects.push('AngularJS');
        $scope.projects.push('HTML5');
        $scope.projects.push('ExpressJS');
        $scope.projects.push('NodeJS');
        $scope.projects.push('GitHub');
        $scope.projects.push('Arduino');
        
        $scope.title = "My Hobby Projects using";
    }
    mainModule.controller('ProjectsController', projectsController);
}());