'use strict';

let CoreCommand = require('./core-command');

function SpheroCommand(){
  CoreCommand.call(this);
}
SpheroCommand.prototype = Object.create(CoreCommand.prototype);

module.exports = SpheroCommand;