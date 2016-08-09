module.exports = function(grunt) {

grunt.initConfig({


  uglify: {
    dist:{
      src: ['src/js/script.js'],
      dest: 'build/js/script.min.js'
    }
  },

sass: {
 dist: {
   files: [{
     expand: true,
     cwd: 'src/style',
     src: ['*.scss'],
     dest: 'build/style',
     ext: '.css'
   }]
 }
},

cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'build/style/style.css': ['build/style/style.min.css']
    }
  },

},

watch: {
    sass: {
      files: ['src/style/*.scss'],
      tasks: ['sass'],
    }
  },
imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'src/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'build/img/'
        }]
    }
}
});

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify','cssmin', 'sass','imagemin']);
};
