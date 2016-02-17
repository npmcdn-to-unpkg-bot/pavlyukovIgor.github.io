module.exports = function(grunt) {

grunt.initConfig({
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['src/js/script.js', 'src/js/script1.js', 'src/js/script2.js'],
      dest: 'dest/js/allScripts.js'
    }
  },

  uglify: {
    dist:{
      src: ['dest/js/allScripts.js'],
      dest: 'dest/js/allScripts.min.js'
    }
  },


  cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
  target: {
      files: {
        'dest/css/style.css': ['src/css/style1.css', 'src/css/style2.css']
      }
  },
  
}

});
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat','uglify','cssmin']);
};
