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
      src: ['src/js/script.js'],
      dest: 'src/js/script.min.js'
    }
  },


  cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
  target: {
      files: {
        'src/style/style.css': ['src/style/style.min.css']
      }
  },

  },

sass: {
 dist: {
   files: [{
     expand: true,
     cwd: 'src/style',
     src: ['*.scss'],
     dest: 'src/style',
     ext: '.css'
   }]
 }
},
watch: {
    sass: {
      files: ['src/style/*.scss'],
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
