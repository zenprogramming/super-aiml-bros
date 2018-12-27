/**
 * <RecordData description>
 * @module Cell
 * @version 0.0.1
 * @file Manages the configuration settings for the widget.
 * @author Charles (Chuck) Marshall <cmarshall@zenprogramming.com>
 * @see http://usejsdoc.org/
 * @see https://js.tensorflow.org/
 * 
 * Copyright (c) 2017-2018, ZenProgramming
 * Copyright (c) 2017-2018, Charles Marshall
 */

/* @flow */

document.addEventListener('keypress', (event) => {
  const keyName = event.key;
  if (keyName === 'r') {
    let canvas /*: HTMLCanvasElement */ = document.querySelector('canvas .Screen');
    let context /*: CanvasRenderingContext2D */ = canvas.getContext('2d');
    let imageData /*: Uint8ClampedArray */ = context.getImageData(0, 0, canvas.width, canvas.height);
    let transformedImageDataArray /*: Uint8ClampedArray */ = new Uint8ClampedArray(imageData.length);

    for (let i /*: number */ =0; i<imageData.data.length; i+=4) {
      let r /*: number */ = imageData.data[i];
      let g /*: number */ = imageData.data[i+1];
      let b /*: number */ = imageData.data[i+2];
      let a /*: number */ = imageData.data[i+3];

      // if the pixel color is the sky, make the pixel transparent
      if (r === 0x81 && g === 0x79 && b === 0xFF) {	// sky
        transformedImageDataArray[i+3] = 0;	// change the alpha value to transparent
      }
    }

    let transformedImageData /*: ImageData */ = new ImageData(transformedImageDataArray);
  }
});
