module.exports = function (grunt){
	grunt.loadNpmTasks('grunt-typescript');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		typescript: {
			base: {
				src:['**/*.ts','!node_modules/**/*.ts'],
				options:{
					watch: true,
					module: 'commonjs',
					target:'es5',
					sourceMap:true
				}
			}
		}
	});
	grunt.registerTask('default',['typescript']);
}