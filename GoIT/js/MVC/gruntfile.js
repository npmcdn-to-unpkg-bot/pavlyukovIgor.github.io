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

  // uglify: {
  //   dist:{
  //     src: ['js/script.js'],
  //     dest: 'js/script.min.js'
  //   }
  // },


  cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
  target: {
      files: {
        'style/style.css': ['style/style.min.css']
      }
  },

  },

sass: {
 dist: {
   files: [{
     expand: true,
     cwd: 'style',
     src: ['*.scss'],
     dest: 'style',
     ext: '.css'
   }]
 }
},
watch: {
    sass: {
      files: ['style/*.scss'],
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
