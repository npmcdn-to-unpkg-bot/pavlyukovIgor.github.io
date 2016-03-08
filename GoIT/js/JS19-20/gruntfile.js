module.exports = function(grunt) {

grunt.initConfig({
  // concat: {
  //   options: {
  //     separator: ';',
  //   },
  //   dist: {
  //     src: ['src/js/script.js', 'src/js/script1.js', 'src/js/script2.js'],
  //     dest: 'dest/js/allScripts.js'
  //   }
  // },

  uglify: {
    dist:{
<<<<<<< HEAD
      src: ['src/js/script.js'],
      dest: 'src/js/script.min.js'
=======
      src: ['js/script.js'],
      dest: 'js/script.min.js'
>>>>>>> origin/master
    }
  },


  cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
  target: {
      files: {
<<<<<<< HEAD
        'src/style/style.css': ['src/style/style.min.css']
=======
        'style/style.css': ['style/style.min.css']
>>>>>>> origin/master
      }
  },

  },

sass: {
 dist: {
   files: [{
     expand: true,
<<<<<<< HEAD
     cwd: 'src/style',
     src: ['*.scss'],
     dest: 'src/style',
=======
     cwd: 'css',
     src: ['*.scss'],
     dest: 'css',
>>>>>>> origin/master
     ext: '.css'
   }]
 }
},
watch: {
    sass: {
<<<<<<< HEAD
      files: ['src/style/*.scss'],
=======
      files: ['css/*.scss'],
>>>>>>> origin/master
      tasks: ['sass'],
    },
  }
});
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['uglify','cssmin', 'sass']);
};
