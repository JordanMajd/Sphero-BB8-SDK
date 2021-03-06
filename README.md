# Sphero-SDK

If you like or are using this project, please give it a :star: for motivation :)

## About

A minimal, unopinionated library to control Sphero, BB8 and Ollie using Javascript over Bluetooth.

> Disclaimer: This project is neither endorsed by Sphero nor Disney

#### Supported Devices:

This SDK is still in development and has partial support for the following devices:

- BB8
- Ollie
- Sphero SPRK

## Getting Started

Before starting ensure:

- [node.js](https://nodejs.org/en/) installed and configured.
- Your device has Bluetooth LE support and it is enabled.

To build:

1. Clone the repository: `git clone https://github.com/JordanMajd/Sphero-SDK.git`
1. From the terminal, navigate into the cloned directory.
1. Install NPM dependencies by running: `npm install`.

To test:

1. From the terminal, navigate into the cloned directory.
1. Run the tests with the command: `npm test`.

If you are connecting to a BB8 or Ollie you will need your devices UUID. If you don't know the UUID of your device you can search for it:

```javascript
'use strict';

const BB8 = require('sphero-sdk').BB8;

BB8().listDevices().then(function(list){
  list.forEach(function(device){
    console.log(device.uuid);
  });
);
```

Then connect to a device and start issuing commands:

```javascript
'use strict';

const BB8 = require('sphero-sdk').BB8;

let bb8 = new BB8('<your BB8 UUID>');

bb8.connect()
	// start rolling forward
  .then(()=> bb8.roll(255, 0))
	// wait 2 seconds before next command
  .then(()=> bb8.wait(2000))
	// disconnect from device
  .then(()=> bb8.disconnect());
```

Documentation for the project is generated by comments in the source code, to generate the documentation ensure gulp is installed and run `gulp build-docs`.

## Project Road Map

- Continue developing full API support for:
  - Sphero
  - Sphero SPRK
  - Ollie
- Update project documentation and examples
- Create project site for docs, projects and examples.
- Create a mock device for CI and unit testing w/o devices present.
- Add support for multi-responses to hold large data.
- Add Web Bluetooth support and browser packaging.

## License

This project uses an MIT license, for more details please view the [LICENSE](/LICENSE) included.
