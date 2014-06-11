module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		uglify: {
			js: {
				files: {
					"src/inputhistory.min.js": ["src/inputhistory.js"]
				},
				options: {
					banner: "/*!\n"
						+ " * inputhistory\n"
						+ " * http://github.com/erming/inputhistory\n"
						+ " * v<%= pkg.version %>\n"
						+ " */\n",
				}
			}
		}
	});
	
	// Load and run uglify.
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.registerTask(
		"default",
		["uglify"]
	);
};
