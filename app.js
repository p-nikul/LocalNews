var app = angular.module('flapperNews', ['ui.router']);

    app.config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/home.html',
                    controller: 'MainCtrl'
                })
                .state('posts', {
                    url: '/posts/{id}',
                    templateUrl: '/posts.html',
                    controller: 'PostsCtrl'
                });



            $urlRouterProvider.otherwise('home');
    }]);





    app.factory('posts',[function(){
    var o = {
    posts: []
    }
    return o;
    }]);




    app.controller('MainCtrl', [
    '$scope','posts',
    function($scope,posts){

        $scope.posts = posts.posts;
        $scope.addPost = function(){
            if($scope.title === ''){ return;}
            $scope.posts.push(
                {
                    title: $scope.title,
                    link: $scope.link,
                    upvotes : 0,
                    comments : [
                        {author: 'joe',body: 'post comment data',upvotes: 0},
                        {author: 'nik',body: 'post  cool comment data',upvotes: 0}

                    ]
                });
            $scope.titlepost ='';
        }

        $scope.incrementUpvotes = function(post){
            post.upvotes +=1;
        }
    }]);




    app.controller('PostsCtrl', [
        '$scope',
        '$stateParams',
        'posts',
        function($scope, $stateParams, posts){
            $scope.post = posts.posts[$stateParams.id];
    }]);


/**
 * Created by Nikul on 5/21/2017.
 */
