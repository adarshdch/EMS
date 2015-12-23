module.exports = (grunt) ->
	
	require('load-grunt-tasks') grunt;

	grunt.initConfig
		autoprefixer:
			build:
				expand: true
				cwd: 'build'
				src: ['**/*.css']
				dest: 'build'
			stylesheets:
				src: [ 'build/**/*.css', '!build/ems.css' ]
			scripts:
				src: [ 'build/**/*.js', '!build/ems.js' ]
		clean:
			build:
				src: ['build']	# src of the clean configuration is set to "build" to remove the build directory.
		copy:
			build:
				cwd: 'client'		# cwd points to a directory the source files are relative to.
				src: [ '**', '!**/*.styl', '!**/*.coffee' , '!**/*.jade', '!**/vendor/**' ]			# src specifies the source files. '**' is a globbing pattern that tells Grunt to match any file.
				dest: 'build'		# dest is where Grunt will output the result of the task.
				expand: true
		coffee:
			build:
				expand: true
				cwd: 'client'
				src: [ '**/*.coffee' ]
				dest: 'build'
				ext: '.js'
		connect:
			server:
				options:
					port: 8004
					base: 'build'
					hostname: '*'
		cssmin:
			build
				files:
					'build/ems.css': [ 'build/**/*.css' ]
		jade:
			compile:
				options:
					data: {}
				files: [
					expand: true
					cwd: 'client'
					src: [ '**/*.jade' ]
					dest: 'build'
					ext: '.html'
				]
		jshint:
			files: ['client/**/*.js']
			options:
				globals:
					jQuery: true
					console: false
					module: true
					document: true
		stylus:												# Stylus is a nifty language that compiles to CSS.
			build:
				options:									# options specifies how we want the task to behave.
					linenos: true 					# linenos adds the line numbers of the selectors in the source Stylus files.
					compress: false					# compress determines if the CSS output should be compressed
					files: [								# files takes the same file array mapping format
						expand: true
						cwd: 'client'
						src: ['**/*.styl']		# all the files in the source directory that end with .styl. ext
						dest: 'build'
						ext: '.css'						# changes the extension of the output files to .css.
					]
		uglify:
			build:
				options:
					mangle: false
					files:
						'build/ems.js': [ 'build/**/*.js' ]
		watch:												
			stylesheets:										# Watch Stylus files
				files: 'client/**/*.styl'
				tasks: ['stylesheets']
			scripts:												# Watch coffeescript files
				files: 'client/**/*.coffee'
				tasks: [ 'scripts' ]
			jade:														# Watch Jade files
				files: 'client/**/*.jade'
				tasks: ['jade']
			copy:														# Watches all of the remaining files in the application and copies them to the build directory.
				files: [ 'client/**', '!client/**/*.styl', '!client/**/*.coffee', '!client/**/*.jade', '!client/**/vendor/**' ]
				tasks: ['copy']


	grunt.registerTask 'stylesheets', 'Compiles css files.', [ 'stylus', 'autoprefixer', 'cssmin', 'clean:stylesheets' ]
	grunt.registerTask 'scripts', 'Compiles the JavaScript files.', [ 'coffee' , 'uglify', 'clean:scripts']
	grunt.registerTask 'build',	'Compiles all of the assets and copies the files to the build directory.', [ 'clean', 'copy', 'stylesheets', 'scripts', 'jade' ]
	grunt.registerTask 'default', 'Watches the project for changes, automatically builds them and runs a server.', [ 'build', 'connect', 'watch' ]



# The default task runs `build` to create an initial build. Then it starts the Connect server. 
# Finally, it runs watch to watch the files for changes and build them. 
# Since watch runs until it’s killed, the Connect server will run indefinitely. 
# Run grunt in your console and navigate to http://localhost:4000 to see your project!