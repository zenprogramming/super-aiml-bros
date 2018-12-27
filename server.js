/**
 * <Main description>
 * @module Main
 * @version 0.0.1
 * @file Manages the configuration settings for the widget.
 * @author Charles (Chuck) Marshall <cmarshall@zenprogramming.com>
 * @see http://usejsdoc.org/
 * @see https://js.tensorflow.org/
 * 
 * Copyright (c) 2017-2018, ZenProgramming
 * Copyright (c) 2017-2018, Charles Marshall
 */

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + decodeURI(q.pathname);
//  console.log(filename);
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }

    var contentType;
    var fileType = filename.substring(filename.lastIndexOf('.'), filename.length);
    switch (fileType) {
      case '.js': {
        contentType = 'text/javascript';
      } break;
      case '.nes': {
        contentType = 'application/octet-stream';
      } break;
      case '.css': {
        contentType = 'text/css';
      } break;
      case '.html': {
        contentType = 'text/html';
      } break;
      default: {
        contentType = 'text/html';
      } break;
    }
    res.writeHead(200, {'Content-Type': contentType});
    res.write(data); // write a response to the client
    res.end(); // end the response
  });
}).listen(8080); // the server object listens on port 8080

////////////////////////////////////////////////////////////////////////////////

//// Initialize and set up outputs
//var nes = new jsnes.NES({
//  onFrame: function(frameBuffer) {
//    // ... write frameBuffer to screen
//  },
//  onAudioSample: function(left, right) {
//    // ... play audio sample
//  }
//});
//
//// Read ROM data from disk (using Node.js APIs, for the sake of this example)
//const fs = require('fs');
//var romData = fs.readFileSync('path/to/rom.nes', {encoding: 'binary'});
//
//// Load ROM data as a string or byte array
//nes.loadROM(romData);
//
//// Run frames at 60 fps, or as fast as you can.
//// You are responsible for reliable timing as best you can on your platform.
//nes.frame();
//nes.frame();
//// ...
//
//// Hook up whatever input device you have to the controller.
//nes.buttonDown(1, jsnes.Controller.BUTTON_A);
//nes.frame();
//nes.buttonUp(1, jsnes.Controller.BUTTON_A);
//nes.frame();
////...

////////////////////////////////////////////////////////////////////////////////

//var tf = require('@tensorflow/tfjs');
//require('@tensorflow/tfjs-node');
//
//// Define a model for linear regression.
//const model = tf.sequential();
//model.add(tf.layers.dense({units: 1, inputShape: [1]}));
//
//// Prepare the model for training: Specify the loss and the optimizer.
//model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
//
//// Generate some synthetic data for training.
//const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
//const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
//
//// Train the model using the data.
//model.fit(xs, ys, {epochs: 10}).then(() => {
//  // Use the model to do inference on a data point the model hasn't seen before:
//  model.predict(tf.tensor2d([5], [1, 1])).print();
//});
