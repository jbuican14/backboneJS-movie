module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      script: {
        files: 'app/**/*.js',
        tasks: ['browserify'],
        options: {
          interrupt: true,
        },
      },
      templates: {
        files: 'app/**/*.hbs',
        tasks: ['handlebars'],
        options: {
          interrupt: true,
        },
      },
    },

    handlebars: {
      compile: {
        options: {
          namespace: function (ns) {
            console.log(ns);
            return 'views';
          },
          wrapped: true,
          commonjs: true,
          processName: function (filename) {
            return filename.replace('app/templates/', '').replace('.hbs', '');
          },
        },
        files: {
          'app/templates/compiledTemplates.js': ['app/templates/**/*.hbs'],
        },
      },
    },

    browserify: {
      dist: {
        files: {
          'static/bundle.js': ['app/main.js'],
        },
        options: {
          transform: ['brfs'],
        },
      },
    },
    jshint: {
      options: {
        curly: true,
      },
      gruntfile: {
        src: 'Gruntfile.js',
      },
    },
    // Clean public folder
    clean: {
      all: ['dist/*.js'],
    },
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('runNode', function () {
    grunt.util.spawn(
      {
        cmd: 'node',
        args: ['./node_modules/.bin/nodemon', 'server.js'],
        opts: {
          stdio: 'inherit',
        },
      },
      function () {
        grunt.fail.fatal(new Error('nodemon quit'));
      }
    );
  });
  grunt.registerTask('compile', ['handlebars', 'browserify']);
  grunt.registerTask('server', ['compile', 'runNode', 'watch']);

  // default task
  grunt.registerTask('default', ['compile']);
};
