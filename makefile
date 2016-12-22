develop: compile_server compile_client start_server

compile_server:
	babel server -d build -w --copy-files
compile_client:
	webpack-dev-server --content-base public
start_server:
	nodemon build/index.js -w build
