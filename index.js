'use strict';

//TODO create command queue
//Needs sequencing wrapping 0-255
//When we receive a response we can execute next command in queue, or resolve promise.

//TODO add wait command so you can chain promises with a wait

const BB8 = require('./dist/orb/bb8-orb');

let myBB8 = new BB8('3ce5a3fa5fef4aeebe2c7858f8d8de25');
let ctx = myBB8.command;

myBB8.connection.connect()
  .then(() => {
    console.log('Connected to BB8.');
    return myBB8.command.setDevMode();
  })
  .then(console.log.bind(ctx,'Dev mode enabled.'))
  .then(myBB8.command.setBackLED.bind(ctx, 255))
  .then(myBB8.command.setStabilize.bind(ctx, 0))
  .then(myBB8.command.setCalibration.bind(ctx, 180))
  .then(myBB8.command.setStabilize.bind(ctx, 1))
  .then(myBB8.command.setBackLED.bind(ctx, 0))
  .then(myBB8.command.roll.bind(ctx, 255, 0))
  .then(() => {
    console.log('done');
  })
  .catch((err) => {
    console.error(err);
    console.error(err.stack);
  });