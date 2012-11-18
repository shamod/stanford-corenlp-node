var events = require("minpubsub/minpubsub");
var nlplib = require("./StanfordCoreNLP")
var SERVER_AVAILABLE = "Server started";
var nlpServer = new nlplib.StanfordCoreNLP.Server("../config.json");
console.log("NLP server status: ", nlpServer.getStatus().getState());
nlpServer.start(function () {
    events.publish(SERVER_AVAILABLE);
});
var counter = 0;
var testNLP = function () {
    counter++;
    var testString = null;
    switch(counter) {
        case 1: {
            testString = "Bill Clinton was president from 1992 to 2000.  He is not the president any more.";
            break;

        }
        case 2: {
            testString = "Santa Claus is coming to town.";
            break;

        }
        case 3: {
            nlpServer.stop();

        }
    }
    if(testString) {
        nlpServer.process(testString, function (result) {
            console.log(JSON.stringify(JSON.parse(result), null, "  "));
            events.publish(SERVER_AVAILABLE, testNLP);
        });
    }
};
events.subscribe(SERVER_AVAILABLE, testNLP);
//@ sourceMappingURL=test-01.js.map
