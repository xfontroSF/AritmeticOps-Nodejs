var server = require("./server"),
	router = require("./router"),
	operacionsAritmetiques = require("./operacionsAritmetiques"),
	handle = {};

handle["/sumar"] = operacionsAritmetiques.sumar;
handle["/restar"] = operacionsAritmetiques.restar;
handle["/multiplicar"] = operacionsAritmetiques.multiplicar;
handle["/dividir"] = operacionsAritmetiques.dividir;
handle["/expensive"] = operacionsAritmetiques.arrel;

server.start(router.route, handle);