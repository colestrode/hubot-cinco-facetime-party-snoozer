module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  require('time-grunt')(grunt);
  grunt.option('reporter', grunt.option('reporter') || 'spec');

  grunt.initConfig({
    jscs: {
      src: [
        'resources/**/*.js',
        'lib/**/*.js',
        '*.js'
      ]
    },
    jshint: {
      files: [
        'lib',
        '*.js'
      ],
      options: {
        jshintrc: './.jshintrc',
        ignores: ['Gruntfile.js']
      }
    }
  });

  grunt.registerTask('lint', [
    'jshint',
    'jscs'
  ]);

  grunt.registerTask('test', ['lint']);
};
