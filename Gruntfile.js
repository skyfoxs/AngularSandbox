module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            options: {
                configFile: 'karma.conf.js',
            },
            continuous: {
                singleRun: true,
            },
            dev: {
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');
};