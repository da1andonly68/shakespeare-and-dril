let trainedNet;
let net = new brain.NeuralNetwork();
function encode(arg) {
   return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
   return data.map(d => {
       return {
           input: encode(d.input),
           output: d.output
       }
   })
}

function train(data) {
   net.train(processTrainingData(data));
   trainedNet = net.toFunction();
   console.log('Finished training...');
};

function execute(input) {
   let results = trainedNet(encode(input));
   let output;
   results.dril > results.shakespeare ? output = 'Dril' : output = 'Shakespeare';
   console.log(output);
}

train(trainingData)

execute("to be or not to be");