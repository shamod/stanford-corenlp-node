/*
 * This program tests the start and stop features of the StanfordCoreNLP node library.
 */

import nlplib = module("StanfordCoreNLP");
import nlpconfig = module("NLPConfig");

var config = nlpconfig.NLPConfig.Configuration.readFromFile("../config.json");
console.log("Loaded the ", config.getName(), " config file.");

var nlpServer = new nlplib.StanfordCoreNLP.Server(config);

console.log("NLP server status: ", nlpServer.getStatus().getState());
nlpServer.start();

// Wait 5 seconds and stop
setTimeout(function() {
  nlpServer.stop();
}, 5000);

