module.exports = function(config){
    config.set({

        basePath : './',

        files : [
            'app/bower_components/jquery/dist/jquery.js',
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/simpleWeather/jquery.simpleWeather.js',
            'app/resources/scripts/vendor/*.js',
            'app/components/**/*.js',

            'app/config/appConfig.js',

            'tests/testSetup.js',
            
            'app/app.js',
            
            'app/config/runTime.js',
            
            
            'app/controllers/**/*.js',
            'app/directives/**/*.js',
            
            'app/services/**/*.js',
            
            
            'app/model/**/*.js',
            
            
            'tests/mocks/**/*.js',
            'tests/unit/**/*.js'
            
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};