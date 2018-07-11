app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', { templateUrl: 'views/home.html', controller: 'ctrl' })
        .when('/aboutus/:name/:job', { templateUrl: 'views/aboutUs.html', controller: 'ctrl2' })
        .when('/feedback', { templateUrl: 'views/feedback.html', controller: 'feedback' })
        .when('/tc', { templateUrl: 'views/tc.html' })
        .when('/news', { templateUrl: 'views/news.html', controller: 'news' })
        .when('/news1', { templateUrl: 'views/news1.html' })
        .otherwise({ templateUrl: 'views/error.html' });
});